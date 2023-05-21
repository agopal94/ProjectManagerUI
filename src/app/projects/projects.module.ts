import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsViewComponent } from './projects-view/projects-view.component';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ProjectsService } from './services/projects.service';
import { ProjectViewerComponent } from './project-viewer/project-viewer.component';



@NgModule({
  declarations: [ProjectsViewComponent, ProjectViewerComponent],
  providers: [ProjectsService],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: ProjectsViewComponent }, {path :'projects/:id', component: ProjectViewerComponent}])
  ],
  exports: [ProjectsViewComponent, ProjectViewerComponent]
})
export class ProjectsModule { }
