import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {InfoStoreActions, RootStoreState, RouterStoreSelectors, SpellsInventoryStoreActions, SpellsInventoryStoreSelectors, SpellStoreActions, SpellStoreSelectors} from '@root-store/index';
import {Spell} from '@models/vo/spell';
import {RouterStoreActions} from '@root-store/router-store/index';
import {ConfirmationService, FilterService, MenuItem} from 'primeng/api';
import {PopUpData} from '@root-store/router-store/pop-up-base.component';
import {Table} from 'primeng/table';
import {SpellsInventory} from '@models/vo/spells-inventory';
import {Rulebook} from '@models/vo/rulebook';
import {ClassLevel} from '@models/vo/class-level';
import {Observable} from 'rxjs';
import {Pg} from '@models/vo/pg';
import {filter, map, tap, withLatestFrom} from 'rxjs/operators';
import {DialogService} from 'primeng/dynamicdialog';
import {InfoComponent} from '@views/spell/components/info.component';
import {Info} from '@models/vo/info';
import {DomainLevel} from '@models/vo/domain-level';

@Component({
  selector: 'app-spell-list',
  templateUrl: `spell-list.component.html`,
  styles: [``],
  providers: [DialogService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpellListComponent implements OnInit {

  constructor(private store$: Store<RootStoreState.State>,
              private dialogService: DialogService,
              private filterService: FilterService,
              private confirmationService: ConfirmationService) {

    this.filterService.register('filterDnD', (value, filter): boolean => {

      if (!filter) {
        return true;
      }

      if (filter.checked) {
        return true;
      }

      return value && value.qt > 0;
    });

  }

  collection$: Observable<Spell[]>;
  pgSelected$: Observable<Pg>;
  loadingSearch$: Observable<boolean>;

  public EMPTY = {qt: 0} as SpellsInventory

  items: MenuItem[];

  public cols: any[];
  _selectedColumns: any[];

  get selectedColumns(): any[] {
    return this._selectedColumns;
  }

  set selectedColumns(val: any[]) {
    this._selectedColumns = this.cols.filter(col => val.includes(col));
  }


  public classLevelToString = ClassLevel.toStringList
  public rulebookToString = Rulebook.toString

  /**
   * filtra e renderizza solo le classi selezioante nel PG
   * @param values
   * @param pg
   */
  public classLevelsRenderer = (values: ClassLevel[], pg: Pg): string => {
    const result = values.filter((item: ClassLevel) => {
        const level = pg.classLevelsMap[item.class];
        return level === item.level;
      }
    );
    return ClassLevel.toStringList(result);
  }

  /**
   * filtra e visualizza solo i libri selezionati el PG
   * @param values
   * @param pg
   */
  public rulebooksRenderer = (item: Rulebook, pg: Pg): string => {
    return item.rulebook;
  }


  /**
   * filtra e visualizza solo i libri selezionati el PG
   * @param values
   * @param pg
   */
  public domainLevelsRenderer = (items: DomainLevel[], pg: Pg): string => {
    const result = items.filter((item: DomainLevel) => {
        const level = pg.domainLevelsMap[item.domain];
        return level === item.level;
      }
    );
    return DomainLevel.toStringList(result);
  }

  ngOnInit(): void {
    console.log('SpellListComponent.ngOnInit()');

    this.cols = [
      {field: 'name', header: 'name', ngClass: '', renderer: null},
      {field: 'schools', header: 'schools', ngClass: '', renderer: null},
      {field: 'castingTime', header: 'castingTime', ngClass: '', renderer: null},
      {field: 'range', header: 'range', ngClass: '', renderer: null},
      {field: 'classLevels', header: 'classLevels', ngClass: '', renderer: this.classLevelsRenderer.bind(this)},
      {field: 'source', header: 'source', ngClass: '', renderer: this.rulebooksRenderer.bind(this)},
      {field: 'domainLevels', header: 'domainLevels', ngClass: '', renderer: this.domainLevelsRenderer.bind(this)},
      {field: 'subschools', header: 'subschools', ngClass: '', renderer: null},
      {field: 'area', header: 'area', ngClass: '', renderer: null},
      {field: 'savingThrow', header: 'savingThrow', ngClass: '', renderer: null},
      {field: 'target', header: 'target', ngClass: '', renderer: null},
      {field: 'components', header: 'components', ngClass: '', renderer: null},
      {field: 'spellResistance', header: 'spellResistance', ngClass: '', renderer: null},
      {field: 'description', header: 'description', ngClass: '', renderer: null},
      {field: 'descriptors', header: 'descriptors', ngClass: '', renderer: null},
      {field: 'duration', header: 'duration', ngClass: '', renderer: null},
      {field: 'effect', header: 'effect', ngClass: '', renderer: null},
      {field: 'id', header: 'id', ngClass: '', renderer: null},
    ];

    this._selectedColumns = this.cols.slice(0, 7);

    const pgSelectedSource$ = this.store$.pipe(
      select(RouterStoreSelectors.selectRouteParams),
      filter(value => !!value && !!value.pg),
      map(value => ({...JSON.parse(atob(value.pg))})),
      map((value: Pg) => {
        const classLevels = value.classLevels;
        value.classLevelsMap = Pg.classLevelsToMap(value.classLevels);
        value.domainLevelsMap = Pg.domainLevelsToMap(value.domainLevels);
        return value;
      }),
    );

    this.pgSelected$ = pgSelectedSource$.pipe(
      tap(pg => {
        const pgId = pg._id;
        this.store$.dispatch(
          SpellsInventoryStoreActions.SearchRequest({queryParams: {pgId}, mode: 'REFRESH'})
        );
      }),
    );

    this.loadingSearch$ = this.store$.pipe(
      select(SpellsInventoryStoreSelectors.selectLoadingSearch),
    );

    this.collection$ = this.store$.pipe(
      select(SpellStoreSelectors.selectEntitiesDenorm),
      map(values => Object.values(values)),
      withLatestFrom(pgSelectedSource$),
      map(([all, pg]) => {
        const spells = all.filter((item: Spell) => {
          const resultC = item.classLevels.find((clazz: ClassLevel) => {
            const level = pg.classLevelsMap[clazz.class];
            return level === clazz.level;
          })

          const resultD = item.domainLevels.find((clazz: DomainLevel) => {
            const level = pg.domainLevelsMap[clazz.domain];
            return level === clazz.level;
          })

          return !!resultC || !!resultD;
        })
        return {spells, pg};
      }),
      map(value => value.spells)
    );

    this.items = [
      {
        label: 'Copy text ...IN SVILUPPARE...',
        icon: 'pi pi-copy',
        command: () => {
          console.log('SpellListComponent.command()');
        }
      },
      {
        label: 'Copy JSON ...IN SVILUPPARE...',
        icon: 'pi pi-copy',
        command: () => {
          console.log('SpellListComponent.command()');
        }
      },
    ];

  }

  show(spell: Spell) {

    const data = spell.info || {
      spellsDictionaryId: spell.id,
      user: null,
      note: '',
      score: 0
    }

    const ref = this.dialogService.open(InfoComponent, {
      header: 'Info',
      data
    });

    ref.onClose.subscribe((item: Info) => {
      if (item) {
        if (item._id) {
          this.store$.dispatch(InfoStoreActions.EditRequest({item}));
        } else {
          this.store$.dispatch(InfoStoreActions.CreateRequest({item}));
        }
      }
    });

  }

  onInput(qt: number, spell: Spell, pg: Pg): void {
    const {_id, user} = pg;
    const spells = spell.spells || {...new SpellsInventory(), spellsDictionaryId: spell.id, user, pgId: _id}
    const item = {...spells, qt};
    if (!item._id) {
      this.store$.dispatch(SpellsInventoryStoreActions.CreateRequest({item}));
    } else {
      this.store$.dispatch(SpellsInventoryStoreActions.EditRequest({item}));
    }
  }

  onEdit(item): void {
    console.log('SpellListComponent.onEdit()');

    const data: PopUpData<Spell> = {
      item,
      props: {title: 'Edit Spell', route: 'spell'}
    };

    // apro la popUP
    this.store$.dispatch(RouterStoreActions.RouterGoPopUp({
      path: ['spell', {outlets: {popUp: ['edit']}}],
      data
    }));

  }

  onCopy(value): void {
    console.log('SpellListComponent.onCopy()');

    const item = {...{}, ...value, ...{id: null}};
    const data: PopUpData<Spell> = {
      item,
      props: {title: 'Copy Spell', route: 'spell'}
    };

    this.store$.dispatch(RouterStoreActions.RouterGoPopUp({
      path: ['spell', {outlets: {popUp: ['edit']}}],
      data
    }));

  }

  onDelete(item): void {

    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        this.store$.dispatch(SpellStoreActions.DeleteRequest({item}));
      }
    });

  }

  onSelectionChange(items: Spell[]): void {
    console.log('SpellListComponent.onSelectionChange()');
    console.log('items', items);
    this.store$.dispatch(SpellStoreActions.SelectItems({items}));
  }

  clear(table: Table): void {
    table.clear();
  }

  onChange(item: any): void {
    this.store$.dispatch(SpellStoreActions.AddManySelected({items: [item]}));
  }

}
