import { Component, OnInit } from '@angular/core';
import { PlanetService } from '../../services/planet.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    public planets = {
        results: [],
        next: '',
        previous: ''
    };
    public maxPopulation = 0;
    public loading = false;

    public searchTerm$ = new Subject<string>();

    public constructor(private planetService: PlanetService) { }

    public ngOnInit() {
        this.getPlanetList();

        this.planetService.searchPlanet(this.searchTerm$)
            .subscribe(res => {
                this.planets = res;
                this.getMaxPopulation();
                this.loading = false;
            });
    }

    private getMaxPopulation() {
        this.maxPopulation = Math.max.apply(null, this.planets['results'].map(e => e.population !== 'unknown' ? parseInt(e.population) : 0));
    }

    private getPlanetList() {
        this.planetService.getDefaultPlanet()
            .subscribe(res => {
                this.planets = res;
                this.getMaxPopulation();
            });
    }

    public searchPlanet(val) {
        this.loading = true;
        this.searchTerm$.next(val);
    }

    public onNextClick() {
        this.planetService.getPlanetsByUrl(this.planets.next)
            .subscribe(res => {
                this.planets = res;
                this.getMaxPopulation();
            });
    }

    public onPrevClick() {
        this.planetService.getPlanetsByUrl(this.planets.previous)
            .subscribe(res => {
                this.planets = res;
                this.getMaxPopulation();
            });
    }

}
