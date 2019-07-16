import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

	// @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
	// @HostBinding('style.color') color: string = 'black';
	
	@Input() defaultColor: string = 'transparent';
	@Input() highlightColor: string = 'blue';
	
	@HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;
	@HostBinding('style.color') color: string = 'black';	// no change

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
	}

  @HostListener('mouseenter') mouseover(eventData: Event) {

    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'magenta');

	// this.backgroundColor = 'purple';
	// this.color = 'yellow';

	this.backgroundColor = this.highlightColor;
	this.color = 'yellow';

  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    
	// this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black');
	
	// this.backgroundColor = 'black';
	// this.color = 'white';

	this.backgroundColor = this.defaultColor;
	this.color = 'green';
  }

}
