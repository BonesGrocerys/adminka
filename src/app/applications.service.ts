import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMusicians } from './Interfaces/Musician';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { IOperationResult, OperationCode } from './Interfaces/OperationResult';
import { API_URL } from './API';

@Injectable({
  providedIn: 'root',
})
export class ApplicationsService {
  constructor(private http: HttpClient) {}

  GetApplications(): Observable<IOperationResult<IMusicians[]>> {
    const url = `${API_URL}/Musician/get-all-waiting-musician`;
    return this.http.get<IMusicians[]>(url).pipe(
      tap((response: any) => console.log(response)),
      map((response) => ({
        success: true,
        message: 'Applications loaded successfully',
        operationCode: OperationCode.Ok,
        result: response,
      })),
      catchError((error) => {
        return of({
          success: false,
          message: 'Failed to load applications',
          operationCode: OperationCode.UnhandledError,
          errorCode: error.status,
        });
      })
    );
  }

  ApplyApplication(id: number): Observable<IOperationResult<boolean>> {
    const url = `${API_URL}/Musician/apply-application-to-musician?musicianId=${id}`;
    return this.http.get(url).pipe(
      tap((response: any) => console.log(response)),
      map((response) => ({
        success: true,
        message: 'SUCCESS',
        operationCode: OperationCode.Ok,
        result: response,
      })),
      catchError((error) => {
        return of({
          success: false,
          message: 'FAILED',
          operationCode: OperationCode.UnhandledError,
          errorCode: error.status,
        });
      })
    );
  }

  RejectApplication(id: number): Observable<IOperationResult<boolean>> {
    const url = `${API_URL}/Musician/disagree-application-to-musician?musicianId=${id}`;
    return this.http.get(url).pipe(
      tap((response: any) => console.log(response)),
      map((response) => ({
        success: true,
        message: 'SUCCESS',
        operationCode: OperationCode.Ok,
        result: response,
      })),
      catchError((error) => {
        return of({
          success: false,
          message: 'FAILED',
          operationCode: OperationCode.UnhandledError,
          errorCode: error.status,
        });
      })
    );
  }
}
