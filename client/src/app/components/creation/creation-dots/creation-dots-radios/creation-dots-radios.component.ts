import { Component, Output, EventEmitter } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-creation-dots-radios",
  templateUrl: "./creation-dots-radios.component.html",
  styleUrls: ["./creation-dots-radios.component.scss"]
})
export class CreationDotsRadiosComponent {
  @Output() changeRadio = new EventEmitter<any>();
  @Output() changeSlide = new EventEmitter<any>();

  form: FormGroup = new FormGroup({
    radio: new FormControl("A", Validators.required),
    slide: new FormControl(100, Validators.required)
  });

  constructor() {}

  get radio() {
    return this.form.get("radio");
  }
  get slide() {
    return this.form.get("slide");
  }

  changeRadioValue(e: string): void {
    this.changeRadio.emit({ letter: e });
  }

  changeSlideValue(): void {
    this.changeSlide.emit({ slide: this.slide.value });
  }
}
