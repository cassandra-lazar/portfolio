import {
  Directive,
  ElementRef,
  Renderer2,
  Input,
  OnInit,
  HostListener,
} from '@angular/core';

let styleInjected = false;

@Directive({
  selector: '[appCopyToClipboard]',
  standalone: false,
})
export class CopyToClipboardDirective implements OnInit {
  @Input('appCopyToClipboard') copyText = '';

  private iconEl!: HTMLElement;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    if (!styleInjected) {
      const styleEl = this.renderer.createElement('style');
      this.renderer.appendChild(
        styleEl,
        this.renderer.createText(`
          .copied-toast {
            color: #98ff98;
            font-size: 0.9rem;
            animation: fadeInOut 2s ease;
          }

          @keyframes fadeInOut {
            0% { opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { opacity: 0; }
          }

          .copy-icon {
            cursor: pointer;
            color: #fff;
            transition: color 0.3s;
            font-size: 1rem;
          }

          .copy-icon:hover {
            color: #98ff98;
          }
        `)
      );
      this.renderer.appendChild(document.head, styleEl);
      styleInjected = true;
    }

    this.iconEl = this.renderer.createElement('i');
    this.renderer.addClass(this.iconEl, 'pi');
    this.renderer.addClass(this.iconEl, 'pi-copy');
    this.renderer.addClass(this.iconEl, 'copy-icon');
    this.renderer.appendChild(this.el.nativeElement, this.iconEl);
  }

  @HostListener('click')
  onClick() {
    if (!this.copyText) return;

    // copy text
    const textarea = document.createElement('textarea');
    textarea.value = this.copyText;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    // show confirmation message
    const toast = this.renderer.createElement('span');
    const text = this.renderer.createText('Copied!');
    this.renderer.appendChild(toast, text);
    this.renderer.addClass(toast, 'copied-toast');
    this.renderer.appendChild(this.el.nativeElement, toast);

    setTimeout(() => {
      this.renderer.removeChild(this.el.nativeElement, toast);
    }, 2000);
  }
}
