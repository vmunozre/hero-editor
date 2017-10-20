import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: [ './heroes.component.css']
})

export class HeroesComponent implements OnInit { 
  constructor(
    private router: Router,
    private heroService: HeroService) { }

  name = 'Angular';
  title = 'Hero Editor';
  selectedHero : Hero;
  heroes: Hero[];

  onSelect(hero:Hero): void{
    this.selectedHero = hero;
  }

  ngOnInit(): void{
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

}


