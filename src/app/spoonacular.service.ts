import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SpoonacularService {
  private apiKey: string = "qPiutAmEPSJXxRWyvXoXKs9DM1KGHG6j";
  private recipesSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(
    []
  );
  recipes$: Observable<any[]> = this.recipesSubject.asObservable();

  constructor(private http: HttpClient) {}

  searchRecipes(query: string): void {
    const url = `https://api.apilayer.com/spoonacular/recipes/complexSearch?query=${query}`;
    const headers = new HttpHeaders().set("apiKey", this.apiKey);

    this.http.get(url, { headers }).subscribe((data: any) => {
      this.recipesSubject.next(data.results);
    });
  }
}
