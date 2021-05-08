import {Component} from '@angular/core';
import {closePopUpAction, PopUpBaseComponent} from '@root-store/router-store/pop-up-base.component';
import {Spell} from '@models/vo/spell';
import {FormGroup} from '@angular/forms';
import {SpellStoreActions} from '@root-store/spell-store';


@Component({
  selector: 'app-spell-edit',
  templateUrl: './spell-edit.component.html',
  styles: [``]
})
export class SpellEditComponent extends PopUpBaseComponent<Spell> {

  form: FormGroup;
  keys: string[];

  setItemPerform(value: Spell): void {
    const group = this.fb.group({});
    this.keys = Object.keys(value);
    this.keys.forEach(key => group.addControl(key, this.fb.control({value: value[key], disabled: key === 'id'})));
    this.form = group;
  }

  acceptPerform(item: Spell): void {
    if (item.id) {
      this.store$.dispatch(SpellStoreActions.EditRequest({
        item, onResult: [
          // azione che verrà invocata al result della chiamata all'interno dell'effect.
          // chiude la popUP.
          // closePopUpAction: metodo per la creazione dell'azione di chiusura della popUP
          closePopUpAction
        ]
      }));
    } else {
      this.store$.dispatch(SpellStoreActions.CreateRequest({
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
