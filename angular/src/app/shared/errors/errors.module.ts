import { ErrorHandler, NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ErrorsService } from './errors-service/errors.service';

import { ErrorsHandler } from './error-handlers/errors-handler';
import { HttpRequestInterceptor } from './http-request-interceptor/http-request.interceptor';
import { MatButtonModule } from '@angular/material/button';
import { ErrorModalComponent } from './error-modal-component/error-modal.component';

@NgModule({
	imports: [CommonModule, RouterModule, MatButtonModule],
	declarations: [ErrorModalComponent],
	exports: [ErrorModalComponent],
	providers: []
})
export class ErrorsModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: ErrorsModule,
			providers: [
				ErrorsService,
				{
					provide: ErrorHandler,
					useClass: ErrorsHandler
				},
				{
					provide: HTTP_INTERCEPTORS,
					useClass: HttpRequestInterceptor,
					multi: true
				}
			]
		};
	}
}
