import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { NgbDropdownConfig, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'cash1';
  from = "";
  to = "";
  fromAmount = "";
  toAmount = "";
  currencyList = ['RUB', 'EUR'];
  currentCurrency = 'RUB';
  toCurrency = 'RUB';

  constructor(private apiService: ApiService) {}

  getCurrency() {
    console.log(this.fromAmount);
    this.apiService.getcurrency(this.toCurrency, this.currentCurrency, this.fromAmount).subscribe((res: any) => {
      
      
      console.log(this.currentCurrency);
      this.toAmount = res.result
    })
  }
}
