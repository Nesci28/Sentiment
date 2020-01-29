import { Directive, HostListener, Input, OnInit } from "@angular/core";

@Directive({
  selector: "[appAckeeEventTrigger]"
})
export class AckeeEventTriggerDirective implements OnInit {
  @Input() ackeeEventName: string;
  @Input() ackeeEventGroup: string;

  ackee: any;

  @HostListener("click", ["$event"])
  handleClickEvent(_: any) {
    this.ackee.click({
      group: this.ackeeEventGroup,
      name: this.ackeeEventName
    });
  }

  constructor() {}

  ngOnInit() {
    const timer = setInterval(() => {
      // @ts-ignore
      this.ackee = window.ackeeTracker;
      if (this.ackee) {
        clearInterval(timer);
      }
    }, 100);
  }
}
