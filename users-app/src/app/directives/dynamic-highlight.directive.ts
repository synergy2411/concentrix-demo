import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDynamicHighlight]'
})
export class DynamicHighlightDirective {

  @Input('myColor') myColor: string;
  @HostBinding('style.background-color') bgColor: any;

  @HostListener('mouseenter')
  onmouseenter() {
    this.bgColor = this.myColor;
  }

  @HostListener("mouseleave")
  onmouseleave() {
    this.bgColor = "transparent";
  }

  constructor() { }

}
