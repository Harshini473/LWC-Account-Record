import { LightningElement,wire } from 'lwc';
import getAccounts from'@salesforce/apex/AccountController.getAccounts';

export default class Account_records extends LightningElement {
  accounts;
  error;

  @wire(getAccounts)
  wiredAccounts({error,data}){
    if(data){
      this.accounts = data;
      this.error = undefined;
     }else if(error){
      this.error = error;
      this.accounts = undefined;
    }

  }
}