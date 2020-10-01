import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';

// Declarations
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Imports
import { LoginComponent } from './views/login/login.component';
import { RouterModule } from '@angular/router';
import { ToastyModule } from 'ng2-toasty';
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
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

registerLocaleData(ptBr);

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
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt',
    },
    LoginService,
    DashboardService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
