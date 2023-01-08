import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidarTokenGuard } from './guards/validar-token.guard';

const routes: Routes = [
  {
    path: 'splashscreen',
    loadChildren: () => import('./kromos/splashscreen/splashscreen.module').then( m => m.SplashscreenModule )
  },

  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule )
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./protected/protected.module').then( m => m.ProtectedModule ),
    canActivate: [ ValidarTokenGuard ],
    canLoad: [ ValidarTokenGuard ]
  },
  {
    path: 'mycollection',
    loadChildren: () => import('./kromos/mycollection/mycollection.module').then( m => m.MycollectionModule ),
    canActivate: [ ValidarTokenGuard ],
    canLoad: [ ValidarTokenGuard ]
  },
  {
    path: 'trends',
    loadChildren: () => import('./kromos/trends/trends.module').then( m => m.TrendsModule ),
    canActivate: [ ValidarTokenGuard ],
    canLoad: [ ValidarTokenGuard ]
  },
  {
    path: 'matchs',
    loadChildren: () => import('./kromos/matchs/matchs.module').then( m => m.MatchsModule ),
    canActivate: [ ValidarTokenGuard ],
    canLoad: [ ValidarTokenGuard ]
  },
  {
    path: 'messages',
    loadChildren: () => import('./kromos/messages/messages.module').then( m => m.MessagesModule ),
    canActivate: [ ValidarTokenGuard ],
    canLoad: [ ValidarTokenGuard ]
  },
  {
    path: 'profile',
    loadChildren: () => import('./kromos/profile/profile.module').then( m => m.ProfileModule ),
    canActivate: [ ValidarTokenGuard ],
    canLoad: [ ValidarTokenGuard ]
  },
  {
    path:'**',
    redirectTo: 'splashscreen'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
