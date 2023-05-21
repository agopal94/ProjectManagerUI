import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksViewComponent } from './tasks-view/tasks-view.component';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TasksService } from './service/tasks.service';



@NgModule({
  declarations: [TasksViewComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: TasksViewComponent }])
  ],
  providers: [TasksService]
})
export class TasksModule { }
