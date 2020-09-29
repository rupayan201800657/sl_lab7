import { Component, OnInit, OnDestroy } from '@angular/core';
import { ListDataService } from '../listdata.service'

@Component({
    selector: 'app-todo-input',
    templateUrl: './todo-input.component.html',
    styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {

    entry : string = "";

    ngOnInit() {}
    constructor(
        private liService: ListDataService // inject service
    ) {}

    public submitEntry(): void {
        this.liService.put(this.entry);
        console.log("'" + this.entry + "'")
    }

    public changeValue(e) {
        this.entry = e.target.value;;
    }
}
