import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  tabClick(tab: any) {
    let link: string;
    if(tab.index === 0){
      link = "home"
    }else {
      link = "add-empresa"
    }
    this.router.navigate([link])
    console.log(tab.index, link);
  }

}
