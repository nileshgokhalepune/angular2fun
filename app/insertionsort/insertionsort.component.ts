import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'insertion-sort',
    templateUrl: 'insertionsort.component.html'
})
export class InsertionSort {
    private unsorted: any = [9, 7, 6, 15, 16, 5, 10, 11];
    private sorted: Array<any> = [];
    private carriedOver: string;
    private delay: any;
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
                   N (5N(6))
                   5N + N<sup>2</sup>(6)
            `;

    private async sort() {
        if (!this.delay) this.delay = 1000;
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

    private sleep(ms: any) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}