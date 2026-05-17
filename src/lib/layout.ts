import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ax-layout',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './layout.html',
  styleUrls: ['./layout.scss', './horizontal.mixin.scss', './vertical.mixin.scss'],
  providers: [],
})
export class Layout {}
