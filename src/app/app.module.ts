import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http'; // <— Import

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { TaskService } from './task.service'; // <-- Imported


@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- Include module in our AppModules  
    HttpModule // <— include in imports array
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
