import { BackendErrorMessagesComponent } from './components/backend.error.messages.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule],
  declarations: [BackendErrorMessagesComponent],
  exports:[BackendErrorMessagesComponent]
})
export class BackendErrorsModule {}
