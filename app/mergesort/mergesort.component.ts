import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'merge-sort',
    templateUrl: 'mergesort.component.html'
})
export class MergeSort {
    arr: Array<number> = [9, 8, 7, 6, 5, 4, 3, 2, 1];
    mergeSort(array: Array<number>, left: number, right: number) {
        if (left < right) {
            var mid = Math.floor((left + right) / 2);
            console.log(array.slice(left, mid));
            console.log(array.slice(mid, right));
            this.mergeSort(array, left, mid);
            this.mergeSort(array, mid + 1, right);
            this.merge(array, left, mid, right);
        }
    }

    merge(arr: Array<number>, left: any, middle: any, right: any) {
        
    }

    sort() {
        var sorted = this.mergeSort(this.arr, 0, this.arr.length);
        console.clear();
        console.log(this.arr);
    }
}

// private unsorted: Array<number> = [38, 27, 43, 3, 9, 82, 10];
// private unsortedValues: any;
// private sorted: Array<any> = [];
// private left: number = 0;
// private right: number = this.unsorted.length;
// private carriedOver: string;
// private delay: any;
// private size: any;
// private showCode: boolean = true;
// private pos: any = -1;
// private insertpos: any = -1;
// private leftDiv: Array<any> = new Array<any>();
// private rightDiv: Array<any> = new Array<any>();
// private leftPos = 0; rightPos = 0; midPos = 0;
// private code: any = `
//     f(N) = 
//     function mergeSort(arr,l,r){
//         if( l < r ){                            <-- [Total 1 instruction(s)]  1
//             var m = Math.floor((l + r ) / 2);   <-- [Total 4 instruction(s)]  1
//             this.mergeSort(arr, l, mid);        <-- [Total 1 instruction(s)]  N/2
//             this.mergeSort(arr, mid + 1, r);    <-- [Total 1 instruction(s)]  N/2
//             this.merge(arr, l, mid, r);         <-- [Total 1 instruction(s)]  1
//         }
//     }

//     function merge(arr, left, middle, right){
//         var n1 = middle - left + 1;             <-- [Total 1 instruction(s)] 3
//         var n2 = right - middle;                <-- [Total 1 instruction(s)] 2
//         var leftArr = [], rightArr = [];        <-- [Total 1 instruction(s)] 2
//         for (var i = 0; i < n1; ++i)            <-- [Total 3 instruction(s)] (N + 1) + N
//             leftArr.push(arr[left + i]);        <-- [Total 1 instruction(s)] N
//         for (var j = 0; j < n2; ++j)            <-- [Total 3 instruction(s)] (N + 1) + N
//             rightArr.push(arr[middle + 1 + j]); <-- [Total 1 instruction(s)] N

//         var i = 0, j = 0, k = left;             <-- [Total 3 instruction(s)] 3
//         while (i < n1 && j < n2) {              <-- [Total 2 instruction(s)] (N+1)
//             if (leftArr[i] < rightArr[j]) {     <-- [Total 1 instruction(s)] N
//                 arr[k] = leftArr[i]             <-- [Total 1 instruction(s)] N            
//                 i++;                            <-- [Total 1 instruction(s)] N
//             } else {    
//                 arr[k] = rightArr[j];           <-- [Total 1 instruction(s)]
//                 j++;                            <-- [Total 1 instruction(s)]
//             }
//             k++;                                <-- [Total 1 instruction(s)]
//         }

//         while (i < n1) {                        <-- [Total 1 instruction(s)]
//             arr[k] = leftArr[i];                <-- [Total 1 instruction(s)]
//             i++; k++;                           <-- [Total 2 instruction(s)]
//         }
//         while (j < n1) {                        <-- [Total 1 instruction(s)]
//             arr[k] = rightArr[j];               <-- [Total 1 instruction(s)]    
//             j++; k++;                           <-- [Total 2 instruction(s)]
//         }
//     }
// `;
// private mergeSortCount: number = 0;
// private sort() {
//     this.sorted = [];
//     this.unsorted.forEach((data: any) => this.sorted.push(parseInt(data)));
//     this.unsorted = [];
//     this.mergeSort(this.sorted, 0, this.sorted.length);
// }

// private mergeSort(arr: Array<number>, l: number, r: number): any {
//     if (l < r) {
//         var mid = Math.floor((l + (r - 1)) / 2);
//         this.mergeSortCount++;
//         this.mergeSort(arr, l, mid);
//         this.mergeSortCount++;
//         this.mergeSort(arr, mid + 1, r);
//         this.merge(arr, l, mid, r);
//         console.log(arr);
//     }
// }

// actualLeft: number;
// actualRight: number;
// private async merge(arr: Array<number>, left: number, middle: number, right: number) {
//     this.leftDiv = [];
//     this.rightDiv = [];
//     this.leftPos = left; this.rightPos = right; this.midPos = middle;
//     arr.forEach((data, i) => {
//         if (i >= left && i <= middle)
//             this.leftDiv.push(data);

//         if (i >= middle + 1 && i <= right)
//             this.rightDiv.push(data);
//     });
//     var n1 = middle - left + 1;
//     var n2 = right - middle;
//     var leftArr = [], rightArr = [];
//     for (var i = 0; i < n1; ++i) {
//         this.actualLeft = arr[left + 1];
//         await this.sleep(this.delay);
//         leftArr.push(arr[left + i]);
//     }
//     for (var j = 0; j < n2; ++j) {
//         this.actualRight = arr[middle + 1 + j];
//         await this.sleep(this.delay);
//         rightArr.push(arr[middle + 1 + j]);
//     }

//     var i = 0, j = 0, k = left;
//     while (i < n1 && j < n2) {
//         if (leftArr[i] < rightArr[j]) {
//             arr[k] = leftArr[i]
//             i++;
//         } else {
//             arr[k] = rightArr[j];
//             j++;
//         }
//         k++;
//     }

//     while (i < n1) {
//         arr[k] = leftArr[i];
//         i++; k++;
//     }
//     while (j < n1) {
//         arr[k] = rightArr[j];
//         j++; k++;
//     }
//     this.actualLeft = -1; this.actualRight = -1;
// }

// private changeUnsorted() {
//     if (this.unsortedValues && this.unsortedValues.length > 0) {
//         this.unsorted = [];
//         this.unsortedValues.split(',').forEach((data: any) => this.unsorted.push(parseInt(data)));
//     }
// }
// private randomGenerator() {
//     this.leftDiv = [];
//     this.sorted = [];
//     this.rightDiv = [];
//     if (!this.size || this.size <= 1) {
//         alert('Size must be greater than 2');
//         return;
//     }
//     this.unsorted = [];
//     for (var i = 0; i < this.size; i++) {
//         this.unsorted.push(parseInt(((Math.random() * 100) + this.size).toString()));
//     }
// }

// private sleep(ms: any) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }
