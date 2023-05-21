import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SERVICE_URL } from 'src/app/app.constants';
import { Project } from '../projects.model';
import { TaskInt } from 'src/app/tasks/tasks.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient) { }

  getAllProjects(): Observable<Project[]> {
    return <Observable<Project[]>>this.http.get(SERVICE_URL + 'getAllProjects')
  }

  getTasksById(pid: string): Observable<TaskInt[]> {
    return <Observable<TaskInt[]>>this.http.get(SERVICE_URL + `getTasksByPid?pid=${pid}`)
  }

  getProjectById(pid: string): Observable<Project> {
    return <Observable<Project>>this.http.get(SERVICE_URL + `getProjectById?pid=${pid}`)
  }

}
