import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; // <— Imported

@Injectable()
export class TaskService {
  

  constructor(private _http: Http) { }

  retrieveTasks(id, callone){
    this._http.get(`https://api.github.com/users/${id}`).subscribe(
      (response) => {
        callone(response.json().public_repos, response.json().followers)
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
