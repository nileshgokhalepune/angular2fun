import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'linked-list',
    templateUrl: 'linkedlist.component.html'
})
export class LinkedListComponent {
}

export class Node {
    private data: string;
    private next: string;
}

export class LinkedList {

    public add(node: Node): void {

    }
}