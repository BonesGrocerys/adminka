import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { API_URL } from './API';
import { IOperationResult } from './Interfaces/OperationResult';
import { IMusicians } from './Interfaces/Musician';
import { OperationCode } from './Interfaces/OperationResult';
import { ITrack } from './Interfaces/Track';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}

  getMusicians(searchText: string): Observable<IOperationResult<IMusicians[]>> {
    const url = `${API_URL}/Musician/get-all-musician?SearchText=${searchText}`;
    return this.http.get<IMusicians[]>(url).pipe(
      tap((response: any) => console.log(response)),
      map((response) => ({
        success: true,
        message: 'Musicians loaded successfully',
        operationCode: OperationCode.Ok,
        result: response,
      })),
      catchError((error) => {
        return of({
          success: false,
          message: 'Failed to load musicians',
          operationCode: OperationCode.UnhandledError,
          errorCode: error.status,
        });
      })
    );
  }

  DeleteMusician(id: number): Observable<IOperationResult<boolean>> {
    const url = `${API_URL}/Musician/delete-musician?musicianId=${id}`;
    return this.http.delete(url).pipe(
      tap((response: any) => console.log(response)),
      map((response) => ({
        success: true,
        message: 'successfully',
        operationCode: OperationCode.Ok,
        result: response,
      })),
      catchError((error) => {
        return of({
          success: false,
          message: 'Failed',
          operationCode: OperationCode.UnhandledError,
          errorCode: error.status,
        });
      })
    );
  }

  getTracks(searchText: string): Observable<IOperationResult<ITrack[]>> {
    const url = `${API_URL}/Tracks/get-all-tracks?searchText=${searchText}`;
    return this.http.get<ITrack[]>(url).pipe(
      tap((response: any) => console.log(response)),
      map((response) => ({
        success: true,
        message: 'Musicians loaded successfully',
        operationCode: OperationCode.Ok,
        result: response,
      })),
      catchError((error) => {
        return of({
          success: false,
          message: 'Failed to load musicians',
          operationCode: OperationCode.UnhandledError,
          errorCode: error.status,
        });
      })
    );
  }

  DeleteTrack(id: number): Observable<IOperationResult<boolean>> {
    const url = `${API_URL}/Tracks/delete-track?trackId=${id}`;
    return this.http.delete(url).pipe(
      tap((response: any) => console.log(response)),
      map((response) => ({
        success: true,
        message: 'successfully',
        operationCode: OperationCode.Ok,
        result: response,
      })),
      catchError((error) => {
        return of({
          success: false,
          message: 'Failed',
          operationCode: OperationCode.UnhandledError,
          errorCode: error.status,
        });
      })
    );
  }
}
