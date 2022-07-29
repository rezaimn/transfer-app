import { createReducer, on, Action } from '@ngrx/store';
import {retrievedTransferList} from './transfer.actions';
import {TransfersModel} from '../tab1/transfers/transfers.model';


export const initialState: ReadonlyArray<TransfersModel> = [];

export const transfersReducer = createReducer(
  initialState,
  on(retrievedTransferList, (state, { transfers }) => [...transfers])
);
