import {Component} from '@angular/core';
import {closePopUpAction, PopUpBaseComponent} from '@root-store/router-store/pop-up-base.component';
import {SpellMetaInfo} from '@models/vo/spell-meta-info';
import {FormGroup} from '@angular/forms';
import {SpellMetaInfoStoreActions} from '@root-store/spell-meta-info-store';


@Component({
  selector: 'app-spell-meta-info-edit',
  templateUrl: './spell-meta-info-edit.component.html',
  styles: [``]
})
export class SpellMetaInfoEditComponent extends PopUpBaseComponent<SpellMetaInfo> {

  form: FormGroup;
  keys: string[];

  setItemPerform(value: SpellMetaInfo): void {
    const group = this.fb.group({});
    this.keys = Object.keys(value);
    this.keys.forEach(key => group.addControl(key, this.fb.control({value: value[key], disabled: key === 'id'})));
    this.form = group;
  }

  acceptPerform(item: SpellMetaInfo): void {
    if (item.id) {
      this.store$.dispatch(SpellMetaInfoStoreActions.EditRequest({
        item, onResult: [
          // azione che verrà invocata al result della chiamata all'interno dell'effect.
          // chiude la popUP.
          // closePopUpAction: metodo per la creazione dell'azione di chiusura della popUP
          closePopUpAction
        ]
      }));
    } else {
      this.store$.dispatch(SpellMetaInfoStoreActions.CreateRequest({
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
