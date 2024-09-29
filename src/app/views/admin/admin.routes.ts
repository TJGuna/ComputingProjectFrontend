import {Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AdminComponent} from "./admin.component";
import {ClientsComponent} from "./clients/clients.component";
import {ExpertsComponent} from "./experts/experts.component";
import {ChatScreenComponent} from "./chat-screen/chat-screen.component";
import {PostsComponent} from "./posts/posts.component";
import {DateComponent} from "./date/date.component";
import {AdminsComponent} from "./admins/admins.component";

export const adminRoutes: Routes = [

    {path:'',component:AdminComponent, children: [
            {path:'',component:DashboardComponent},
            {path:'Clients/ClientList',component:ClientsComponent},
            {path:'Experts/ExpertList',component:ExpertsComponent},
            {path:'Admin/AdminList',component:AdminsComponent},
            {path:'Chats',component:ChatScreenComponent},
            {path:'posts',component:PostsComponent},
            {path:'date',component:DateComponent},
        ]},
];
