import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'bubble-sort',
    templateUrl: 'bubblesort.component.html',
    styles: [
        `
        .swap{
            background-color:gray;
        }
        `
    ]
})
export class BubbleSort {
    private array: any = [4, 2, 10, 6, 3, 8];
    private sortedarray: any = [];
    private unsortedValues: any;
    private size:any;
    private temp: any;
    private first: any;
    private second: any;
    private delay: any;
    private async sort() {
        this.sortedarray = [];
        this.array.forEach((data: any) => this.sortedarray.push(data));
        for (var i = 0; i < this.sortedarray.length; i++) {
            for (var j = i; j < this.sortedarray.length; j++) {
                if (this.sortedarray[i] > this.sortedarray[j]) {
                    //swap values
                    this.first = i;
                    this.second = j;
                    await this.sleep(this.delay);
                    var temp = this.sortedarray[i];
                    this.sortedarray[i] = null;
                    this.temp = temp;
                    await this.sleep(this.delay);
                    this.sortedarray[i] = this.sortedarray[j];
                    this.sortedarray[j] = null;
                    await this.sleep(this.delay);
                    this.sortedarray[j] = temp;
                    this.temp = null;
                }
            }
        }
    }

    private changeUnsorted() {
        if (this.unsortedValues && this.unsortedValues.length > 1) {
            this.array = [];
            this.unsortedValues.split(',').forEach((data: any) => this.array.push(parseInt(data)));
        }
    }

    
    private randomGenerator() {
        this.array = [];
        for (var i = 0; i < this.size; i++) {
            this.array.push(parseInt(((Math.random() * 100) + 1).toString()));
        }
    }

    private sleep(ms: any) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}