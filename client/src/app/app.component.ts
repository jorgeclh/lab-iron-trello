import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component'
import { BoardComponent } from './board/board.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
}
