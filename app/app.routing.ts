import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';
import { ClosestPair } from './closestPair/closestpair.component';
import { BubbleSort } from './bubblesort/bubblesort.component';
import { SelectionSort } from './selectionsort/selectionsort.component';

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
        path: 'selectionsort',
        component: SelectionSort
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