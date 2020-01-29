import "p5/lib/addons/p5.sound";

import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import * as p5 from "p5";

@Component({
  selector: "app-analysis-canvas-canvas",
  templateUrl: "./analysis-canvas-canvas.component.html",
  styleUrls: ["./analysis-canvas-canvas.component.scss"]
})
export class AnalysisCanvasCanvasComponent implements OnInit {
  @Output() startAnalysing = new EventEmitter();

  canvas: any;

  constructor() {}

  ngOnInit() {
    const sketch = s => {
      s.setup = () => {
        s.createCanvas(400, 400);
        s.background(255);
      };

      s.draw = () => {
        s.strokeWeight(15);
        s.stroke(0);
        if (s.mouseIsPressed) {
          s.line(s.pmouseX, s.pmouseY, s.mouseX, s.mouseY);
        }
      };
    };

    this.canvas = new p5(sketch);
  }

  reset(): void {
    const canvas: any = document.querySelector("#defaultCanvas0");
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, 400, 400);
  }

  analyse(): void {
    this.startAnalysing.emit(this.canvas);
  }
}
