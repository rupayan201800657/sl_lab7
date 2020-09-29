import { Component, OnInit, OnDestroy } from '@angular/core';
import { ListDataService } from '../listdata.service'

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
    public subscription;
    entry : string[];

    constructor(
        private liservice: ListDataService //inject service
    ) {}

    ngOnDestroy(): void {
        this.subscription.unsubscribe(); //onDestroy cancels the subscribe request
    }
    ngOnInit(): void {
        this.subscription = this.liservice.get().subscribe(msg => this.entry = msg);
    }
}

