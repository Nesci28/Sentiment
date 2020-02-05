import "p5/lib/addons/p5.sound";

import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output
} from "@angular/core";
import * as p5 from "p5";

import { NNState } from "../../../../models/states.model";
import { ThrowStmt } from "@angular/compiler";

@Component({
  selector: "app-creation-dots-canvas",
  templateUrl: "./creation-dots-canvas.component.html",
  styleUrls: ["./creation-dots-canvas.component.scss"]
})
export class CreationDotsCanvasComponent implements OnInit, OnDestroy {
  @Input() letter: string;
  @Input() state: string = NNState.training;
  @Output() input = new EventEmitter<any>();
  @Output() predict = new EventEmitter<any>();

  canvas: any;
  counter: number = 0;

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
        if (
          s.mouseIsPressed &&
          this.state === NNState.training &&
          s.mouseY >= 38
        ) {
          s.stroke(0);
          s.noFill();
          s.ellipse(s.mouseX, s.mouseY, 24);
          s.fill(0);
          s.noStroke();
          s.textAlign(s.CENTER, s.CENTER);
          s.text(this.letter || "A", s.mouseX, s.mouseY);
          this.input.emit({
            x: s.mouseX,
            y: s.mouseY,
            label: this.letter || "A"
          });
        } else if (s.mouseIsPressed && this.state === NNState.prediction) {
          this.counter += 1;
          if (this.counter === 1 || this.counter % 5 === 0) {
            this.predict.emit({
              x: s.mouseX,
              y: s.mouseY
            });
          }
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
