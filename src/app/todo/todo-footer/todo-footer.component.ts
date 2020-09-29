import { Component, OnInit, OnDestroy } from '@angular/core'
import { ListDataService } from '../listdata.service'
import { Subscription } from 'rxjs'

@Component({
    selector: 'app-todo-footer',
    templateUrl: './todo-footer.component.html',
    styleUrls: ['./todo-footer.component.css']
})

export class TodoFooterComponent implements OnInit {

    public Subscription;
    count: number = 0;

    constructor(
        private liService: ListDataService //inject service
    ) {}

    ngOnDestroy(): void {
        this.Subscription.unsubscribe(); //onDestroy cancels the subscribe request
    }

    ngOnInit(): void {
        this.Subscription = this.liService.get().subscribe(msg => this.count = msg.length);
    }
}