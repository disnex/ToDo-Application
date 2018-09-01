import { Component, OnInit } from '@angular/core';
import { TodoService } from './shared/todo.service';
import { element } from '@angular/core/src/render3/instructions';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { AddTaskComponent } from '../add-task/add-task.component';
import { TaskDetailsComponent } from '../task-details/task-details.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {

  toDoListArray: any[];
  constructor(private _toDoService: TodoService, public dialog: MatDialog) { }

  ngOnInit() {
    this._toDoService.getToDoList().snapshotChanges()
    .subscribe(item => {
      this.toDoListArray = [];
      item.forEach(element => {
        var x = element.payload.toJSON();
        x["$key"] = element.key;
        this.toDoListArray.push(x);
      })
      this.toDoListArray.sort((a,b) => {
        return a.isChecked - b.isChecked;
      })
    });

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddTaskComponent, {
      /*width: '300px',
      height: '600px',*/
    });

    dialogRef.afterClosed().subscribe(result => {
      this._toDoService.addTitle(result); 
    });
  }

  openDetails($key: string): void {
    const dialogRef = this.dialog.open(TaskDetailsComponent, {
      /*width: '300px',
      height: '600px',*/
      data: {id: $key}
    });

    dialogRef.afterClosed().subscribe();
  }

  alterCheck($key: string, isChecked){
    this._toDoService.checkOrUncheckTitle($key,!isChecked);
  }

  onDelete($key: string){
    this._toDoService.removeTitle($key);
  }

}
