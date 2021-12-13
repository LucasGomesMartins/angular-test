import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from './interfaces/comapany-iterface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private URL = 'https://api.helena.app/test/api/Company';
  constructor(private http: HttpClient) { }

  getCompanys():Observable<Company>{
    return this.http.get<Company>(this.URL)
  }

  postCompany(company: Company):Observable<Company>{
    return this.http.post<Company>(this.URL, company)
  }

  putCompany(id:number, company:Company):Observable<Company>{
    const companyURL = `${this.URL}/${id}`
    return this.http.put<Company>(companyURL ,company)
  }

  deleteCompany(id:number):Observable<Company> {
    const URLdelete = `${this.URL}/${id}`;
    return this.http.delete<Company>(URLdelete)
  }
}
