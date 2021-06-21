import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TheTaskComponent } from './components/the-task/the-task.component';

const routes: Routes = [

  { path: '', component: TheTaskComponent, runGuardsAndResolvers: "always" },

];

@NgModule({
  imports: [
      RouterModule.forRoot(routes, {
      })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
