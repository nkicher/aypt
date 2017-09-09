import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    let noHoverSrc = this.elRef.nativeElement.getAttribute('src');
    let hoverSrc = noHoverSrc.split('/')[1].split('.')[0];
    let src = 'assets/' + hoverSrc + '-hover.svg';
    this.renderer.setAttribute(this.elRef.nativeElement, 'src', src);
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    let hoverSrc = this.elRef.nativeElement.getAttribute('src');
    let noHoverSrc = hoverSrc.split('/')[1].split('-')[0];
    let src = 'assets/' + noHoverSrc + '.svg';
    this.renderer.setAttribute(this.elRef.nativeElement, 'src', src);
  }
}
