import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TodoService } from '../todo/shared/todo.service';


@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

  id: string;
  task: any;

  constructor(public _toDoService: TodoService ,public dialogRef: MatDialogRef<TaskDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
      this.id = data.id;
    }

  ngOnInit() {
    this._toDoService.getItem(this.id).snapshotChanges()
    .subscribe(item => {
      this.task = item.payload.toJSON();
    });
  }
}
