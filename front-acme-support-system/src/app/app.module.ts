import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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

registerLocaleData(ptBr);

@NgModule({
  declarations: [AppComponent, LoginComponent, DashboardComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    InputTextModule,
    PasswordModule,
    PanelModule,
    ToastyModule.forRoot(),
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
