import { Component, OnInit, Input } from '@angular/core';
import { SuperHero } from '../SuperHero';

import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';


@Component({
  selector: 'app-organizing-heros',
  templateUrl: './organizing-heros.component.html',
  styleUrls: ['./organizing-heros.component.css']
})
export class OrganizingHerosComponent implements OnInit {

  
  //hero: SuperHero[] = [];
  @Input() hero?: SuperHero;


  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location) { 
      //this.hero = []
    }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    
    
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.heroService.getHero(Number(id)).subscribe(hero => this.hero = hero);
    }
    

    
  }

goBack(): void {
  this.location.back();
}

}



