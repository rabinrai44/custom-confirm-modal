import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmModalComponent } from './shared/components/confirm-modal/confirm-modal.component';
import { LogonSupervisorComponent } from './components/logon-supervisor/logon-supervisor.component';
import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmModalComponent,
    LogonSupervisorComponent,
    HomeComponent
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmModalComponent]
})
export class AppModule {}
