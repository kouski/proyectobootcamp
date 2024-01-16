import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListaComponent } from "./lista/lista.component";
import { RecetasComponent } from "./recetas/recetas.component";

const routes: Routes = [
  { path: "", redirectTo: "/search", pathMatch: "full" },
  { path: "recetas", component: RecetasComponent },
  { path: "lista", component: ListaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}



