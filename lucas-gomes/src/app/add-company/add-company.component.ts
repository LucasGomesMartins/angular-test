import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';
import { Company } from '../interfaces/comapany-iterface';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss']
})
export class AddCompanyComponent implements OnInit {

  constructor(private service: ServicesService, private rout: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  postCompany(company: Company){
    company.active = true;
    
    this.service.postCompany(company).subscribe(
      () => {
        console.log(company)
        this.rout.navigate(['home'])
      },
      (err) => {
        this.dialog.open(ErrorDialogComponent, {width: '300px'})
        console.log(err)
      }
    )
  }

}
