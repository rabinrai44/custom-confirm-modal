import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LogonSupervisorComponent } from './components/logon-supervisor/logon-supervisor.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'suppervisor', component: LogonSupervisorComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
