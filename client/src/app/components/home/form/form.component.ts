import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { HttpService } from "../../../service/http.service";
import { StateService } from "../../../services/state.service";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"]
})
export class FormComponent implements OnInit {
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
