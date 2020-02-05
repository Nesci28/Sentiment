import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AnalysisTextFormComponent } from "./components/analysis/analysis-text/analysis-text-form/analysis-text-form.component";
import { AnalysisTextMessagesComponent } from "./components/analysis/analysis-text/analysis-text-messages/analysis-text-messages.component";
import { AnalysisTextComponent } from "./components/analysis/analysis-text/analysis-text.component";
import { BaseComponent } from "./components/base/base.component";
import { HomeComponent } from "./components/home/home.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { AckeeEventTriggerDirective } from "./directives/ackee-event-trigger.directive";
import { FormControlValidatorDirective } from "./directives/form-control-validation.directive";
import { FormSubmitValidationMsgDirective } from "./directives/form-submit-validation.directive";
import { AnalysisCanvasComponent } from "./components/analysis/analysis-canvas/analysis-canvas.component";
import { AnalysisCanvasCanvasComponent } from "./components/analysis/analysis-canvas/analysis-canvas-canvas/analysis-canvas-canvas.component";
import { AnalysisCanvasMessagesComponent } from "./components/analysis/analysis-canvas/analysis-canvas-messages/analysis-canvas-messages.component";
import { CreationDotsComponent } from "./components/creation/creation-dots/creation-dots.component";
import { CreationDotsCanvasComponent } from './components/creation/creation-dots/creation-dots-canvas/creation-dots-canvas.component';
import { CreationDotsRadiosComponent } from './components/creation/creation-dots/creation-dots-radios/creation-dots-radios.component';
import { CreationDotsMessagesComponent } from './components/creation/creation-dots/creation-dots-messages/creation-dots-messages.component';

@NgModule({
  declarations: [
    AckeeEventTriggerDirective,
    FormControlValidatorDirective,
    FormSubmitValidationMsgDirective,
    AppComponent,
    HomeComponent,
    BaseComponent,
    AnalysisTextComponent,
    AnalysisTextFormComponent,
    AnalysisTextMessagesComponent,
    NavbarComponent,
    AnalysisCanvasComponent,
    AnalysisCanvasCanvasComponent,
    AnalysisCanvasMessagesComponent,
    CreationDotsComponent,
    CreationDotsCanvasComponent,
    CreationDotsRadiosComponent,
    CreationDotsMessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
