import { Component, OnInit } from '@angular/core';
import { SuperHero } from '../SuperHero';
import { HeroService } from '../hero.service';
import { HEROES } from '../mock-heroes';



@Component({
  selector: 'app-superheros',
  templateUrl: './superheros.component.html',
  styleUrls: ['./superheros.component.css']
})
export class SuperherosComponent implements OnInit {

  //heroes: SuperHero[] = [];

  heroes: SuperHero[] = [];

  //selectedHero?: SuperHero;

  


  constructor(private heroService: HeroService) {
    
   }

  ngOnInit() {
    this.getHeroes();
    
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }



}







