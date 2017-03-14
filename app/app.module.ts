import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { ClosestPair } from './closestPair/closestpair.component';
import { BubbleSort } from './bubblesort/bubblesort.component';
import { SelectionSort } from './selectionsort/selectionsort.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        CommonModule,
        AppRouting
    ],
    declarations: [
        AppComponent,
        ClosestPair,
        BubbleSort,
        SelectionSort
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}