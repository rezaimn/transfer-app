export interface TransfersModel {
  id: string;
  accountHolder: string;
  iban: string;
  amount: number;
  date: string;
  note: string;
}

export const initializeTransfer: TransfersModel = {
  id: '',
  accountHolder: '',
  iban: '',
  amount: 0,
  date: '',
  note: ''
};
