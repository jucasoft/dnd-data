import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SpellsInventory} from '@models/vo/spells-inventory';

@Component({
  selector: 'dnd-data-qt-stepper',
  template: `
    <div class="p-formgroup-inline">
      <button (click)="onInput(spellsInventory?.qt-1)"
              pButton
              [disabled]="spellsInventory.qt<1"
              type="button"
              icon="pi pi-minus"
              class="p-button-sm p-mr-1"
              iconPos="left">
      </button>
      <button *ngIf="loading" pButton type="button" class="p-button-sm p-mr-1" icon="fas fa-spinner fa-pulse" iconPos="left"></button>
      <button (click)="onInput(0)"
              *ngIf="!loading"
              [disabled]="spellsInventory.qt<1"
              pButton
              type="button"
              class="p-button-sm p-mr-1"
              [label]="spellsInventory.qt+''"
              iconPos="left">
      </button>
      <button (click)="onInput(spellsInventory.qt+1)"
              pButton
              [disabled]="spellsInventory.qt>8"
              type="button"
              icon="pi pi-plus"
              class="p-button-sm"
              iconPos="left">
      </button>
    </div>  `,
  styles: [`
  button{
    height: 40px;
  }
  `]
})
export class QtStepperComponent implements OnInit {
  @Output()
  change: EventEmitter<number> = new EventEmitter<number>()

  @Input()
  spellsInventory: SpellsInventory;

  loading = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  onInput(qt): void {
    this.loading = true;
    this.change.emit(qt)
  }
}
