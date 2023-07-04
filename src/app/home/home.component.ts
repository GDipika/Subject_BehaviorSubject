import { Component } from '@angular/core';
import { TestService } from '../test.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  ss: any;
  constructor(private ts: TestService) {
  }
  ngOnInit(): void {
    this.ss=this.ts.s1.subscribe((data: any) => {
      console.log(data)
    })

    // this.ts.s2.subscribe((data: any) => {
    //   console.log(data)
    // })
  }

  emit() {
    this.ss.next("second data")
  }
}
