import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Customer } from '../customers/customer';
import {Observable, of} from 'rxjs';
import {Account} from "../accounts/account";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private customersApiUrl = 'http://localhost:8085/api/customers/';

  constructor(
    private http: HttpClient) { }

  getCustomers(): Observable <Customer[]>{
    return this.http.get<Customer[]>(this.customersApiUrl)
      .pipe(
        catchError(this.handleError<Customer[]>('getCustomers', []))
      );
  }

  getCustomer(id: string): Observable<Customer> {
    const customerApiUrl = 'http://localhost:8085/api/customers/customer/';
    const params = new HttpParams()
      .set('id', id)

    return this.http.get<Customer>(customerApiUrl, {params}).pipe(
      catchError(this.handleError<Customer>(`getCustomer id=${id}`))
    );
  }

  getCustomerAccounts(id: string): Observable<Account[]> {
    const customerAccountsApiUrl = 'http://localhost:8085/api/customers/customer/accounts/';
    const params = new HttpParams()
      .set('id', id)

    return this.http.get<Account[]>(customerAccountsApiUrl, {params}).pipe(
      catchError(this.handleError<Account[]>(`getCustomerAccounts id=${id}`))
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
