import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
    console.log(this.messages);
  }

  clear() {
    this.messages = [];
  }

  constructor() {}
}
