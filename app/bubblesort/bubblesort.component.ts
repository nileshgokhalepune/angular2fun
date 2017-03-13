import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'bubble-sort',
    templateUrl: 'bubblesort.component.html'
})
export class BubbleSort {
    private array: any = [4, 2, 10, 6, 3, 8];
    private sortedarray: any = [];

    private sort() {
        this.sortedarray = [];
        this.array.forEach((data:any) => this.sortedarray.push(data));
        for (var i = 0; i < this.sortedarray.length; i++) {
            for (var j = i; j < this.sortedarray.length; j++) {
                if (this.sortedarray[i] > this.sortedarray[j]) {
                    //swap values
                    var temp = this.sortedarray[i];
                    this.sortedarray[i] = this.sortedarray[j];
                    this.sortedarray[j] = temp;
                }
            }
        }
    }
}