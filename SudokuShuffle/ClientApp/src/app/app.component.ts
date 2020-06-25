import { Component, HostListener } from '@angular/core';
import { KeyboardEventsService } from './services/keyboardevents.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';

  constructor(private keyboardeventsService: KeyboardEventsService) { }


  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.keyboardeventsService.onKey(event);
  }
}
