import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'merge-sort',
    templateUrl: 'mergesort.component.html'
})
export class MergeSort {
    private unsorted: Array<number> = [38, 27, 43, 3, 9, 82, 10];
    private sorted: Array<any> = [];
    private left: number = 0;
    private right: number = this.unsorted.length;
    private carriedOver: string;
    private delay: any;
    private size: any;
    private showCode: boolean = true;
    private pos: any = -1;
    private insertpos: any = -1;

    private sort() {
        this.sorted = [];
        this.unsorted.forEach((data: any) => this.sorted.push(parseInt(data)));
        this.unsorted = [];
        this.mergeSort(this.sorted, 0, this.sorted.length);
    }
    private mergeSort(arr: Array<number>, l: number, r: number): any {
        if (l < r) {
            var mid = Math.floor((l + (r - 1)) / 2);
            this.mergeSort(arr, l, mid);
            this.mergeSort(arr, mid + 1, r);
            this.merge(arr, l, mid, r);
            console.log(arr);
        }
    }
    private merge(arr: Array<number>, left: number, middle: number, right: number) {
        var n1 = middle - left + 1;
        var n2 = right - middle;
        var leftArr = [], rightArr = [];
        for (var i = 0; i < n1; ++i)
            leftArr.push(arr[left + i]);
        for (var j = 0; j < n2; ++j)
            rightArr.push(arr[middle + 1 + j]);

        var i = 0, j = 0, k = left;
        while (i < n1 && j < n2) {
            if (leftArr[i] < rightArr[j]) {
                arr[k] = leftArr[i]
                i++;
            } else {
                arr[k] = rightArr[j];
                j++;
            }
            k++;
        }

        while (i < n1) {
            arr[k] = leftArr[i];
            i++; k++;
        }
        while (j < n1) {
            arr[k] = rightArr[j];
            j++; k++;
        }
    }

    private randomGenerator() {
        if (!this.size || this.size <= 1) {
            alert('Size must be greater that 2');
            return;
        }
        this.unsorted = [];
        for (var i = 0; i < this.size; i++) {
            this.unsorted.push(parseInt(((Math.random() * 100) + 1).toString()));
        }
    }

}