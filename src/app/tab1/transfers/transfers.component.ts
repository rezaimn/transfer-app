import {Component, OnInit, ViewChild} from '@angular/core';
import {Store, select} from '@ngrx/store';
import {selectTransfers} from '../../state/transfer.selectors';
import {TransfersService} from './transfers.service';
import {addTransfer, removeTransfer, retrievedTransferList, updateTransfer} from '../../state/transfer.actions';
import {initializeTransfer, TransfersModel} from './transfers.model';
import {OverlayEventDetail} from '@ionic/core/components';
import {IonModal} from '@ionic/angular';
import {stringify} from 'uuid';

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.scss'],
})
export class TransfersComponent implements OnInit {
  @ViewChild('addModal') addModal: IonModal;
  @ViewChild('updateModal') updateModal: IonModal;
  @ViewChild('removeModal') removeModal: IonModal;
  initializeTransfer: TransfersModel = initializeTransfer;
  transfers$ = this.store.pipe(select(selectTransfers));
  selectedTransfer: TransfersModel;

  constructor(
    private transfersService: TransfersService,
    private store: Store
  ) {
  }

  ngOnInit() {
    this.transfersService
      .getTransfers()
      .subscribe((transfers: TransfersModel[]) => {
        this.store.dispatch(retrievedTransferList({transfers}));
      });
  }

  onAdd(transfer) {
    this.transfersService.addTransfers(transfer).subscribe(res => {
      this.store.dispatch(addTransfer({transfer: res}));
    });
  }

  onUpdate(transferId, transfer) {
    this.transfersService.updateTransfers(transferId, transfer).subscribe(res => {
      this.store.dispatch(updateTransfer({transferId, transfer: res}));
    });
  }

  onRemove(transferId) {
    this.transfersService.removeTransfers(transferId).subscribe(res => {
      this.store.dispatch(removeTransfer({transferId}));
    });
  }

  selectTransfer(transfer, index) {
    this.selectedTransfer = transfer;
  }

  onAddModalDismissed(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      const body: any = ev.detail.data;
      this.onAdd({...body, id: this.generateUUID()});
    }
  }

  onUpdateModalDismissed(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.onUpdate(this.selectedTransfer.id, ev.detail.data);
    }
  }

  onRemoveModalDismissed(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.onRemove(this.selectedTransfer.id);
    }
  }

  generateUUID() {
    const uuidBytes = [
      0x6e, 0xc0, 0xbd, 0x7f, 0x11, 0xc0, 0x43, 0xda, 0x97, 0x5e, 0x2a, 0x8a, 0xd9, 0xeb, 0xae, 0x0b,
    ];

    return stringify(uuidBytes);
  }
}
