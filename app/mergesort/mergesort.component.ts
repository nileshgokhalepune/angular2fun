import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'merge-sort',
    templateUrl: 'mergesort.component.html'
})
export class MergeSort {
    private unsorted: Array<number> = [38, 27, 43, 3, 9, 82, 10];
    private left: number = 0;
    private right: number = this.unsorted.length;

    private sort() {
        var middle = (this.left + this.right) / 2;
        this.merge(this.unsorted, this.left, middle, this.right);
    }

    private merge(arr: Array<number>, l: number, m: number, r: number) {

    }
}