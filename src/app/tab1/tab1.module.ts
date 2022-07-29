import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Tab1Page} from './tab1.page';
import {ExploreContainerComponentModule} from '../explore-container/explore-container.module';

import {Tab1PageRoutingModule} from './tab1-routing.module';
import {TransfersComponent} from './transfers/transfers.component';
import {TransfersService} from './transfers/transfers.service';
import {HttpClientModule} from '@angular/common/http';
import {TransformAddUpdateModalComponent} from './transform-add-update-modal/transform-add-update-modal.component';
import {RemoveTransferModalComponent} from './remove-transfer-modal/remove-transfer-modal.component';

@NgModule({
  imports: [
    HttpClientModule,
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule
  ],
  declarations: [Tab1Page, TransfersComponent, TransformAddUpdateModalComponent, RemoveTransferModalComponent],
  providers: [TransfersService]
})
export class Tab1PageModule {
}
