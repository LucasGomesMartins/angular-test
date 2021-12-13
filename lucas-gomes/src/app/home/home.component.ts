import { Component, OnInit } from '@angular/core';
import { Company } from '../interfaces/comapany-iterface';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public companys: any;

  constructor(private service: ServicesService) { }

  ngOnInit(): void {
    this.getCompany() 
  }

  getCompany(){
    this.service.getCompanys().subscribe(
      //@ts-ignore
      (result) => {
        this.companys = result
      },
      (err) => {
        console.log(err)
      }
    )
  }

  teste(){
    console.log(this.companys)
  }



}
