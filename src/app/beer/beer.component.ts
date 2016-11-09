import { Component, OnInit, Input, trigger, transition, style, animate, state} from '@angular/core';
import { Beer } from '../beer';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css'],
  animations: [
     trigger(
       'beerDetailsAnimation',
       [
         transition(
         ':enter', [
           style({height: '0'}),
           animate('250ms', style({height: '*'}))
         ]
       ),
       transition(
         ':leave', [
           style({height: '*'}),
           animate('250ms', style({height: '0'})),
         ]
       )]
     )
   ]
})
export class BeerComponent implements OnInit {
    @Input()
    beer: Beer;

    selected: boolean = false;

    constructor() { }

    ngOnInit() {
    }

    onSelect(beer: Beer): void {
        this.selected = !this.selected;
    }

}
