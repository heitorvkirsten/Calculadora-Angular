import { Component} from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public titulo:string = "Angular Calculadora";
 

  constructor() {
    setTheme('bs4'); // or 'bs4'

  }

}

