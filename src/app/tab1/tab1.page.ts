import { Component, OnInit } from '@angular/core';
import { format } from 'date-fns';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  public currentTime !: string;

  constructor() {}

  ngOnInit(): void {

  }

  ionViewDidEnter() {
    setInterval(() => {
      this.currentTime = format(new Date(), 'HH:mm');
    }, 1000);
  }

}
