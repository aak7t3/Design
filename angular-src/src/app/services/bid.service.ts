import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { AuthService } from './auth.service';

@Injectable()
export class BidService {

  localHttp:String = 'http://localhost:3000';

  constructor(
    private http:Http,
    private authService:AuthService
  ) { }

  getAllBids(){
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get(`${this.localHttp}/bids/all`, {headers: headers}).map(response => response.json());
  }
}