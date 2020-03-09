import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef, 
    private rederer: Renderer2) { }

    @HostListener('mouseenter') onMouseEnter(){
      this.rederer.addClass(this.el.nativeElement, 'highlight');
    }

    @HostListener('mouseleave') onMouseLeave(){
      this.rederer.removeClass(this.el.nativeElement,'highlight');
    }

}
