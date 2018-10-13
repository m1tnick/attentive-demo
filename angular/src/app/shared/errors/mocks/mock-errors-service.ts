import { of } from 'rxjs';
import { ErrorData } from '../model/ErrorData';

export class MockErrorsService {
	private readonly error = new ErrorData();

	public modalError() {
		return of(this.error);
	}

	public pageError() {
		return of(this.error);
	}
}
