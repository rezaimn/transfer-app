import {createReducer, on, Action} from '@ngrx/store';
import {addTransfer, removeTransfer, retrievedTransferList, updateTransfer} from './transfer.actions';
import {TransfersModel} from '../tab1/transfers/transfers.model';


export const initialState: ReadonlyArray<TransfersModel> = [];

export const transfersReducer = createReducer(
  initialState,
  on(retrievedTransferList, (state, {transfers}) => [...transfers]),
  on(addTransfer, (state, {transfer}) => [...state, transfer]),
  on(updateTransfer, (state, {transfer, transferId}) => {
    const array = [...state];
    const index = array.findIndex(t => t.id === transferId);
    if (index !== -1) {
      array[index] = transfer;
    }
    console.log(index,transfer)
    return array;
  }),
  on(removeTransfer, (state, {transferId}) => {
    const array = [...state]; // make a separate copy of the array or state
    const index = array.findIndex(transfer => transfer.id === transferId);
    if (index !== -1) {
      array.splice(index, 1);
      return array;
    }
  })
);
