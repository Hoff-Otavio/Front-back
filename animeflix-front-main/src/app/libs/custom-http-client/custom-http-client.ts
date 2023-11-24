import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, map, throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class CustomHttpClient {
  baseUrl = "http://localhost:4200/";

  httpOptionJson = new HttpHeaders({
    "Content-Type": "application/json"
  });

  constructor(private http: HttpClient) {}

  /*
  * @param url: string
  */
  get<T>(url: string, params?:any) {
    return this.http.get<T>(this.baseUrl + url, { headers: this.httpOptionJson, observe: 'response' , params })
    .pipe(
      map((res: HttpResponse<T>) => res.body),
      catchError(this.handleError)
    )
  }

  post<T>(url: string, body: any) {
    return this.http.post<T>(this.baseUrl + url, body, { headers: this.httpOptionJson, observe: 'response' })
    .pipe(
      map((res: HttpResponse<T>) => res.body),
      catchError(this.handleError)
    )
  }

  put<T>(url: string, body: any) {
    return this.http.put<T>(this.baseUrl + url, body, { headers: this.httpOptionJson, observe: 'response' })
    .pipe(
      map((res: HttpResponse<T>) => res.body),
      catchError(this.handleError)
    )
  }

  patch<T>(url: string, body: any) {
    return this.http.patch<T>(this.baseUrl + url, body, { headers: this.httpOptionJson, observe: 'response' })
    .pipe(
      map((res: HttpResponse<T>) => res.body),
      catchError(this.handleError)
    )
  }

  delete<T>(url: string, params?:any) {
    return this.http.delete<T>(this.baseUrl + url, { headers: this.httpOptionJson, observe: 'response', params })
    .pipe(
      map((res: HttpResponse<T>) => res.body),
      catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong.
    console.error(
      `Backend returned code ${error.status}, body was: `, error.error);
  }
  // Return an observable with a user-facing error message.
   return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
