import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastyService, ToastOptions, ToastData } from 'ng2-toasty';
import { LoginService } from './login.service';

export class Login {
  username: string;
  password: string;
}

export class Register {
  firstName: string;
  lastName: string;
  username: string;
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

  constructor(
    private router: Router,
    private toastyService: ToastyService,
    private loginService: LoginService
  ) {}

  public ngOnInit(): void {
    this.login = new Login();
    this.register = new Register();
  }

  public showRegister() {
    this.showRegisterForm = !this.showRegisterForm;
  }

  public onRegister(register: Register): void {
    if (!this.verifyInformations(register)) {
      return;
    }

    this.loginService.save(register).subscribe(
      (response) => {
        var toastOptions: ToastOptions = {
          title: `Parabéns ${response.firstName}`,
          msg: 'Cadastro realizado!',
          showClose: true,
          timeout: 5000,
        };

        this.toastyService.success(toastOptions);
        this.showRegister();
      },
      (reject) => {
        var toastOptions: ToastOptions = {
          title: 'Que pena',
          msg: 'Não foi possível realizar o cadastro',
          showClose: true,
          timeout: 5000,
        };

        this.toastyService.error(toastOptions);
      }
    );
  }

  public onLogin(login: Login): void {
    console.log('logIn');
    console.log(login.username);
    console.log(login.password);

    this.router.navigate(['/']);
  }

  public verifyInformations(register): boolean {
    let valid = true;

    var toastOptions: ToastOptions = {
      title: 'Por favor',
      showClose: true,
      timeout: 5000,
    };

    if (!register.username) {
      valid = false;
      toastOptions.msg = 'Informe o usuário';
      this.toastyService.error(toastOptions);
    }
    if (!register.password) {
      valid = false;
      toastOptions.msg = 'Informe a senha';
      this.toastyService.error(toastOptions);
    }
    if (!register.firstName) {
      valid = false;
      toastOptions.msg = 'Informe o nome';
      this.toastyService.error(toastOptions);
    }
    if (!register.lastName) {
      valid = false;
      toastOptions.msg = 'Informe o sobrenome';
      this.toastyService.error(toastOptions);
    }

    return valid;
  }
}
