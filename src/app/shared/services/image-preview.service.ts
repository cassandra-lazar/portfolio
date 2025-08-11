import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImagePreviewService {
  private renderer: Renderer2;
  private modalElement?: HTMLElement;

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  open(imageUrl: string) {
    // remove existing image
    this.close();

    // create overlay
    this.modalElement = this.renderer.createElement('div');
    this.renderer.setStyle(this.modalElement, 'position', 'fixed');
    this.renderer.setStyle(this.modalElement, 'inset', '0');
    this.renderer.setStyle(
      this.modalElement,
      'background',
      'rgba(0, 0, 0, 0.85)'
    );
    this.renderer.setStyle(this.modalElement, 'display', 'flex');
    this.renderer.setStyle(this.modalElement, 'justifyContent', 'center');
    this.renderer.setStyle(this.modalElement, 'alignItems', 'center');
    this.renderer.setStyle(this.modalElement, 'zIndex', '2000');
    this.renderer.setStyle(this.modalElement, 'cursor', 'zoom-out');

    // create image
    const img = this.renderer.createElement('img');
    this.renderer.setAttribute(img, 'src', imageUrl);
    this.renderer.setStyle(img, 'maxWidth', '80%');
    this.renderer.setStyle(img, 'maxHeight', '80%');
    this.renderer.setStyle(img, 'borderRadius', '20px');
    this.renderer.setStyle(img, 'boxShadow', '0 4px 15px rgba(0,0,0,0.5)');

    // click close
    this.renderer.listen(this.modalElement, 'click', () => this.close());

    // add image and overlay
    this.renderer.appendChild(this.modalElement, img);
    this.renderer.appendChild(document.body, this.modalElement);
  }

  close() {
    if (this.modalElement) {
      this.renderer.removeChild(document.body, this.modalElement);
      this.modalElement = undefined;
    }
  }
}
