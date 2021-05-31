import {Component, OnInit} from '@angular/core';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {State} from '@root-store/state';
import {Comment} from '@models/vo/comment';

@Component({
  selector: 'dnd-data-comment',
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
          <textarea [rows]="5" [cols]="30" pInputTextarea></textarea>
        </div>
      </div>

    </form>

    <ng-template pTemplate="footer">
      <button pButton class="p-button-success mr-1" [disabled]="!form.valid" label="save" (click)="submit(form.getRawValue())"></button>
      <button pButton type="button" label="Cancel" (click)="cancel()"></button>
    </ng-template>

  `,
  styles: [``]
})
export class CommentComponent implements OnInit {

  item: Comment;

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

  submit(rawValue: Comment): void {
    this.ref.close(rawValue)
  }

  cancel(): void {
    this.ref.close()
  }
}
