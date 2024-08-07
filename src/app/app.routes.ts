import { Routes } from '@angular/router';
import {AuthComponent} from "./views/auth/auth.component";

export const routes: Routes = [
    { path: 'login', component: AuthComponent },
    { path: '', loadChildren: () => import('./views/admin/admin.routes').then(m => m.adminRoutes) },
];
