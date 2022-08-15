import {Component, OnInit} from '@angular/core';
import {Customer} from './customer';
import {CustomerService} from "../services/customer.service";
import {Account} from "../accounts/account";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  selectedCustomer?: Customer;

  onSelect(customer: Customer): void {
    this.selectedCustomer = customer;
  }

  customers: Customer[] = [];
  customerById: Customer | undefined;
  account: Account[] = [];

  constructor(private customerService: CustomerService) {
  }

  getCustomers(): void {
    this.customerService.getCustomers()
      .subscribe(customers => this.customers = customers);
  }

  getCustomerById(id: string): void {
    this.customerService.getCustomer(id.toString())
      .subscribe(customer => this.customerById = customer);
  }

  getCustomerAccounts(id: string): void {
    this.customerService.getCustomerAccounts(id.toString())
      .subscribe(account => this.account = account);
  }

  ngOnInit(): void {
    this.getCustomers();
  }

}
