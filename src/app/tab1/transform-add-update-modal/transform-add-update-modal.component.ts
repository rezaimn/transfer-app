import {Component, Input} from '@angular/core';
import {initializeTransfer, TransfersModel} from '../transfers/transfers.model';

@Component({
  selector: 'app-transform-add-update-modal',
  templateUrl: 'transform-add-update-modal.component.html',
  styleUrls: ['transform-add-update-modal.component.scss'],
})
export class TransformAddUpdateModalComponent {

  @Input() transfer: TransfersModel = initializeTransfer;
  @Input() modal;

  name: string;

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.transfer, 'confirm');
  }


}
