import { Component, OnInit } from '@angular/core';
import {AccountService} from "../services/account.service";
import {Account} from "./account";

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  selectedAccount?: Account;

  onSelect(account: Account): void {
    this.selectedAccount = account;
  }

  accounts: Account[] = [];

  constructor(private accountService: AccountService) {
  }

  getAccounts(): void {
    this.accountService.getAccounts()
      .subscribe(accounts => this.accounts = accounts);
  }

  ngOnInit(): void {
    this.getAccounts();
  }

}
