import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../services/projects.service';
import { Project } from '../projects.model';

@Component({
  selector: 'app-project-viewer',
  templateUrl: './project-viewer.component.html',
  styleUrls: ['./project-viewer.component.scss'],
})
export class ProjectViewerComponent  implements OnInit {

  pid: string = '';
  project: any;
  infoLoaded=false;
  contentView = 'overview';

  constructor(private route: ActivatedRoute, private service: ProjectsService) { }

  ngOnInit() {
    this.pid = this.route.snapshot.paramMap.get('id') || '';
    if (this.pid) {
      this.fetchProjectDetails()
    }
  }

  fetchProjectDetails() {
    this.service.getProjectById(this.pid).subscribe((res) => {
      console.warn(res);
      this.project = res;
      this.infoLoaded = true;
    })
  }

  segmentChange($event: any) {
    this.contentView = $event;
  }

}
