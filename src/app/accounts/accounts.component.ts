import {Component, OnInit} from '@angular/core';
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
  accountById: Account | undefined;

  constructor(private accountService: AccountService) {
  }

  getAccounts(): void {
    this.accountService.getAccounts()
      .subscribe(accounts => this.accounts = accounts);
  }

  getAccountById(id: string): void {
    this.accountService.getAccount(id.toString())
      .subscribe(account => this.accountById = account);
  }

  ngOnInit(): void {
    this.getAccounts();
  }

}
