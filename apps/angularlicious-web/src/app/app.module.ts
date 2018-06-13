import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { loggingRoutes } from '@rwscope/logging';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NxModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
