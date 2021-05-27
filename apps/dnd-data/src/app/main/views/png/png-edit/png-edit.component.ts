import {ChangeDetectionStrategy, Component} from '@angular/core';
import {closePopUpAction, PopUpBaseComponent} from '@root-store/router-store/pop-up-base.component';
import {Png} from '@models/vo/png';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PngStoreActions} from '@root-store/png-store';
import {ClassLevel} from '@models/vo/class-level';
import {DomainLevel} from '@models/vo/domain-level';
import {Observable} from 'rxjs';
import {selectAllClassLevel, selectAllDomainLevels} from '@root-store/spell-store/selectors';

@Component({
  selector: 'app-png-edit',
  templateUrl: './png-edit.component.html',
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PngEditComponent extends PopUpBaseComponent<Png> {

  form: FormGroup;
  _id: FormControl;
  name: FormControl;
  classLevels: FormControl;
  domainLevels: FormControl;
  keys: string[];

  public classLevelsDP$: Observable<ClassLevel[]> = undefined;
  public domainLevelsDP$: Observable<DomainLevel[]> = undefined;

  setItemPerform(value: Png): void {
    this.makeFrom();
    this.form.reset(value);
  }

  makeFrom(): void {
    this.classLevelsDP$ = this.store$.pipe(
      selectAllClassLevel()
    )

    this.domainLevelsDP$ = this.store$.pipe(
      selectAllDomainLevels()
    )

    this._id = this.fb.control({value: '', disabled: true});
    this.name = this.fb.control('', Validators.required);
    this.classLevels = this.fb.control('', Validators.required);
    this.domainLevels = this.fb.control('', Validators.required);

    this.form = this.fb.group({ // form
      _id: this._id,
      name: this.name,
      classLevels: this.classLevels,
      domainLevels: this.domainLevels
    });
  }

  acceptPerform(item: Png): void {
    if (Png.selectId(item)) {
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
        item: Png.newItem(item), onResult: [
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
