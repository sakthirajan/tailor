import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Home Page';
  shopinfo;
  shoppopup;
  display: boolean = false;
  term;
  contactpop = false;

  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.getShopDetails();
  }

  onRowId(obj) {
    console.log(obj)
    this.shoppopup = obj;
    this.display = true;
  }
  getShopDetails() {
    this.service.shopDetails().subscribe(res => this.shopinfo = res)
  }

  onSearch(search) {
    this.term = search;
  }

  contactUs() {
    this.display = false;
    this.contactpop = true;
  }

}
