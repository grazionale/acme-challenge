import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

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

registerLocaleData(ptBr);

@NgModule({
  declarations: [AppComponent, LoginComponent, DashboardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
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
