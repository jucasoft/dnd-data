import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {RootStoreState, SpellsInventoryStoreActions, SpellStoreActions} from '@root-store/index';
import {Spell} from '@models/vo/spell';
import {RouterStoreActions} from '@root-store/router-store/index';
import {ConfirmationService} from 'primeng/api';
import {PopUpData} from '@root-store/router-store/pop-up-base.component';
import {Table} from 'primeng/table';
import {Dictionary} from '@ngrx/entity';
import {SpellsInventory} from '@models/vo/spells-inventory';

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

  // public _itemsSelected: Spell[];
  //
  // @Input()
  // set itemsSelected(value: Spell[]) {
  //   this._itemsSelected = value;
  // }
  //
  // public _entitiesSelected: Dictionary<Spell>;
  //
  // @Input()
  // set entitiesSelected(value: Dictionary<Spell>) {
  //   this._entitiesSelected = value;
  // }

  ngOnInit(): void {
    console.log('SpellListComponent.ngOnInit()');
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
}
