import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { AuthService } from './auth.service';

@Injectable()
export class MaterialService {

  localHttp:String = 'http://localhost:3000';

  constructor(
    private http:Http,
    private authService:AuthService
  ) { }

  getAllMaterials(){
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get(`${this.localHttp}/materials/all`, {headers: headers}).map(response => response.json());
  }

  createMaterial(newMaterial){
    this.authService.loadToken();
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Authorization',this.authService.authToken);
    return this.http.post(`${this.localHttp}/materials/new`, JSON.stringify(newMaterial), {headers: headers}).map(response => response.json());
  }
}