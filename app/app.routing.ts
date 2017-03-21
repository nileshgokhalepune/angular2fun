import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';
import { ClosestPair } from './closestPair/closestpair.component';
import { BubbleSort } from './bubblesort/bubblesort.component';
import { SelectionSort } from './selectionsort/selectionsort.component';
import { InsertionSort } from './insertionsort/insertionsort.component';
import { MergeSort } from './mergesort/mergesort.component';
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
        path: 'insertionsort',
        component: InsertionSort
    },
    {
        path: 'mergesort',
        component: MergeSort
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