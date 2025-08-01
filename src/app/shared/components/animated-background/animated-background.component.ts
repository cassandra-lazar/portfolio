import {
  Component,
  ElementRef,
  OnDestroy,
  AfterViewInit,
  ViewChild,
} from '@angular/core';
// @ts-ignore
//import * as VANTA from 'vanta/dist/vanta.fog.min';
import * as VANTA from 'vanta/dist/vanta.clouds.min';
// @ts-ignore
import * as THREE from 'three';

@Component({
  selector: 'app-animated-background',
  standalone: false,
  templateUrl: './animated-background.component.html',
  styleUrls: ['./animated-background.component.scss'],
})
export class AnimatedBackgroundComponent implements AfterViewInit, OnDestroy {
  @ViewChild('vantaRef', { static: true }) vantaRef!: ElementRef;
  vantaEffect: any;

  ngAfterViewInit() {
    // fog bg effect
    // this.vantaEffect = VANTA.default({
    //   el: this.vantaRef.nativeElement,
    //   THREE,
    //   mouseControls: true,
    //   touchControls: true,
    //   highlightColor: 0xbb86fc,
    //   midtoneColor: 0x7f39fb,
    //   lowlightColor: 0x4a148c,
    //   baseColor: 0x000000,
    //   blurFactor: 0.5,
    //   speed: 1,
    //   zoom: 1.0,
    // });

    //clouds bg effect
    this.vantaEffect = VANTA.default({
      el: this.vantaRef.nativeElement,
      THREE,
      mouseControls: false,
      touchControls: false,
      skyColor: 0x1a0033,
      cloudColor: 0xbb86fc,
      sunColor: 0x7f39fb,
      sunGlareColor: 0xffffff,
      speed: 0.8,
      zoom: 1.0
    });
    
  }

  ngOnDestroy() {
    if (this.vantaEffect) this.vantaEffect.destroy();
  }
}
