import { Component, OnInit } from "@angular/core";

declare let ml5: any;

@Component({
  selector: "app-creation-dots",
  templateUrl: "./creation-dots.component.html",
  styleUrls: ["./creation-dots.component.scss"]
})
export class CreationDotsComponent implements OnInit {
  letter: string;
  model: any;
  state: string = "training";
  slide: number;
  results: { label: string; confidence: number }[] = [];

  constructor() {}

  ngOnInit() {
    let options = {
      inputs: ["x", "y"],
      outputs: ["label"],
      task: "classification",
      debug: "true"
    };
    this.model = ml5.neuralNetwork(options);
  }

  startAnalysing(): void {
    console.log("starting training");
    this.model.normalizeData();
    let options = {
      epochs: this.slide || 100
    };
    this.model.train(
      options,
      (epoch: number) => {
        console.log(`Epoch: ${epoch} / ${this.slide || 100}`);
      },
      () => {
        console.log("finished training.");
        this.state = "prediction";
      }
    );
  }

  changeRadio(e: { letter: string }): void {
    this.letter = e.letter;
  }

  changeSlide(e: { slide: number }): void {
    this.slide = e.slide;
  }

  addInput(e: { x: number; y: number; label: string }): void {
    this.model.addData({ x: e.x, y: e.y }, { label: e.label });
  }

  predict(e: { x: number; y: number }): void {
    this.model.classify(e, (err, res) => {
      this.results.unshift({
        label: res[0].label,
        confidence: res[0].confidence
      });
      const canvas: any = document.querySelector("#defaultCanvas0");
      canvas.style.top = `${-84 - 108 * 1 - 92 * (this.results.length - 1)}px`;
    });
  }
}
