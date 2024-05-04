import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { CalculatorComponent } from './calculator/calculator.component';

export const routes: Routes = [
    {path: " ", component: WelcomeComponent},
    {path: "**", component: WelcomeComponent},
    {path: "welcome", component: WelcomeComponent},
    {path: "calculator", component: CalculatorComponent}
];
