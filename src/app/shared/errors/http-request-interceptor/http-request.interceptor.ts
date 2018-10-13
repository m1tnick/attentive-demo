import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		if (req.method === 'POST' || req.method === 'PUT') {
			const request = req.clone({
				setHeaders: {
					'Content-Type': 'application/json; charset=utf-8'
				}
			});
			return next.handle(request);
		} else if (req.method === 'GET') {
			return next.handle(req).pipe(retry(2));
		}

		return next.handle(req);
	}
}
