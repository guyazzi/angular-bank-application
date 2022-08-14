import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Customer } from '../customers/customer';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private customersApiUrl = 'http://localhost:8080/api/customers/';

  constructor(
    private http: HttpClient) { }

  getCustomers(): Observable <Customer[]>{
    return this.http.get<Customer[]>(this.customersApiUrl)
      .pipe(
        catchError(this.handleError<Customer[]>('getCustomers', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
