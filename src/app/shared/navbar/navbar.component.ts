import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    public constructor(private router: Router) { }

    public ngOnInit() {}

    public onLogOut() {
        this.router.navigate(['/']);
    }

}
