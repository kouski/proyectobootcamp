import { Component, OnInit } from "@angular/core";
import { SpoonacularService } from "../spoonacular.service";

@Component({
  selector: "app-lista",
  templateUrl: "./lista.component.html",
  styleUrl: "./lista.component.css",
})
export class ListaComponent implements OnInit {
  recipes: any[] = [];

  constructor(public spoonacularService: SpoonacularService) {}

  ngOnInit(): void {
    this.spoonacularService.recipes$.subscribe((recipes) => {
      this.recipes = recipes;
    });
  }
}

