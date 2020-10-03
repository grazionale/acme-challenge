import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';

@Injectable()
export class DashboardService {
  private userUrl: string;

  constructor(private http: HttpClient) {
    this.userUrl = `${environment.apiUrl}/plains`;
  }

  public find(): Observable<any> {
    return this.http.get(`${this.userUrl}/`);
  }

  public save(user: any): Observable<any> {
    return this.http.post(this.userUrl, user);
  }
}
