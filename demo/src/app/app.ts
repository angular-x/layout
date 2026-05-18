// import { Layout } from '@angular.x/layout';
import { Layout } from '../../../src/lib/layout';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Layout],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('layout');

  leftCollapsed = signal(false);
  rightCollapsed = signal(false);

  leftOverlay = signal(false);
  rightOverlay = signal(false);

  toggleLeftCollapsed() {
    this.leftCollapsed.update(value => !value);
  }

  toggleRightCollapsed() {
    this.rightCollapsed.update(value => !value);
  }


  toggleLeftOverlay() {
    this.leftOverlay.update(value => !value);
  }
  toggleRightOverlay() {
    this.rightOverlay.update(value => !value);
  }
}
