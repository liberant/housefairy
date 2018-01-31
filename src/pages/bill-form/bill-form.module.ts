import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BillFormPage } from './bill-form';

@NgModule({
  declarations: [
    BillFormPage,
  ],
  imports: [
    IonicPageModule.forChild(BillFormPage),
  ],
})
export class BillFormPageModule {}
