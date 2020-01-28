import { Component, OnInit } from "@angular/core";
import { takeUntil } from "rxjs/internal/operators/takeUntil";

import { Message } from "../../../models/messages/messages.model";
import { StateService } from "../../../services/state.service";
import { BaseComponent } from "../../base/base.component";

@Component({
  selector: "app-messages",
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.scss"]
})
export class MessagesComponent extends BaseComponent implements OnInit {
  messages: Message[];

  constructor(private stateService: StateService) {
    super();
  }

  ngOnInit() {
    this.stateService.messages$
      .pipe(takeUntil(this.destroy$))
      .subscribe((messages: any) => {
        this.messages = messages;
        console.log("this.messages :", this.messages);
      });
  }
}
