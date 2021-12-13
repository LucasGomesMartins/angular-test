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
    return this.http.get<Company>(this.URL)
  }

  postCompany(company: Company){
    return this.http.post<Company>(this.URL, company)
  }

  putCompany(id:number, company:Company){
    const companyURL = `${this.URL}/${id}`
    return this.http.put<Company>(companyURL ,company)
  }
}
