import { Component, OnInit } from '@angular/core';
import { PlanetService } from '../../services/planet.service';

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

    public constructor(private planetService: PlanetService) { }

    public ngOnInit() {
        this.getPlanetList();
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
