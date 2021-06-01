import {Component, OnInit} from '@angular/core';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {State} from '@root-store/state';
import {Info} from '@models/vo/info';

@Component({
  selector: 'dnd-data-info',
  template: `
    <form
      class="dynamic-form"
      [formGroup]="form">

      <div class="p-grid">
        <div class="p-col">
          <label for="classLevels"><strong>Score</strong></label><br>
          <p-rating [formControl]="score"></p-rating>
        </div>
      </div>

      <div class="p-grid">
        <div class="p-col">
          <label for="domainLevels"><strong>Note</strong></label><br>
          <textarea [rows]="5" [cols]="30" pInputTextarea [formControl]="note"></textarea>
        </div>
      </div>

    </form>

    <button pButton class="p-button-success mr-1" [disabled]="!form.valid" label="save" (click)="submit(form.getRawValue())"></button>

  `,
  styles: [``]
})
export class InfoComponent implements OnInit {

  item: Info;

  form: FormGroup;
  note: FormControl;
  score: FormControl;

  constructor(private ref: DynamicDialogRef,
              private fb: FormBuilder,
              private store$: Store<State>,
              private config: DynamicDialogConfig) {
  }

  ngOnInit() {
    this.item = this.config.data;
    this.makeFrom();
    this.form.reset(this.item);
  }

  makeFrom(): void {
    this.note = this.fb.control('', Validators.required);
    this.score = this.fb.control('', Validators.required);

    this.form = this.fb.group({
      note: this.note,
      score: this.score
    });
  }

  submit(rawValue: Info): void {
    this.ref.close({...this.item, ...rawValue})
  }

  cancel(): void {
    this.ref.close()
  }
}
