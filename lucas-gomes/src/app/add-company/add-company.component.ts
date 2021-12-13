import { Component, OnInit } from '@angular/core';
import { Company } from '../interfaces/comapany-iterface';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss']
})
export class AddCompanyComponent implements OnInit {

  constructor(private service: ServicesService) { }

  ngOnInit(): void {
  }

  onSubmit(company:Company){
    company.active = true;
    
    this.service.postCompany(company).subscribe(
      () => console.log(company),
      (err) => console.log(err)
    )
  }

}
