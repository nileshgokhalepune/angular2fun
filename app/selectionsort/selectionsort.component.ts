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
    private sorted: any = [];
    private temp:any;
    private first: any = -1;
    private second: any = -1;
    private async sort() {
        this.sorted = [];
        this.unsorted.forEach((data: any) => this.sorted.push(parseInt(data)));
        for (var i = 0; i < this.sorted.length - 1; i++) {
            var min_idx = i;
            for (var j = i + 1; j < this.sorted.length - 1; j++) {
                if (this.sorted[j] < this.sorted[min_idx])
                    min_idx = j;
            }
            await this.sleep(1000);
            this.first = i; this.second = min_idx;
            await this.swap(this.sorted, i, min_idx);
        }
    }

    private async swap(arr: Array<number>, firstidx: number, secondidx: number) {
        var firstVal = arr[firstidx]
        var secondVal = arr[secondidx];
        var temp = arr.splice(firstidx, 1, secondVal);
        this.temp =temp;
        await this.sleep(1000);
        temp= arr.splice(secondidx, 1, firstVal);
        this.temp =temp;
        await this.sleep(1000);
    }

    private sleep(ms: any) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}