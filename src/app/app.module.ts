import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RouterLink, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    CalculatorComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    RouterModule.forRoot([
      {path: "welcome", component: WelcomeComponent},
      {path: "", component: WelcomeComponent},
      {path: "calculator", component: CalculatorComponent},
      {path: "login", component: LoginComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
