import {Directive, Input, NgModule, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

export class NgLetContext {
  $implicit: any = null;
  ngLet: any = null;
}

@Directive({
  selector: '[ngLet]'
})
export class NgLetDirective implements OnInit {
  private _context = new NgLetContext();

  constructor(private _vcr: ViewContainerRef, private _templateRef: TemplateRef<NgLetContext>) {
  }

  @Input()
  set ngLet(value: any) {
    this._context.$implicit = this._context.ngLet = value;
  }

  ngOnInit() {
    this._vcr.createEmbeddedView(this._templateRef, this._context);
  }
}

@NgModule({
  declarations: [NgLetDirective],
  exports: [NgLetDirective]
})
export class NgLetModule {
}
