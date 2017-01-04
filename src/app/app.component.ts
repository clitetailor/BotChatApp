import { Component, NgZone } from '@angular/core';
import { createStore } from 'redux';

import { BotService } from './bot.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  messages = [];

  constructor(private botService: BotService) {
    this.botService.subscribe((message) => {
      this.messages = this.messages.concat([{
        name: 'bot',
        text: message
      }])
    })
  }

  send(message) {
    this.messages = this.messages.concat([{
      name: 'i',
      text: message
    }])

    this.botService.receive(message);
  }
}
