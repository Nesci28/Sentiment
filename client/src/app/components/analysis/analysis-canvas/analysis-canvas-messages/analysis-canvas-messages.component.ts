import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-analysis-canvas-messages",
  templateUrl: "./analysis-canvas-messages.component.html",
  styleUrls: ["./analysis-canvas-messages.component.scss"]
})
export class AnalysisCanvasMessagesComponent implements OnInit {
  @Input() results: { label: string; confidence: number }[];

  constructor() {}

  ngOnInit() {}
}
