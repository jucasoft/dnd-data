import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SpellsInventory} from '@models/vo/spells-inventory';

@Component({
  selector: 'dnd-data-qt-stepper',
  template: `
    <div class="p-formgroup-inline">
      <button (click)="onInput(spellsInventory?.qt-1)"
              pButton
              type="button"
              icon="pi pi-minus"
              class="p-button-sm p-mr-2"
              iconPos="left">
      </button>
      <button (click)="onInput(0)"
              pButton
              type="button"
              class="p-button-sm p-mr-2"
              [label]="spellsInventory.qt+''"
              iconPos="left">
      </button>
      <button (click)="onInput(spellsInventory.qt+1)"
              pButton
              type="button"
              icon="pi pi-plus"
              class="p-button-sm"
              iconPos="left">
      </button>
    </div>  `,
  styles: []
})
export class QtStepperComponent implements OnInit {
  @Output()
  change: EventEmitter<number> = new EventEmitter<number>()

  @Input()
  spellsInventory: SpellsInventory;

  constructor() {
  }

  ngOnInit(): void {
  }

  onInput(qt): void {
    this.change.emit(qt)
  }
}
