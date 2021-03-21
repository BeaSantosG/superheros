import { Injectable } from '@angular/core';
import { SuperHero } from './SuperHero';

import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';






@Injectable({
  providedIn: 'root',
})
export class HeroService {

  

  constructor(private http: HttpClient) { }

  private heroesUrl = 'api/heroes';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getHeroes(): Observable<SuperHero[]> {
    //const heroes = of(HEROES);
    //return heroes;
    //console.log(this.heroesUrl)
    return this.http.get<SuperHero[]>(this.heroesUrl)
    
  }

  getHero(id: number): Observable<SuperHero> {
    const url = `${this.heroesUrl}/${id}`; 
    return this.http.get<SuperHero>(url)
   
  
  }

  updateHero(hero: SuperHero): Observable<any>{
    return this.http.put(this.heroesUrl, hero, this.httpOptions)

  }

  searchHeroes(term: string): Observable<SuperHero[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<SuperHero[]>(`${this.heroesUrl}/?hero_name=${term}`)
  }

  

}




// @Injectable({providedIn: 'root'})
// export class HeroService {

//   constructor(private http: HttpClient) { }


//   getHeroes(): Observable<SuperHero[]> {

    
//     return this.http.get<SuperHero[]>(this.heroesUrl);
//   }

//   getHero(id: number): Observable<SuperHero> {
  
//     const hero = HEROES.find(h => h.id === id) as SuperHero;
    
//     return of(hero);
//   }

//   private heroesUrl = 'api/heroes';

  
// }