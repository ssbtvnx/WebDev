import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { AuthInterceptor } from './AuthInterceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(),
    importProvidersFrom(HttpClientModule),
    [
      {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
      }
    ]
   ]
};


// @NgModule({
//   imports: [
//     BrowserModule,
//     ReactiveFormsModule,
//     RouterModule.forRoot([{ path: '', component: TopBarComponent },
//     {path: 'products/:productId', component:ProductDetailsComponent},
//     {path: 'cart', component:CartComponent},
//     {path: 'about', component:AboutComponent},
//     { path: 'categories/:categoryName', component: ProductListComponent },]),
//   ],
//   declarations: [
//     AppComponent,
//     TopBarComponent,
//     ProductListComponent,
//     AboutComponent,
//     HomeComponent,
//     CartComponent,
//   ],
//   bootstrap: [AppComponent],
// })

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/