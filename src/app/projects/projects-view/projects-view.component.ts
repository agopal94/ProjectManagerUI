import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../services/projects.service';
import { Project } from '../projects.model';
import { TaskInt } from 'src/app/tasks/tasks.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects-view',
  templateUrl: './projects-view.component.html',
  styleUrls: ['./projects-view.component.scss'],
})
export class ProjectsViewComponent  implements OnInit {

  public projects: Project[] = [];

  constructor(private service: ProjectsService, private router: Router) { }

  ngOnInit() {
    this.getAllProjects();
  }

  getAllProjects() {
    this.service.getAllProjects().subscribe((res: Project[]) => {
      let obsList: Observable<TaskInt[]>[] = [];
      res.forEach((row: Project) => {
        obsList.push(this.service.getTasksById(row.pid));
       /*  .subscribe((res: TaskInt[]) => {
          row.tasks = res;
        }) */
      })
      this.projects = res;
    })
  }

  loadProject($event: any, pid: string) {
    console.warn(pid);
    this.router.navigate(['/projects', pid])
  }

}
