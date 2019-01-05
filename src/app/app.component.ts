import { Component } from '@angular/core';

import { TryService } from './services/try.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private service: TryService) {
  }

}
