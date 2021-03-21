import { Component, OnInit} from '@angular/core';


import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { SuperHero } from '../SuperHero';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-organizing-heros',
  templateUrl: './organizing-heros.component.html',
  styleUrls: ['./organizing-heros.component.css']
})
export class OrganizingHerosComponent implements OnInit {

  
  //hero: SuperHero[] = [];
  //@Input() hero?: SuperHero;

  hero!: SuperHero;


  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location) { 
      
    }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
    this.heroService.getHero(Number(id))
      .subscribe(hero => this.hero = hero);
    
    
    // const id = this.route.snapshot.paramMap.get('id');
    // if(id){
    //   this.heroService.getHero(Number(id)).subscribe(hero => this.hero = hero);
    }
    

    
  }

goBack(): void {
  this.location.back();
}

save(): void {
  
  // const id = this.route.snapshot.paramMap.get('id');
  // const hero_name = this.route.snapshot.paramMap.get('hero_name');
  // const real_name = this.route.snapshot.paramMap.get('real_name');
  // const publisher = this.route.snapshot.paramMap.get('publisher');
  // const first_appereance_date = this.route.snapshot.paramMap.get('first_appereance_date');
  // const powers = this.route.snapshot.paramMap.get('powers');
  // const team_affiliations =  this.route.snapshot.paramMap.get('team_affiliations');
  this.heroService.updateHero(this.hero)
    .subscribe(() => this.goBack());
}

}



