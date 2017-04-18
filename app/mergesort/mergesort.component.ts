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
    private code: any = `
        f(N) = 
        function mergeSort(arr,l,r){
            if( l < r ){                            <-- [Total 1 instruction(s)]  1
                var m = Math.floor((l + r ) / 2);   <-- [Total 4 instruction(s)]  1
                this.mergeSort(arr, l, mid);        <-- [Total 1 instruction(s)]  N/2
                this.mergeSort(arr, mid + 1, r);    <-- [Total 1 instruction(s)]  N/2
                this.merge(arr, l, mid, r);         <-- [Total 1 instruction(s)]  1
            }
        }

        function merge(arr, left, middle, right){
            var n1 = middle - left + 1;             <-- [Total 1 instruction(s)] 3
            var n2 = right - middle;                <-- [Total 1 instruction(s)] 2
            var leftArr = [], rightArr = [];        <-- [Total 1 instruction(s)] 2
            for (var i = 0; i < n1; ++i)            <-- [Total 3 instruction(s)] (N + 1) + N
                leftArr.push(arr[left + i]);        <-- [Total 1 instruction(s)] N
            for (var j = 0; j < n2; ++j)            <-- [Total 3 instruction(s)] (N + 1) + N
                rightArr.push(arr[middle + 1 + j]); <-- [Total 1 instruction(s)] N

            var i = 0, j = 0, k = left;             <-- [Total 3 instruction(s)] 3
            while (i < n1 && j < n2) {              <-- [Total 2 instruction(s)] (N+1)
                if (leftArr[i] < rightArr[j]) {     <-- [Total 1 instruction(s)] N
                    arr[k] = leftArr[i]             <-- [Total 1 instruction(s)] N            
                    i++;                            <-- [Total 1 instruction(s)] N
                } else {    
                    arr[k] = rightArr[j];           <-- [Total 1 instruction(s)]
                    j++;                            <-- [Total 1 instruction(s)]
                }
                k++;                                <-- [Total 1 instruction(s)]
            }

            while (i < n1) {                        <-- [Total 1 instruction(s)]
                arr[k] = leftArr[i];                <-- [Total 1 instruction(s)]
                i++; k++;                           <-- [Total 2 instruction(s)]
            }
            while (j < n1) {                        <-- [Total 1 instruction(s)]
                arr[k] = rightArr[j];               <-- [Total 1 instruction(s)]    
                j++; k++;                           <-- [Total 2 instruction(s)]
            }
        }
    `;
    private mergeSortCount: number = 0;
    private sort() {
        this.sorted = [];
        this.unsorted.forEach((data: any) => this.sorted.push(parseInt(data)));
        this.unsorted = [];
        this.mergeSort(this.sorted, 0, this.sorted.length);
    }

    private mergeSort(arr: Array<number>, l: number, r: number): any {
        if (l < r) {
            var mid = Math.floor((l + (r - 1)) / 2);
            this.mergeSortCount++;
            this.mergeSort(arr, l, mid);
            this.mergeSortCount++;
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