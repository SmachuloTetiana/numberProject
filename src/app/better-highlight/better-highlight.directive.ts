import { Directive , OnInit, ElementRef, Renderer2, HostListener, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective {

  @Input() defaultColor: string = 'transparent';
  @Input() activeColor: string = 'yellow';

  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
    this.backgroundColor = 'red';
    this.backgroundColor = this.activeColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black');
    this.backgroundColor = 'transparent';
    this.backgroundColor = this.defaultColor;
  }

}
