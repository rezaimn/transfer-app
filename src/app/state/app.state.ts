import {TransfersModel} from '../tab1/transfers/transfers.model';

export interface AppState {
  transfers: ReadonlyArray<TransfersModel>;
}

