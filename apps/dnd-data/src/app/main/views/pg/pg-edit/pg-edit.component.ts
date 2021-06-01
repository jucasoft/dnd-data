import {ChangeDetectionStrategy, Component} from '@angular/core';
import {closePopUpAction, PopUpBaseComponent} from '@root-store/router-store/pop-up-base.component';
import {Pg} from '@models/vo/pg';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PgStoreActions} from '@root-store/pg-store';
import {ClassLevel} from '@models/vo/class-level';
import {DomainLevel} from '@models/vo/domain-level';
import {Observable} from 'rxjs';
import {SpellStoreSelectors} from '@root-store/spell-store/index';
import {select} from '@ngrx/store';

@Component({
  selector: 'app-pg-edit',
  templateUrl: './pg-edit.component.html',
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PgEditComponent extends PopUpBaseComponent<Pg> {

  form: FormGroup;
  name: FormControl;
  classLevels: FormControl;
  domainLevels: FormControl;
  rulebooks: FormControl;
  schools: FormControl;
  keys: string[];

  lastItem: Pg;

  public classLevelsDP$: Observable<ClassLevel[]> = undefined;
  public domainLevelsDP$: Observable<DomainLevel[]> = undefined;
  public rulebooksDP$: Observable<string[]> = undefined;
  public schoolsDP$: Observable<string[]> = undefined;

  setItemPerform(value: Pg): void {
    this.lastItem = value;
    this.makeFrom();
    this.form.reset(value);
  }

  makeFrom(): void {
    this.classLevelsDP$ = this.store$.pipe(
      select(SpellStoreSelectors.selectAllClassLevel)
    )

    this.domainLevelsDP$ = this.store$.pipe(
      select(SpellStoreSelectors.selectAllDomainLevels)
    )

    this.rulebooksDP$ = this.store$.pipe(
      select(SpellStoreSelectors.selectAllRulebooks)
    )

    this.schoolsDP$ = this.store$.pipe(
      select(SpellStoreSelectors.selectAllSchools)
    )

    this.name = this.fb.control('', Validators.required);
    this.classLevels = this.fb.control('', Validators.required);
    this.domainLevels = this.fb.control({value: ''}, Validators.required);
    this.rulebooks = this.fb.control({value: ''});
    this.schools = this.fb.control({value: ''});

    this.form = this.fb.group({ // form
      name: this.name,
      classLevels: this.classLevels,
      domainLevels: this.domainLevels,
      rulebooks: this.rulebooks,
      schools: this.schools
    });
  }

  acceptPerform(pg: Pg): void {
    const item: Pg = {...this.lastItem, ...pg};
    if (Pg.selectId(item)) {
      this.store$.dispatch(PgStoreActions.EditRequest({
        item, onResult: [
          // azione che verrà invocata al result della chiamata all'interno dell'effect.
          // chiude la popUP.
          // closePopUpAction: metodo per la creazione dell'azione di chiusura della popUP
          closePopUpAction
        ]
      }));
    } else {
      this.store$.dispatch(PgStoreActions.CreateRequest({
        item: Pg.newItem(item), onResult: [
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
