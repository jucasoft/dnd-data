import {Component} from '@angular/core';
import {closePopUpAction, PopUpBaseComponent} from '@root-store/router-store/pop-up-base.component';
import {SpellBoard} from '@models/vo/spell-board';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SpellBoardStoreActions} from '@root-store/spell-board-store';


@Component({
  selector: 'app-spell-board-edit',
  templateUrl: './spell-board-edit.component.html',
  styles: [``]
})
export class SpellBoardEditComponent extends PopUpBaseComponent<SpellBoard> {

  form: FormGroup;
  id: FormControl;
  name: FormControl;
  class: FormControl;
  keys: string[];

  setItemPerform(value: SpellBoard): void {
    this.makeFrom();
    this.form.reset(value);
  }

  makeFrom(): void {
    this.id = this.fb.control({value: '', disabled: true});
    this.name = this.fb.control('', Validators.required);
    this.class = this.fb.control('', Validators.required);

    this.form = this.fb.group({ // form
      id: this.id, // attributo
      name: this.name, // attributo
      calss: this.class // attributo
    });
  }

  acceptPerform(item: SpellBoard): void {
    if (item.id) {
      this.store$.dispatch(SpellBoardStoreActions.EditRequest({
        item, onResult: [
          // azione che verrà invocata al result della chiamata all'interno dell'effect.
          // chiude la popUP.
          // closePopUpAction: metodo per la creazione dell'azione di chiusura della popUP
          closePopUpAction
        ]
      }));
    } else {
      this.store$.dispatch(SpellBoardStoreActions.CreateRequest({
        item, onResult: [
          // azione che verrà invocata al result della chiamata all'interno dell'effect.
          // chiude la popUP.
          // closePopUpAction: metodo per la creazione dell'azione di chiusura della popUP
          closePopUpAction
        ]
      }));
    }
  }

  // cancel(): void {
  //   this.store$.dispatch(closePopUpAction(this.route));
  // }
}
