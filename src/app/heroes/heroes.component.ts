import { Component, OnInit } from '@angular/core';
import { HEROES } from './Mock/MockHeroes';
import { IHero } from './interfaces/IHero';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
    public heroes = HEROES;

    public selectedHero: IHero;

    constructor() { }

    ngOnInit() { }

    onSelect(hero: IHero) {
        this.selectedHero = hero;
    }
}
