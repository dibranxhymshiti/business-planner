import { Component, Input } from '@angular/core';
import { NavigationModel } from '../../../models/navigation.model';

@Component({
  selector: 'bp-navigation-item',
  templateUrl: './navigation-item.component.html',
  styleUrls: ['./navigation-item.component.scss']
})
export class NavigationItemComponent {
  @Input() navigationItem!: NavigationModel;
}
