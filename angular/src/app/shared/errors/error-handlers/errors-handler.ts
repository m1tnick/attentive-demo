import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorsService } from '../errors-service/errors.service';
import { ErrorData } from '../model/ErrorData';

@Injectable()
export class ErrorsHandler implements ErrorHandler {
	constructor(private injector: Injector) {}

	handleError(error: Error | HttpErrorResponse) {
		console.error(error);

		const errorsService = this.injector.get(ErrorsService);
		let formatedError = new ErrorData();

		formatedError.message = error.message;
		formatedError.title = 'Something went wrong';
		formatedError.buttonText = 'Go back';
		errorsService.raiseError(formatedError);
	}
}
