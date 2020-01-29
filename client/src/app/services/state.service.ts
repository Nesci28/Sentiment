import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";

import { Message } from "../models/messages/messages.model";

@Injectable({
  providedIn: "root"
})
export class StateService {
  messages$: BehaviorSubject<Message[]> = new BehaviorSubject<Message[]>([]);
  loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {}

  addMessage(message: string, score: number): void {
    const messages = [...this.messages$.value, { message, score: score }];
    this.messages$.next(messages);
    console.log("this.messages$.value :", this.messages$.value);
  }
}
