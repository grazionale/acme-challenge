import { environment } from './../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { JwtHelperService } from '@auth0/angular-jwt';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {
  private oauthTokenUrl: string;
  public jwtPayload: any;

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {
    this.oauthTokenUrl = `${environment.apiUrl}/auth/login`;
    this.loadToken();
  }

  public async login(username: string, password: string): Promise<void> {
    await this.http
      .post<any>(this.oauthTokenUrl, {
        username,
        password,
      })
      .toPromise()
      .then((res) => {
        this.storageToken(res.access_token);
      })
      .catch((res) => {
        if (res.status === 400) {
          if (res.error === 'invalid_grant') {
            return Promise.reject('Credenciais inválidas!');
          }
        }
        return Promise.reject(res.response);
      });
  }

  public clearAccessToken() {
    localStorage.removeItem('token');
    this.jwtPayload = null;
  }

  public isAccessTokenInvalid() {
    const token = localStorage.getItem('token');
    return !token || this.jwtHelper.isTokenExpired(token);
  }

  private storageToken(token: string) {
    this.jwtPayload = this.jwtHelper.decodeToken(token);
    localStorage.setItem('token', token);
  }

  private loadToken() {
    const token = localStorage.getItem('token');

    if (token) {
      this.storageToken(token);
    }
  }
}
