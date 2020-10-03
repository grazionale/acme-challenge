import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// Declarations
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Imports
import { LoginComponent } from './views/login/login.component';
import { RouterModule } from '@angular/router';
import { ToastyModule } from 'ng2-toasty';
import ptBr from '@angular/common/locales/pt';
import {
  HashLocationStrategy,
  LocationStrategy,
  registerLocaleData,
} from '@angular/common';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { LoginService } from './views/login/login.service';
import { DashboardService } from './views/dashboard/dashboard.service';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthService } from './core/security/auth.service';
import { AuthGuard } from './core/security/auth.guard';

import { environment } from './../environments/environment';
registerLocaleData(ptBr);

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [AppComponent, LoginComponent, DashboardComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    InputTextModule,
    PasswordModule,
    PanelModule,
    ButtonModule,
    CardModule,
    DialogModule,
    ToastModule,
    ToastyModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: environment.tokenWhitelistedDomains,
        disallowedRoutes: environment.tokenBlacklistedRoutes,
      },
    }),
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt',
    },
    LoginService,
    DashboardService,
    AuthService,
    AuthGuard,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
