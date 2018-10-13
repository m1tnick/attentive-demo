import { Injectable, NgZone} from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { ErrorData } from '../model/ErrorData';

@Injectable()
export class ErrorsService {
	private _modalError: BehaviorSubject<ErrorData> = new BehaviorSubject(new ErrorData());

	constructor(private zone: NgZone) {
	}

	modalError() {
		return this._modalError.asObservable();
	}

	raiseError(error: ErrorData) {
		this.zone.run(() => {
			setTimeout(() => {
				this.emitModalError(error);
			}, 1);
		});
	}

	private emitModalError(error: ErrorData) {
		this._modalError.next(error);
	}
}
