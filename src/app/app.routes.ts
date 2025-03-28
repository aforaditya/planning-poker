import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { PlaygroundComponent } from './pages/playground/playground.component';
import { EnterComponent } from './pages/enter/enter.component';
import { JoinComponent } from './pages/join/join.component';
import { JoinRoomPageComponent } from './pages/join-room-page/join-room-page.component';

export const routes: Routes = [
    {
        path: '',
        component: LandingPageComponent
    },    
    {
        path: 'playground',
        component: PlaygroundComponent
    },    
    {
        path: 'enter',
        component: EnterComponent
    },    
    {
        path: 'join',
        component: JoinComponent
    },
    {
        path: 'rooms/:roomId',
        component: JoinRoomPageComponent
    }
];
