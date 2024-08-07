import {Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AdminComponent} from "./admin.component";

export const adminRoutes: Routes = [

    {path:'',component:AdminComponent, children: [
            {path:'',component:DashboardComponent},
        ]},
];
