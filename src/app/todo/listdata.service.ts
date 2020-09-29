import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ListDataService {
    private todoilist :string[] = [];
    private todolist = new Subject<string[]>();

    constructor() { }

    public get(): Observable<string[]> {
        return this.todolist.asObservable();
    }
    public put(value: string): void {
        this.todoilist.push(value);
        this.todolist.next(this.todoilist);
    }
}