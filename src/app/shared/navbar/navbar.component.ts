import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TextKeys } from '../../utils/text-keys';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    public textKeys = TextKeys;
    public constructor(private router: Router) { }

    public ngOnInit() {}

    public onLogOut() {
        this.router.navigate(['/']);
    }

}
