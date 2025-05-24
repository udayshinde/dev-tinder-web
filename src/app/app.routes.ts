import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { LoginComponent } from '../components/login/login.component';
import { FeedComponent } from '../components/feed/feed.component';
import { EditProfileComponent } from '../components/edit-profile/edit-profile.component';
import { ConnectionsComponent } from '../components/connections/connections.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'profile',
                component: ProfileComponent
            },
            {
                path: 'feed',
                component: FeedComponent
            },
            {
                path: 'connections',
                component: ConnectionsComponent
            }
        ]
    },
];
