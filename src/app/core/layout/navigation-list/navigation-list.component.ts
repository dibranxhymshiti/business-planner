import { Component } from '@angular/core';
import { mainNavigation } from '../main.navigation';

@Component({
  selector: 'bp-navigation-list',
  templateUrl: './navigation-list.component.html',
  styleUrls: ['./navigation-list.component.scss']
})
export class NavigationListComponent {
  navigation = mainNavigation;
}
