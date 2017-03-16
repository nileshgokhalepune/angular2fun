import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'insertion-sort',
    templateUrl: 'insertionsort.component.html'
})
export class InsertionSort {
    private unsorted: any = [9, 7, 6, 15, 16, 5, 10, 11];
    private sorted: Array<any> = [];
    private unsortedValues: any;
    private carriedOver: string;
    private delay: any;
    private size: any;
    private pos: any = -1;
    private insertpos: any = -1;
    private code: string = `
        //You can count the instructions as an exercise
        private sort() { 
                for (var i = 0; i < this.sorted.length - 1; i++) { <-- [Total 3 Instruction(s)]
                    var j = 0; <-- [Total 1 instruction(s)]
                    while (j < this.sorted.length) { <-- [Total 1 instruction(s)]
                        if (this.sorted[i] > this.sorted[j] && i < j) { <-- [Total 2 instruction(s)]
                            var val = this.sorted.splice(j, 1); <-- [Total 1 instruction(s)]
                            this.sorted.splice(i, 0, val[0]); <-- [Total 1 instruction(s)]
                            j = 0; <-- [Total 1 instruction(s)]
                        }
                        j++; <-- [Total 1 instruction(s)]
                    }
                } 
            }
            
            Let Length of array be N
            f(N) = N (3 + 1 + N( 1 + 2 + 1 + 1 + 1) + 1 )
                   N (4 + N(6) + 1)
                   N (5 + N(6))
                   Drop all constants and low order terms
             f(N)= N2
            `;
    ///5,22,15,2,4,16,12,10,7,14
    private async sort() {
        this.sorted = [];
        this.unsorted.forEach((data: any) => this.sorted.push(parseInt(data)));
        for (var i = 0; i < this.sorted.length - 1; i++) {
            var j = 0;
            while (j < this.sorted.length) {
                if (this.sorted[i] > this.sorted[j] && i < j) {
                    var val = this.sorted.splice(j, 1);
                    this.sorted.splice(j, 0, 'Removed');
                    this.carriedOver = val[0];
                    this.pos = j;
                    this.insertpos = i;
                    await this.sleep(this.delay);
                    this.sorted.splice(j, 1);
                    this.sorted.splice(i, 0, 'Insert');
                    await this.sleep(this.delay);
                    this.sorted.splice(i, 1);
                    this.sorted.splice(i, 0, val[0]);
                    this.carriedOver = "";
                    await this.sleep(this.delay);
                    j = 0;
                }
                j++;
            }
        }
        this.pos = -1;
        this.insertpos = -1;
    }

    private changeUnsorted() {
        if (this.unsortedValues && this.unsortedValues.length > 0) {
            this.unsorted = [];
            this.unsortedValues.split(',').forEach((data: any) => this.unsorted.push(parseInt(data)));
        }
    }


    private randomGenerator() {
        this.unsorted = [];
        for (var i = 0; i < this.size; i++) {
            this.unsorted.push(parseInt(((Math.random() * 100) + 1).toString()));
        }
    }

    private sleep(ms: any) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}