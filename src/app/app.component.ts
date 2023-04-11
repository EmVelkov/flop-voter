import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  selectedIndex: number = -1;

  isSelected(index: any) {
    return this.selectedIndex === index;
  }

  anySelected() {
    return this.selectedIndex !== -1;
  }

  onVoteClick(index: any) {
    if (this.isSelected(index)) {
      this.selectedIndex = -1;
    } else {
      this.selectedIndex = index;
    }
  }
  getButtonText(index: any) {
    if (this.isSelected(index)) {
      return 'Unvote';
    } else {
      return 'Vote';
    }
  }
}
