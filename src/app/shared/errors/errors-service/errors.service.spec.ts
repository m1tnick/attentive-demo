import { TestBed, inject } from '@angular/core/testing';

import { ErrorsService } from './errors.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('ErrorsService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [RouterTestingModule],
			providers: [ErrorsService]
		});
	});

	it('should be created', inject([ErrorsService], (service: ErrorsService) => {
		expect(service).toBeTruthy();
	}));
});
