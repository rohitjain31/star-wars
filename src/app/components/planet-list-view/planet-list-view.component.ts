import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-planet-list-view',
  templateUrl: './planet-list-view.component.html',
  styleUrls: ['./planet-list-view.component.css']
})
export class PlanetListViewComponent implements OnInit {

    @Input() public planet;

    public constructor() { }

    public ngOnInit() {
    }

}
