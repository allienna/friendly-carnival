import {Component} from 'angular2/core'
import {TodoCmp} from './todo_cmp'

@Component({
    selector: 'todo-app',
    templateUrl: '/todo-app.html',
    directives: [TodoCmp]
})
export class FriendlyCarnivalApp {

}