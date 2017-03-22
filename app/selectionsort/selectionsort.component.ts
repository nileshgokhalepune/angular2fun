import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'seelction-sort',
    templateUrl: 'selectionsort.component.html',
    styles: [
        `
        .swap{
            background-color:gray;
        }
        `
    ]
})
export class SelectionSort {
    private unsorted: any = [7, 4, 9, 14, 2, 6, 15];
    private unsortedValues: any;
    private sorted: any = [];
    private delay: any;
    private size: any;
    private temp: any;
    private first: any = -1;
    private second: any = -1;
    private code:string = `
            private async sort() {
                for (var i = 0; i < this.sorted.length - 1; i++) {
                    var min_idx = i;
                    for (var j = i; j < this.sorted.length; j++) {
                        if (this.sorted[j] < this.sorted[min_idx])
                            min_idx = j;
                    }
                    this.first = i; this.second = min_idx;
                    var firstVal = arr[firstidx]
                    var secondVal = arr[secondidx];
                    arr.splice(firstidx, 1, secondVal);
                    arr.splice(secondidx, 1, firstVal);
                }
            }
    `
    private async sort() {
        this.sorted = [];
        this.unsorted.forEach((data: any) => this.sorted.push(parseInt(data)));
        this.unsorted = [];
        var sortStart = new Date();
        for (var i = 0; i < this.sorted.length - 1; i++) {
            var min_idx = i;
            for (var j = i; j < this.sorted.length; j++) {
                if (this.sorted[j] < this.sorted[min_idx])
                    min_idx = j;
            }
            await this.sleep(this.delay);
            this.first = i; this.second = min_idx;
            await this.swap(this.sorted, i, min_idx);
        }
        var sortEnd = new Date();
        alert("sort started:" +  sortStart.getTime() + " And Ended at:" + sortEnd.getTime());
    }

    private async swap(arr: Array<number>, firstidx: number, secondidx: number) {
        var firstVal = arr[firstidx]
        var secondVal = arr[secondidx];
        var temp = arr.splice(firstidx, 1, secondVal);
        this.temp = temp;
        await this.sleep(this.delay);
        temp = arr.splice(secondidx, 1, firstVal);
        this.temp = temp;
        await this.sleep(this.delay);
        this.temp = null;
    }

    private changeUnsorted() {
        if (this.unsortedValues && this.unsortedValues.length > 1) {
            this.unsorted = [];
            this.unsortedValues.split(',').forEach((data: any) => this.unsorted.push(parseInt(data)));
        }
    }



    private randomGenerator() {
        if (!this.size || this.size <= 1) alert('Size must be greater that 2')
        this.unsorted = [];
        for (var i = 0; i < this.size; i++) {
            this.unsorted.push(parseInt(((Math.random() * 100) + 1).toString()));
        }
    }


    private sleep(ms: any) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}