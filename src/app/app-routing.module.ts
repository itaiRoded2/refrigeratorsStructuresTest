import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigOptionsComponent } from './components/config-options/config-options.component';
import { TheTaskComponent } from './components/the-task/the-task.component';

const routes: Routes = [

  { path: '', component: TheTaskComponent, runGuardsAndResolvers: "always" },
  { path: 'configurations', component: ConfigOptionsComponent, runGuardsAndResolvers: "always" },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
