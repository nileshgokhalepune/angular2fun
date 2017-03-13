import { Component, AfterViewInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'closestPair',
    templateUrl: 'closestpair.component.html'
})
export class ClosestPair implements AfterViewInit {
    private sortedArray: any = "1,4,7,12,19,23";
    private desired: string = "16";
    private desiredPair: any = [];
    private sorted: any = [];
    private val1: number;
    private val2: number;
    private addition: number;

    public ngAfterViewInit() {
        this.onkeyup(null);
    }

    private onkeyup($event: any) {
        var arr = this.sortedArray.split(',');
        this.sorted = [];
        arr.forEach((data: string) => this.sorted.push(parseInt(data)));
    }
    ///1,4,7,12,19,23
    private find() {
        this.desiredPair = [];
        var id: any;
        var desiredNumber: number = parseInt(this.desired);
        var i = this.sorted.length - 1, j = this.sorted.length - 2;
        while (i > -1 && j > -1) {
            this.val1 = this.sorted[i]; this.val2 = this.sorted[j]
            this.addition = this.sorted[i] + this.sorted[j];

            if (this.sorted[i] + this.sorted[j] === desiredNumber) {
                this.desiredPair.push(this.sorted[i]);
                this.desiredPair.push(this.sorted[j]);
                i = j = -1;
            } else if (this.sorted[i] + this.sorted[j] > desiredNumber) {
                j--;
                if (j === -1) {
                    i--;
                    j = i - 1;
                }
            } else {
                i--;
                j = i - 1;
            }

        }
        if (i === -1 && j === -1) {
            clearInterval(id);
        }
        if (this.desiredPair.length === 0) {
            this.desiredPair.push('Not found');
        }
    }

}