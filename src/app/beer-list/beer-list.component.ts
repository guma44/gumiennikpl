import { Component, OnInit } from '@angular/core';
import { BeerService } from '../beer.service'
import { Beer } from '../beer';


@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css'],
  providers: [BeerService]
})
export class BeerListComponent implements OnInit {

    beers: Beer[];
    selectedBeer: Beer;

    constructor(private beerService: BeerService) { }

    getBeers(): void {
        this.beerService.getBeers().then(beers => this.beers = beers);
    }

    ngOnInit() {
        this.getBeers();
    }

    onSelect(beer: Beer): void {
        this.selectedBeer = beer;
    }

}
