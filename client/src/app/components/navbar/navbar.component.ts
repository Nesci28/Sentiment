import { Component, OnInit } from "@angular/core";
import { State } from "../../models/states.model";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  State = State;
  linkObject = {
    analysis: false,
    class: false
  };

  constructor() {}

  ngOnInit() {}

  updateLinkObject(state: State): void {
    for (let link in this.linkObject) {
      this.linkObject[link] = false;
    }
    this.linkObject[state] = true;
  }
}
