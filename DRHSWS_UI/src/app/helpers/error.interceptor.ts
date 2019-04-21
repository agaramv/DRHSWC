import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (!request.url.endsWith('login') && err.status === 401) {
                this.authService.logout();
            }

            const error = err.error.message || err.statusText;
            return throwError(error);
        }))
    }
}

// @Injectable()
// export class ApiInterceptor implements HttpInterceptor {

//     intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//         const apiReq = request.clone({ url: `http://localhost:8081/api${request.url}` });
//         return next.handle(apiReq);
//     }
// }