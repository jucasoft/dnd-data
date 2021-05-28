import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {RootStoreState, RouterStoreSelectors, SpellsInventoryStoreActions, SpellsInventoryStoreSelectors, SpellStoreActions} from '@root-store/index';
import {Spell} from '@models/vo/spell';
import {RouterStoreActions} from '@root-store/router-store/index';
import {ConfirmationService, FilterService, MenuItem} from 'primeng/api';
import {PopUpData} from '@root-store/router-store/pop-up-base.component';
import {Table} from 'primeng/table';
import {SpellsInventory} from '@models/vo/spells-inventory';
import {Rulebook} from '@models/vo/rulebook';
import {ClassLevel} from '@models/vo/class-level';
import {Observable} from 'rxjs';
import {Png} from '@models/vo/png';
import {filter, map, tap, withLatestFrom} from 'rxjs/operators';
import {selectAllDenorm} from '@root-store/spell-store/selectors';
import {DomainLevel} from '@models/vo/domain-level';

@Component({
  selector: 'app-spell-list',
  templateUrl: `spell-list.component.html`,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpellListComponent implements OnInit {
  public classLevelToString = ClassLevel.toStringList
  public rulebookToString = Rulebook.toString

  constructor(private store$: Store<RootStoreState.State>,
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
  pngSelected$: Observable<Png>;
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

  ngOnInit(): void {
    console.log('SpellListComponent.ngOnInit()');

    this.cols = [
      {field: 'name', header: 'name', ngClass: '', renderer: null},
      {field: 'schools', header: 'schools', ngClass: '', renderer: null},
      {field: 'castingTime', header: 'castingTime', ngClass: '', renderer: null},
      {field: 'range', header: 'range', ngClass: '', renderer: null},
      {field: 'classLevels', header: 'classLevels', ngClass: '', renderer: ClassLevel.toStringList},
      {field: 'subschools', header: 'subschools', ngClass: '', renderer: null},
      {field: 'area', header: 'area', ngClass: '', renderer: null},
      {field: 'savingThrow', header: 'savingThrow', ngClass: '', renderer: null},
      {field: 'target', header: 'target', ngClass: '', renderer: null},
      {field: 'source', header: 'source', ngClass: '', renderer: Rulebook.toString},
      {field: 'components', header: 'components', ngClass: '', renderer: null},
      {field: 'spellResistance', header: 'spellResistance', ngClass: '', renderer: null},
      {field: 'description', header: 'description', ngClass: '', renderer: null},
      {field: 'descriptors', header: 'descriptors', ngClass: '', renderer: null},
      {field: 'domainLevels', header: 'domainLevels', ngClass: '', renderer: null},
      {field: 'duration', header: 'duration', ngClass: '', renderer: null},
      {field: 'effect', header: 'effect', ngClass: '', renderer: null},
      {field: 'id', header: 'id', ngClass: '', renderer: null},
    ];

    this._selectedColumns = this.cols.slice(0, 5);

    const pngSelectedSource$ = this.store$.pipe(
      select(RouterStoreSelectors.selectRouteParams),
      filter(value => !!value && !!value.png),
      map(value => ({...JSON.parse(atob(value.png))})),
      map((value: Png) => {
        const classLevels = value.classLevels;
        value.classLevelsMap = Png.classLevelsToMap(value.classLevels);
        value.domainLevelsMap = Png.domainLevelsToMap(value.domainLevels);
        return value;
      }),
    );

    this.pngSelected$ = pngSelectedSource$.pipe(
      tap(png => {
        const pngId = png._id;
        this.store$.dispatch(
          SpellsInventoryStoreActions.SearchRequest({queryParams: {pngId}, mode: 'REFRESH'})
        );
      }),
    );

    this.loadingSearch$ = this.store$.pipe(
      select(SpellsInventoryStoreSelectors.selectLoadingSearch),
    );

    this.collection$ = this.store$.pipe(
      selectAllDenorm(),
      withLatestFrom(pngSelectedSource$),
      map(([all, png]) => {
        const spells = all.filter((item: Spell) => {
          const result = item.classLevels.find((clazz: ClassLevel) => {
            const level = png.classLevelsMap[clazz.class];
            return level >= clazz.level;
          })
          return !!result
        })
        return {spells, png};
      }),
      map(({spells, png}) => {
        return spells.map((item: Spell) => {
          const classLevels = item.classLevels.filter(
            (clazz: ClassLevel) => {
              const level = png.classLevelsMap[clazz.class];
              return level >= clazz.level;
            }
          )
          return {...item, classLevels}
        })
      })
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

  onInput(qt: number, spell: Spell, png: Png): void {
    const {_id, user} = png;
    const spells = spell.spells || {...new SpellsInventory(), spellsDictionaryId: spell.id, user, pngId: _id}
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
