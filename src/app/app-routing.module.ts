import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const ROUTES: Routes = [
    /*{
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }*/
];

@NgModule({
    imports: [
        RouterModule.forRoot(ROUTES),
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}