import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { LoginComponent } from '../components/login/login.component';
import { FeedComponent } from '../components/feed/feed.component';
import { EditProfileComponent } from '../components/edit-profile/edit-profile.component';
import { ConnectionsComponent } from '../components/connections/connections.component';
import { RequestsComponent } from '../components/requests/requests.component';
import { authGuard } from '../guards/auth.guard';
import { editProfileGuard } from '../guards/edit-profile.guard';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: HomeComponent,
        canActivate: [authGuard],
        children: [

            {
                path: 'profile',
                component: ProfileComponent,
                canDeactivate: [editProfileGuard]
            },
            {
                path: 'feed',
                component: FeedComponent
            },
            {
                path: 'connections',
                component: ConnectionsComponent
            },
            {
                path: 'requests',
                component: RequestsComponent
            }
        ]
    },
];
