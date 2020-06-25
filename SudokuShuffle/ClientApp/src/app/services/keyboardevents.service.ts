import { Injectable, EventEmitter, Output } from '@angular/core'import { BehaviorSubject } from 'rxjs';/**components looking for keyboard events or passing them along should only need to access this service */@Injectable({  providedIn: 'root', //ensures this service is used as a singleton})export class KeyboardEventsService {  public LastKeyboardPress: BehaviorSubject<KeyboardEvent> = new BehaviorSubject<KeyboardEvent>(new KeyboardEvent(""));  constructor() {}  onKey(event: KeyboardEvent): void {    this.LastKeyboardPress.next(event);  }}