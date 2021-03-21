import { Component, OnInit } from '@angular/core';
import { SuperHero } from '../SuperHero';
import { HeroService } from '../hero.service';
import { PageEvent } from '@angular/material/paginator/public-api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: SuperHero[] = [];
  pageSlice = this.heroes.slice(0,3);

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }


  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  OnPageChange(event: PageEvent){
    //console.log(event);
    const start_index = event.pageIndex * event.pageSize;
    let endIndex = start_index + event.pageSize;
    if (endIndex > this.heroes.length){
      endIndex = this.heroes.length;
    }
    this.pageSlice = this.heroes.slice(start_index, endIndex);
  }


}