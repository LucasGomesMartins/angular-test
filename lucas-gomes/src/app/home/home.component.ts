import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlterCompanyComponent } from '../alter-company/alter-company.component';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';
import { Company } from '../interfaces/comapany-iterface';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public companys: any;
  public loading = true;

  constructor(private service: ServicesService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getCompany() 
  }

  getCompany(){
    this.service.getCompanys().subscribe(
      (result) => {
        this.loading = false
        this.companys = result
      },
      (err) => {
        this.loading = false
        this.dialog.open(ErrorDialogComponent, {width: '300px'})
        console.log(err)
      }
    )
  }

  updateCopany(company:Company){
    const dialogRef = this.dialog.open(AlterCompanyComponent, {
      width: '400px',
      data: company,
    });

    dialogRef.afterClosed().subscribe(
      (result) => {
        if(result){
          this.loading = true
          result.active = true;
          this.service.putCompany(company.id, result).subscribe(
            () => {
              this.getCompany()
          },
          (err) => {
            this.loading = false
            this.dialog.open(ErrorDialogComponent, {width: '300px'})
            console.log(err)
          })
        }
      });
  }

  teste(){
    console.log(this.companys)
  }



}
