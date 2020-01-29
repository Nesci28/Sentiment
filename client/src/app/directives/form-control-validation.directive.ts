import { Directive, ElementRef, Input, OnDestroy, OnInit } from "@angular/core";
import { NgControl, ValidationErrors } from "@angular/forms";
import { Subscription } from "rxjs";

@Directive({
  selector: "[appFormControlValidator]"
})
export class FormControlValidatorDirective implements OnInit, OnDestroy {
  frTraduction: any;
  enTraduction: any;

  constructor(private elRef: ElementRef, private control: NgControl) {}

  @Input("validationMsgId") validationMsgId: string;
  errorSpanId: string = "";

  statusChangeSubscription: Subscription;
  async ngOnInit(): Promise<void> {
    this.errorSpanId =
      this.validationMsgId + new Date().getTime() + "-error-msg";
    this.statusChangeSubscription = this.control.statusChanges.subscribe(
      status => {
        if (status === "INVALID") {
          this.showError();
        } else {
          this.removeError();
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.statusChangeSubscription.unsubscribe();
  }

  private showError() {
    this.removeError();
    const width = this.elRef.nativeElement.offsetWidth;
    const height = this.elRef.nativeElement.offsetHeight;
    const left = this.elRef.nativeElement.offsetLeft;
    const top = this.elRef.nativeElement.offsetTop;
    const valErrors: ValidationErrors = this.control.errors;
    const firstKey = Object.keys(valErrors)[0];
    const errorMsg = this.enTraduction.FORM_ERROR[
      `${this.validationMsgId}-${firstKey}`
    ];
    const errSpan = `<div style="display:inline-block;position:absolute;width:${width}px;top:${top +
      height}px;left:${left}px;" class="alert alert-danger input-error" id="${
      this.errorSpanId
    }">${errorMsg}</div>`;
    this.elRef.nativeElement.parentElement.insertAdjacentHTML(
      "beforeend",
      errSpan
    );
    const errorDiv = document.getElementById(`${this.errorSpanId}`);
    const errorHeight = errorDiv.offsetHeight;
    this.elRef.nativeElement.style.marginBottom = `${this.elRef.nativeElement.style.marginBottom.replace(
      /\D/g,
      ""
    ) + errorHeight}px`;
  }

  private removeError(): void {
    const errorElement = document.getElementById(this.errorSpanId);
    if (errorElement) {
      const errorHeight = errorElement.offsetHeight;
      errorElement.remove();
      this.elRef.nativeElement.style.marginBottom = `${this.elRef.nativeElement.style.marginBottom.replace(
        /\D/g,
        ""
      ) - errorHeight}px`;
    }
  }
}
