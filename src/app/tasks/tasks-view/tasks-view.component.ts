import { Component, OnInit } from '@angular/core';
import { TasksService } from '../service/tasks.service';
import { TaskInt } from '../tasks.model';

@Component({
  selector: 'app-tasks-view',
  templateUrl: './tasks-view.component.html',
  styleUrls: ['./tasks-view.component.scss'],
})
export class TasksViewComponent  implements OnInit {

  public tasks: TaskInt[] = [];

  constructor(private service: TasksService) { }

  ngOnInit() {
    this.getAllTasks()
  }

  private getAllTasks() {
    this.service.getAllTasks().subscribe((res) => {
      this.tasks = res;
    })
  }

}
