import "p5/lib/addons/p5.sound";

import { Component, OnDestroy, OnInit } from "@angular/core";
import * as p5 from "p5";

@Component({
  selector: "app-analysis-canvas-canvas",
  templateUrl: "./analysis-canvas-canvas.component.html",
  styleUrls: ["./analysis-canvas-canvas.component.scss"]
})
export class AnalysisCanvasCanvasComponent implements OnInit, OnDestroy {
  canvas: any;

  constructor() {}

  ngOnInit() {
    const sketch = (s: any) => {
      s.setup = () => {
        const canvas = s.createCanvas(
          document.querySelector("#container").clientWidth - 30,
          300
        );
        s.background(255);
        canvas.parent("container");
      };

      s.draw = () => {
        s.strokeWeight(15);
        s.stroke(0);
        if (s.mouseIsPressed) {
          s.line(s.pmouseX, s.pmouseY, s.mouseX, s.mouseY);
        }
      };

      s.windowResized = () => {
        s.resizeCanvas(
          document.querySelector("#container").clientWidth - 30,
          300
        );
      };
    };

    this.canvas = new p5(sketch);
  }

  ngOnDestroy() {
    this.canvas.remove();
  }
}
