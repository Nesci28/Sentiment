import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

import { StateService } from "../../../services/state.service";

declare let ml5: any;

@Component({
  selector: "app-analysis-canvas",
  templateUrl: "./analysis-canvas.component.html",
  styleUrls: ["./analysis-canvas.component.scss"]
})
export class AnalysisCanvasComponent implements OnInit {
  @ViewChild("canvas", { static: false }) canvas: any;

  classifier: any;
  featureClassifier: any;

  constructor(private stateService: StateService) {}

  async ngOnInit() {
    this.stateService.loading$.next(true);
    this.classifier = await ml5.imageClassifier("DoodleNet", () => {
      console.log("Model ready");
      this.stateService.loading$.next(false);
    });
  }

  startAnalysing(canvas: any): void {
    this.classifier.classify(canvas, (_: any, res: any[]) => {
      console.log("res :", res);
    });
  }
}
