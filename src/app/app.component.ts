import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ShopCockBook';
  activeTab='recipe';

  onHeaderClick(clickedTab){
    this.activeTab = clickedTab;
  }
}
