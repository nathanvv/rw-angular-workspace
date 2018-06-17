import { Injectable, Optional } from '@angular/core';
// import { loggingServiceConfig } from './logging.service.config';
import { Severity } from './severity.enum';
@Injectable()
export class LoggingService {
    applicationName = 'Angularlicio.us';
    serviceName = 'LoggingService';
    source: string;
    severity: Severity;
    message: string;
    timestamp: Date;
    log(source: string, severity: Severity, message: string) {
        this.source = `${this.applicationName}.${source}`;
        this.severity = severity;
        this.message = message;
        this.timestamp = new Date();
        const msg = `${this.message}`;
        console.log(`${this.severity} from ${this.source}: ${msg} (${this.timestamp})`);
    }
}
