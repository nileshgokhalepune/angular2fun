import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'insertion-sort',
    templateUrl: 'insertionsort.component.html'
})
export class InsertionSort {
    private unsorted: any = [9, 7, 6, 15, 16, 5, 10, 11];
    private sorted: Array<number> = [];
    private async sort() {
        this.sorted = [];
        this.unsorted.forEach((data: any) => this.sorted.push(parseInt(data)));
        for (var i = 0; i < this.sorted.length - 1; i++) {
            for (var j = 0; j < this.sorted.length - 1; j++){
                if (this.sorted[i] > this.sorted[j] && i < j) {
                    var temp = this.sorted.splice(j, 1);
                    this.sorted.unshift(temp[0]);
                    break;
                }
            }
        }
    }
}