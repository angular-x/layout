import {
  ChangeDetectionStrategy,
  Component,
  effect,
  HostBinding,

  HostListener,

  input,
  model,
  OnDestroy,
  OnInit,
  output,
  Renderer2
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutBody } from '@angular.x/layout-body';
import { LayoutBottom } from '@angular.x/layout-bottom';
import { LayoutCenter } from '@angular.x/layout-center';
import { LayoutLeft } from '@angular.x/layout-left';
import { LayoutRight } from '@angular.x/layout-right';
import { LayoutTop } from '@angular.x/layout-top';

import { UiClassBase, UiClassService } from '../../../ui';
import { LayoutService, LAYOUT_SLOT, LAYOUT_VARIANT } from '../../../ui/layout';

@Component({
  selector: 'ax-layout',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    LayoutBody,
    LayoutBottom,
    LayoutCenter,
    LayoutLeft,
    LayoutRight,
    LayoutTop,
  ],
  providers: [
    {provide: LAYOUT_SLOT, useValue: 'layout'},
    {provide: LAYOUT_VARIANT, useValue: {resize: 768}},
    UiClassService,
    LayoutService
  ],
  templateUrl: './layout.html',
  styleUrls: ['./layout.scss'],
  inputs: [
    'flex', 'flexDirection',
    'width', 'height',
    'px', 'py', 'pl', 'pr', 'pt', 'pb',
    'mx', 'my', 'ml', 'mr', 'mt', 'mb',
    'bg'
  ]
})
export class Layout extends UiClassBase implements OnInit, OnDestroy {
  @HostBinding('class') public get hostClass() {
    return super.service.class.class
  }

  public title = model('');

  // Layout variant.
  public variant = input<string | undefined>();

  // Slots visibility.
  public showBottom = input(true);
  public showLeft = input(true);
  public showRight = input(true);
  public showTop = input(true);

  public onLeftCollapsed = output<boolean | undefined>();
  public onRightCollapsed = output<boolean | undefined>();

  public leftCollapsed = model<boolean>(false);
  public rightCollapsed = model<boolean>(false);

  public leftCollapsedChanged($event: any) {
    console.log('leftCollapsedChanged event', $event);
    this.onLeftCollapsed.emit($event);
  }

  public rightCollapsedChanged($event: any) {
    console.log('rightCollapsedChanged event', $event);
    this.onRightCollapsed.emit($event);
  }

  public collapseLeft() {
    this.leftCollapsed.set(true);
    this.onLeftCollapsed.emit(true);
  }
  public expandLeft() {
    this.leftCollapsed.set(false);
    this.onLeftCollapsed.emit(false);
  }
  public collapseRight() {
    this.rightCollapsed.set(true);
    this.onRightCollapsed.emit(true);
  }
  public expandRight() {
    this.rightCollapsed.set(false);
    this.onRightCollapsed.emit(false);
  }

  private removeResizeListener?: () => void;

  constructor(private renderer: Renderer2) {
    super();
    super.setupLayoutEffects();
    effect(() => {
      super.service.class.set('variant', this.variant());

    });
  }

  ngOnInit() {
    this.removeResizeListener = this.renderer.listen('window', 'resize', event => {
      console.log('Layout onResize event', event);
      const w = (event.target as Window).innerWidth;
      this.updateVariant(w);
    });
    typeof window !== 'undefined' && this.updateVariant(window.innerWidth);
  }

  private updateVariant(width: number) {
    this.service.class.set('variant', width >= 768 ? 'horizontal' : 'vertical');
  }

  ngOnDestroy() {
    this.removeResizeListener && this.removeResizeListener();
  }
}

