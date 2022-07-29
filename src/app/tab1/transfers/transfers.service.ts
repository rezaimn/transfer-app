import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { of, Observable } from 'rxjs';
import {TransfersModel} from './transfers.model';


@Injectable()
export class TransfersService {
  constructor(private http: HttpClient) {}

  getTransfers(): Observable<Array<TransfersModel>> {
    return this.http
      .get<TransfersModel[]>(
        'http://localhost:3000/transfer'
      );
  }

  addTransfers( body): Observable<TransfersModel> {
    return this.http
      .post<TransfersModel>(
        `http://localhost:3000/transfer`,body
      );
  }

  updateTransfers(transferId, body): Observable<TransfersModel> {
    return this.http
      .put<TransfersModel>(
        `http://localhost:3000/transfer/${transferId}`,body
      );
  }

  removeTransfers(transferId): Observable<any> {
    return this.http
      .delete<any>(
        `http://localhost:3000/transfer/${transferId}`
      );
  }
}
