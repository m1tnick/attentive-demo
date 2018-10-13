import { Component, OnInit, OnDestroy } from '@angular/core';
import { skip } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { ErrorsService } from '../errors-service/errors.service';
import { ErrorData } from '../model/ErrorData';

@Component({
	selector: 'error-modal',
	templateUrl: './error-modal.component.html',
	styleUrls: ['./error-modal.component.scss']
})
export class ErrorModalComponent implements OnInit, OnDestroy {
	error: ErrorData;
	displayError = false;
	private subscription: Subscription;

	constructor(private errorsService: ErrorsService) {}

	ngOnInit() {
		this.subscription = this.errorsService
			.modalError()
			.pipe(skip(1))
			.subscribe((error: ErrorData) => {
				this.error = error;
				this.displayError = true;
			});
	}

	closeError() {
		this.displayError = false;
		this.error = null;
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}
