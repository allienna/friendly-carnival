import {Component} from 'angular2/core';

@Component({
    selector: 'todo-cmp',
    template: `
        <ul class="tasks">
        <li *ngFor="#todo of todos">{{todo.text}}</li>
        </ul>
        `
})
export class TodoCmp {
    todos=[
            {text: 'Go to the store'},
            {text: 'Prepare AngularJs 2 presentation'}
    ]
}