import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AnalysisTextComponent } from "./components/analysis/analysis-text/analysis-text.component";
import { AnalysisCanvasComponent } from "./components/analysis/analysis-canvas/analysis-canvas.component";

const routes: Routes = [
  { path: "analysis/sentiment", component: AnalysisTextComponent },
  { path: "analysis/canvas", component: AnalysisCanvasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
