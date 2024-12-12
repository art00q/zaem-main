import {
    Directive,
    ElementRef,
    EventEmitter,
    HostListener,
    Output
  } from '@angular/core';
  
  @Directive({
    selector: '[appSpyScroll]'
  })
  export class SpyScrollDirective {
    @Output() isVisibleChange = new EventEmitter<boolean>();
  
    constructor(private el: ElementRef) {}
  
    @HostListener('window:scroll', [])
    onWindowScroll(): void {
      this.checkVisibility();
    }
  
    private checkVisibility(): void {
      const rect = this.el.nativeElement.getBoundingClientRect();
      const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
  
      this.isVisibleChange.emit(isVisible);
    }
  }
  