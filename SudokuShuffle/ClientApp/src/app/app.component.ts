import { Component } from '@angular/core';
import { KeyboardEventService } from './services/keyboardevents.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';

  constructor (private keyboardeventsService: KeyboardEventService) {}

  onKey(event: KeyboardEvent): void { // with type info
    console.log({ event })
    this.keyboardeventsService.onKey(event);
  }
}
