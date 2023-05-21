import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SERVICE_URL } from 'src/app/app.constants';
import { TaskInt } from 'src/app/tasks/tasks.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http: HttpClient) { }

  getAllTasks(): Observable<TaskInt[]> {
    return <Observable<TaskInt[]>>this.http.get(SERVICE_URL + 'getAllTasks')
  }

}
