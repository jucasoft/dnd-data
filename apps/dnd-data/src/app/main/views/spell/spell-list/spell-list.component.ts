import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {RootStoreState, SpellsInventoryStoreActions, SpellStoreActions} from '@root-store/index';
import {Spell} from '@models/vo/spell';
import {RouterStoreActions} from '@root-store/router-store/index';
import {ConfirmationService} from 'primeng/api';
import {PopUpData} from '@root-store/router-store/pop-up-base.component';
import {Table} from 'primeng/table';
import {SpellsInventory} from '@models/vo/spells-inventory';
import {Rulebook} from '@models/vo/rulebook';
import {ClassLevel} from '@models/vo/class-level';
import {Platform} from '@angular/cdk/platform';

@Component({
  selector: 'app-spell-list',
  templateUrl: `spell-list.component.html`,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpellListComponent implements OnInit {

  constructor(private store$: Store<RootStoreState.State>,
              private confirmationService: ConfirmationService) {
    console.log('SpellListComponent.constructor()');
  }

  public _collection: Spell[];

  @Input()
  set collection(value: Spell[]) {
    this._collection = value;
  }

  public EMPTY = {qt: 0} as SpellsInventory

  public cols: any[];
  _selectedColumns: any[];

  @Input() get selectedColumns(): any[] {
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

      {field: 'subschools', header: 'subschools', ngClass: '', renderer: null},
      {field: 'area', header: 'area', ngClass: '', renderer: null},
      {field: 'savingThrow', header: 'savingThrow', ngClass: '', renderer: null},
      {field: 'target', header: 'target', ngClass: '', renderer: null},
      {field: 'classLevels', header: 'classLevels', ngClass: '', renderer: this.classLevelRenderer},
      {field: 'source', header: 'source', ngClass: '', renderer: this.renderSource},
      {field: 'components', header: 'components', ngClass: '', renderer: null},
      {field: 'spellResistance', header: 'spellResistance', ngClass: '', renderer: null},
      {field: 'description', header: 'description', ngClass: '', renderer: null},
      {field: 'descriptors', header: 'descriptors', ngClass: '', renderer: null},
      {field: 'domainLevels', header: 'domainLevels', ngClass: '', renderer: null},
      {field: 'duration', header: 'duration', ngClass: '', renderer: null},
      {field: 'effect', header: 'effect', ngClass: '', renderer: null},
      {field: 'id', header: 'id', ngClass: '', renderer: null},
    ];

    this._selectedColumns = this.cols.slice(0, 4);
  }

  onInput(qt: number, spell: Spell): void {
    console.log('SpellListComponent.onSpellChange()');
    const spells = spell.spells || {...new SpellsInventory(), spellsDictionaryId: spell.id}
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

  renderSource(source: Rulebook): string {
    return `${source.rulebook}, page ${source.page}`
  }

  classLevelRenderer(classLevels: ClassLevel[]): string {
    return classLevels.map((value: ClassLevel) => `${value.class} (${value.level})`).join(', ')
  }
}
