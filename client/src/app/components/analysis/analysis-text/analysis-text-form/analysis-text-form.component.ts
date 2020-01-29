import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { HttpService } from "../../../../services/http.service";
import { StateService } from "../../../../services/state.service";

@Component({
  selector: "app-analysis-text-form",
  templateUrl: "./analysis-text-form.component.html",
  styleUrls: ["./analysis-text-form.component.scss"]
})
export class AnalysisTextFormComponent implements OnInit {
  form: FormGroup = new FormGroup({
    text: new FormControl("", Validators.required)
  });

  constructor(
    private httpService: HttpService,
    private stateService: StateService
  ) {}

  ngOnInit() {}

  get text() {
    return this.form.get("text");
  }

  async analyse(): Promise<any> {
    const message = this.text.value;
    const res = await this.httpService.analyse(message).toPromise();
    if (res.error) {
      console.log("error detected");
      // Open Warning Modal
    } else {
      this.stateService.addMessage(message, res.sentiment);
    }
  }
}
