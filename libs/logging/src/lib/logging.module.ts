import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';

import { LoggingService } from './logging.service';

export const loggingRoutes: Route[] = [];
@NgModule({
  imports: [CommonModule, RouterModule],
  providers: [ LoggingService]
})
export class LoggingModule {}
