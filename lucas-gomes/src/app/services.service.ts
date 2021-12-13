import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from './interfaces/comapany-iterface';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private URL = 'https://api.helena.app/test/api/Company';
  constructor(private http: HttpClient) { }

  getCompanys(){
    return this.http.get<any>(this.URL)
  }
}
