import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  toDoList: AngularFireList<any>;  
  constructor(private firebasedb: AngularFireDatabase) { }

  getToDoList(){
    this.toDoList = this.firebasedb.list('titles');
    return this.toDoList;
  }

  addTitle(result){
    this.toDoList.push({
      title: result.name,
      isChecked: false,
      description: result.desc,
      finishUntil: result.date
    });
  }

  getItem(id: string) {
    return this.firebasedb.object('titles/'+id);
  }

  checkOrUncheckTitle($key: string, flag: boolean){
    this.toDoList.update($key, {isChecked: flag});
  }

  removeTitle($key: string){
    this.toDoList.remove($key);
  }
}
