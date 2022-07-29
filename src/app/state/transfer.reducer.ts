import { createReducer, on, Action } from '@ngrx/store';
import {addTransfer, removeTransfer, retrievedTransferList, updateTransfer} from './transfer.actions';
import {TransfersModel} from '../tab1/transfers/transfers.model';


export const initialState: ReadonlyArray<TransfersModel> = [];

export const transfersReducer = createReducer(
  initialState,
  on(retrievedTransferList, (state, { transfers }) => [...transfers]),
  on(addTransfer, (state, { transfer }) => [...state,transfer]),
  on(updateTransfer, (state, { transfer, transferId }) => state),
  on(removeTransfer, (state, { transferId }) => [...state])
);
