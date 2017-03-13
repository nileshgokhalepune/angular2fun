import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';
import { ClosestPair } from './closestPair/closestpair.component';
import { BubbleSort } from './bubblesort/bubblesort.component';
const appRoutes: Routes = [
    {
        path: 'closestpair',
        component: ClosestPair
    },
    {
        path: 'bubblesort',
        component: BubbleSort
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'closestpair'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRouting {

}