import {createAction, props} from '@ngrx/store';
import {TransfersModel} from '../tab1/transfers/transfers.model';

export const addTransfer = createAction(
  '[Transfer List] Add Transfer',
  props<{transfer: TransfersModel }>()
);

export const updateTransfer = createAction(
  '[Transfer List] Add Transfer',
  props<{ transferId: string; transfer: TransfersModel }>()
);

export const removeTransfer = createAction(
  '[Transfer Collection] Remove Transfer',
  props<{ transferId: string }>()
);

export const retrievedTransferList = createAction(
  '[Transfer List/API] Retrieve Transfers Success',
  props<{ transfers: TransfersModel[] }>()
);
