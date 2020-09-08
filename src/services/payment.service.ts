import { Injectable } from '@angular/core';
import { CardDetails, CardDetailsHttpResponse } from '../interfaces/card-details.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }

  public sendCardData(data: CardDetails): Observable<boolean> {
    return this.http.post<CardDetailsHttpResponse>(environment.url + 'card-details', data).pipe(
      map(response => {
        return response.success;
      })
    );
  }
}
