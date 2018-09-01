import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-planet-list-view',
  templateUrl: './planet-list-view.component.html',
  styleUrls: ['./planet-list-view.component.css']
})
export class PlanetListViewComponent implements OnInit {

    @Input() public planet;
    @Input() public maximumPopulation;

    public constructor() { }

    public ngOnInit() { }

    public getProgressValue() {
        const population = this.planet.population === 'unknown' ? 0 : parseInt(this.planet.population);
        return this.maximumPopulation ? (100/this.maximumPopulation)*population : 0;
    }

}
