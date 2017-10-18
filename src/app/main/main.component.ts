import { Component, OnInit } from '@angular/core';
import { TaskService } from './../task.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  score: Number;
  userExist = false;

  taskobject = {
    username: ''
  }

  constructor(private _taskService: TaskService) {
   }


 
   onSubmit() {
     this._taskService.retrieveTasks(this.taskobject.username, (repo, follow) => {
       this.score = repo + follow;
       this.userExist = true;
     })
     console.log("hi", this.taskobject.username)
   }

  ngOnInit() {
  }

 

}
