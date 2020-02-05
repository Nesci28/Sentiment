import { Component, OnInit, ViewChild } from "@angular/core";

import { StateService } from "../../../services/state.service";

declare let ml5: any;

@Component({
  selector: "app-analysis-canvas",
  templateUrl: "./analysis-canvas.component.html",
  styleUrls: ["./analysis-canvas.component.scss"]
})
export class AnalysisCanvasComponent implements OnInit {
  @ViewChild("canvas", { static: false }) canvas: any;
  results: any[] = [];

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

  reset(): void {
    const canvas: any = document.querySelector("#defaultCanvas0");
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#fff";
    ctx.fillRect(
      0,
      0,
      document.querySelector("#container").clientWidth - 30,
      300
    );
  }

  startAnalysing(): void {
    const canvas: any = document.querySelector("#defaultCanvas0");
    this.classifier.classify(canvas, (_: any, res: any[]) => {
      this.results.unshift(res[0]);
      const canvas: any = document.querySelector("#defaultCanvas0");
      canvas.style.top = `${-84 - 108 * 1 - 92 * (this.results.length - 1)}px`;
    });
  }
}
