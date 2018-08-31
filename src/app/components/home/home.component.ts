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

    public searchTerm$ = new Subject<string>();

    public constructor(private planetService: PlanetService) { }

    public ngOnInit() {
        this.getPlanetList();

        this.planetService.searchPlanet(this.searchTerm$)
            .subscribe(res => {
                this.planets = res;
            });
    }

    private getPlanetList() {
        this.planetService.getDefaultPlanet()
            .subscribe(res => {
                console.log(res);
                this.planets = res;
            });
    }

    public onNextClick() {
        this.planetService.getPlanetsByUrl(this.planets.next)
            .subscribe(res => {
                this.planets = res;
            });
    }

    public onPrevClick() {
        this.planetService.getPlanetsByUrl(this.planets.previous)
            .subscribe(res => {
                this.planets = res;
            });
    }

}
