import { BackendObjectInterface } from './../../../types/Backend.errorObject.interface';
import { Component, Input, OnInit } from '@angular/core';
import { BackendErrorsInterface } from 'src/app/shared/types/backend.errors.interface';

@Component({
  selector: 'bc-backend-error-messages',
  templateUrl: './backend.error.messages.component.html',
})
export class BackendErrorMessagesComponent implements OnInit {
  @Input('backendErrors') backendErrorsProps: BackendObjectInterface;

  errorMessages: string[];

  ngOnInit(): void {

    console.log(this.backendErrorsProps.errors)
    this.errorMessages = Object.keys(this.backendErrorsProps.errors).map(
      (name: string) => {
        const messages = this.backendErrorsProps.errors[name].join(' ')
        return `${name} ${messages}`
      }
    )
    console.log(this.errorMessages)
  }
}
