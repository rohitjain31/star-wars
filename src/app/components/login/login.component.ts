import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TextKeys } from '../../utils/text-keys';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public isAuthenticated = true;
    public username = '';
    public password = '';
    public loading = false;

    public textKeys = TextKeys;

    public constructor(private authService: AuthService,
        private router: Router) { }

    public ngOnInit() {}

    private checkPassword(result) {
        if (this.password !== result.birth_year) {
            this.isAuthenticated = false;
            return;
        }

        this.router.navigate(['/planets']);
    }

    public onSubmit() {
        this.isAuthenticated = true;
        this.loading = true;
        this.authService.getUser(this.username)
            .subscribe(res => {
                res.results.length > 0 ? this.checkPassword(res.results[0]) : this.isAuthenticated = false;
                this.loading = false;
            });
    }

}
