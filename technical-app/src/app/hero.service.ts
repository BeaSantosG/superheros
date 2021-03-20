import { Injectable } from '@angular/core';
import { SuperHero } from './SuperHero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';





@Injectable({
  providedIn: 'root',
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<SuperHero[]> {
    const heroes = of(HEROES);
    return heroes;
  }

  getHero(id: number): Observable<SuperHero> {
   
    const hero = HEROES.find(h => h.id === id) as SuperHero;
    return of(hero);
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