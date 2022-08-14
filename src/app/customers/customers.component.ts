import {Component, OnInit} from '@angular/core';
import {Customer} from './customer';
import {CustomerService} from "../services/customer.service";

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

  constructor(private customerService: CustomerService) {
  }

  getCustomers(): void {
    this.customerService.getCustomers()
      .subscribe(customers => this.customers = customers);
  }

  ngOnInit(): void {
    this.getCustomers();
  }

}
