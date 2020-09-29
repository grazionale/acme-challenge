import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastyService, ToastOptions, ToastData } from 'ng2-toasty';

export class Login {
  email: string;
  password: string;
}

export class Register {
  first: string;
  last: string;
  email: string;
  password: string;
}

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  title = 'front-acme-support-system';

  public login: Login;
  public register: Register;

  public showRegisterForm = false;

  constructor(private router: Router, private toastyService: ToastyService) {}

  public ngOnInit(): void {
    this.login = new Login();
    this.register = new Register();
  }

  public showRegister() {
    this.showRegisterForm = !this.showRegisterForm;
  }

  public onRegister(register: Register): void {
    console.log('onRegister');
    console.log(register);
    console.log(register.email);
    console.log(register.password);
    console.log(register.last);
    console.log(register.first);

    var toastOptions: ToastOptions = {
      title: 'My title',
      msg: 'The message',
      showClose: true,
      timeout: 5000,
      onAdd: (toast: ToastData) => {
        console.log('Toast ' + toast.id + ' has been added!');
      },
      onRemove: function (toast: ToastData) {
        console.log('Toast ' + toast.id + ' has been removed!');
      },
    };

    this.toastyService.success(toastOptions);
  }

  public onLogin(login: Login): void {
    console.log('logIn');
    console.log(login.email);
    console.log(login.password);

    this.router.navigate(['/']);
  }

  public verifyInformations(email: string, password: string): boolean {
    return !email || !password;
  }
}
