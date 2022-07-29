import { createSelector } from '@ngrx/store';
import {TransfersModel} from '../tab1/transfers/transfers.model';
import {AppState} from './app.state';

export const selectTransfers = createSelector(
  (state: AppState) => state.transfers,
  (transfers: Array<TransfersModel>) => transfers
);
