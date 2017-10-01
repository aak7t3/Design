import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers:any;

  constructor(
    private customerService:CustomerService
  ) { }

  ngOnInit() {
    this.customerService.getAllCustomers().subscribe((customers) => {
      this.customers = customers.customers;
    });
  }
}