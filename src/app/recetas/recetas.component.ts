import { Component, OnInit } from "@angular/core";
import { SpoonacularService } from "../spoonacular.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-recetas",
  templateUrl: "./recetas.component.html",
  styleUrl: "./recetas.component.css",
})
export class RecetasComponent implements OnInit {
  query: string = "";

  constructor(
    private spoonacularService: SpoonacularService,
    private router: Router
  ) {}

  searchRecipes() {
    this.spoonacularService.searchRecipes(this.query);
    this.router.navigate(["/recipes"]);
  }

  ngOnInit(): void {}
}

