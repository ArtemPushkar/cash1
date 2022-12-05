import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

const apiKey = 'uR0zdMbqM02Y1hWt4F8nkcqDPZghOl2w'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getcurrency(to: string, from: string, amount: string) {
    const url = `https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`
    return this.http.get(url, {headers:{"apikey": apiKey}})
  }
}
