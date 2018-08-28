import { Component, OnInit } from '@angular/core';

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

    public constructor(private authService: AuthService) { }

    public ngOnInit() {}

    private checkPassword(result) {
        if (this.password !== result.birth_year) {
            this.isAuthenticated = false;
            return;
        }
    }

    public onSubmit() {
        this.isAuthenticated = true;
        this.authService.getUser(this.username)
            .subscribe(res => {
                res.results.length > 0 ? this.checkPassword(res.results[0]) : this.isAuthenticated = false;
            });
    }

}
