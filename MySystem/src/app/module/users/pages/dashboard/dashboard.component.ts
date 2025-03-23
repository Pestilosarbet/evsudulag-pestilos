import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  salesSummary = [
    { title: 'Total Sales', value: '$12,345' },
    { title: 'Transactions', value: '120' },
    { title: 'Customers', value: '89' }
  ];

  products = [
    { name: 'Product 1', price: '$10', stock: 15 },
    { name: 'Product 2', price: '$25', stock: 30 },
    { name: 'Product 3', price: '$5', stock: 50 }
  ];

  transactions = [
    { id: 1, customer: 'John Doe', amount: '$50' },
    { id: 2, customer: 'Jane Smith', amount: '$120' },
    { id: 3, customer: 'Mike Johnson', amount: '$75' }
  ];
}
