import {Component} from '@angular/core';
import {closePopUpAction, PopUpBaseComponent} from '@root-store/router-store/pop-up-base.component';
import {Png} from '@models/vo/png';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PngStoreActions} from '@root-store/png-store';

@Component({
  selector: 'app-png-edit',
  templateUrl: './png-edit.component.html',
  styles: [``]
})
export class PngEditComponent extends PopUpBaseComponent<Png> {

  form: FormGroup;
  id: FormControl;
  name: FormControl;
  class: FormControl;
  keys: string[];

  setItemPerform(value: Png): void {
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

  acceptPerform(item: Png): void {
    if (item.id) {
      this.store$.dispatch(PngStoreActions.EditRequest({
        item, onResult: [
          // azione che verrà invocata al result della chiamata all'interno dell'effect.
          // chiude la popUP.
          // closePopUpAction: metodo per la creazione dell'azione di chiusura della popUP
          closePopUpAction
        ]
      }));
    } else {
      this.store$.dispatch(PngStoreActions.CreateRequest({
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
