import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { SuperHero } from './SuperHero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, real_name: 'Max Lawson', hero_name:'Intelligy', publisher:'Rick Tawnsen', first_appereance_date: new Date("2021-02-19"), powers:['something', 'inteligence'],team_affiliations:['1','2','3','4']},
    { id: 2, real_name: 'Harley Norris', hero_name:'Vern', publisher:'Rick Tawnsen', first_appereance_date: new Date("2020-03-19"), powers:['adaptation', 'change skin'],team_affiliations:['1','2','3','4']},
    { id: 3, real_name: 'Bob Cantrell', hero_name:'Soundly', publisher:'Thomas Petty',first_appereance_date: new Date("2020-03-19"), powers:['transformation', 'play songs', 'made up songs'],team_affiliations:['1','2','3','4']},
    { id: 4, real_name: 'Anastasia Vasquez', hero_name:'STRM', publisher:'Peter Gil', first_appereance_date: new Date("2020-03-19"), powers:['Control Winds', 'Control storms'],team_affiliations:['1','2','3','4']},
    { id: 5, real_name: 'Henry Jenkins', hero_name:'Fastfeet', publisher:'Peter Gil',first_appereance_date: new Date("2020-03-19"), powers:['run faster than anyone'],team_affiliations:['1','2','3','4']},
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: SuperHero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}