import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Company } from '../interfaces/comapany-iterface';

@Component({
  selector: 'app-alter-company',
  templateUrl: './alter-company.component.html',
  styleUrls: ['./alter-company.component.scss']
})
export class AlterCompanyComponent {
  constructor(
    public dialogRef: MatDialogRef<AlterCompanyComponent>,
    @Inject(MAT_DIALOG_DATA) public company: Company,
  ) {}

  cancel(): void {
    this.dialogRef.close();
  }

}
