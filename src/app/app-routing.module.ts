import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePage,
    children: [
      {
        path: '',
        redirectTo: 'tasks',
        pathMatch: 'full'
      },
      {
        path: 'tasks',
        loadChildren: () => import('./tasks/tasks.module').then((m) => m.TasksModule),
      },
      {
        path: 'projects',
        loadChildren: () => import('./projects/projects.module').then((m) => m.ProjectsModule),
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
