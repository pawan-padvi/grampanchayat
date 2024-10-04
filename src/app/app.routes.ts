import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingComponent } from './setting/setting.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from '../guard/auth.guard';
import { TestingComponent } from '../testing/testing.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    {path:'',component:LayoutComponent,canActivate: [authGuard],
        children:[
            {path:'dashboard',component:DashboardComponent},
            {path:'aboutus',component:AboutusComponent},
            {path:'service',component:ServiceComponent},
            {path:'contact',component:ContactComponent},
            {path:'profile',component:ProfileComponent},
            {path:'setting',component:SettingComponent},
            {path:'testing',component:TestingComponent},
        ]
    },
    { path: '**', redirectTo: '' }
];
