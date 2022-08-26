import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Account} from "../accounts/account";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private accountsApiUrl = 'http://localhost:8085/api/accounts/';

  constructor(
    private http: HttpClient) {
  }

  getAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(this.accountsApiUrl)
      .pipe(
        catchError(this.handleError<Account[]>('getAccounts', []))
      );
  }

  getAccount(id: string): Observable<Account> {
    const accountApiUrl = 'http://localhost:8085/api/accounts/account/';
    const params = new HttpParams()
      .set('id', id)

    return this.http.get<Account>(accountApiUrl, {params}).pipe(
      catchError(this.handleError<Account>(`getAccount id=${id}`))
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
