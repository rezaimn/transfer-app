import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-remove-transfer-modal',
  templateUrl: 'remove-transfer-modal.component.html',
  styleUrls: ['remove-transfer-modal.component.scss'],
})
export class RemoveTransferModalComponent {

  @Input() modal;

  message = 'Are you sure? You want to Delete this transfer?';
  name: string;

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(true, 'confirm');
  }


}
