import { Injectable } from '@angular/core';
import { createStore } from 'redux';
import { Subject } from 'rxjs';

import { botFunc, increaseCounter, receiveMessage, setContext } from './bot';
import { data } from './data';

@Injectable()
export class BotService {

  private store;
  private resolver;

  constructor() {
    this.store = createStore<any>(botFunc);
    this.resolver = new Subject();

    this.store.subscribe(() => {
      let state = this.store.getState();

      if (state.context == "INIT") {
        this.resolver.next("Hello! My name is T-Bot!");
        this.store.dispatch(setContext(null));
        return;
      } else if (state.message != null) {
        if (state.context == "INIT") {
          this.store.dispatch(setContext(null));
        }
        
        data.forEach((item) => {

          let regexp = new RegExp(`.*${item.recv}.*`, 'i');

          if (state.message.match(regexp)) {
            this.resolver.next(state.message.replace(regexp, item.res));
            return;
          }
        })
      } else {

      }
    });

    this.store.dispatch(setContext("INIT"));
  }

  receive(message) {
    this.store.dispatch(receiveMessage(message));
  }

  subscribe(observer) {
    this.resolver.subscribe(observer);
  }
}
