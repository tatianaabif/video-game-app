import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(
    req: HttpRequest<any>,
    next: HttpHandler
    ): Observable<HttpEvent<any>> {
        if(req.url.includes("http://localhost:3000"))
            return next.handle(req)
    req = req.clone({
        setHeaders: {
        'x-rapidapi-key': '18348f5cd7mshb5e547d890808f3p11ca03jsn92ce31d796ee',
        'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
        },
        
        setParams: {
        key: '63f67ed8bbc04722b84dc6671bc29953',
        }
    });

    return next.handle(req);
    }
}