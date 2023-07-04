import { Component } from '@angular/core';
import { TestService } from '../test.service';
import { OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  constructor(private ts: TestService) {

  }
  ngOnInit(): void {
    this.ts.s1.subscribe((data: any) => {
      console.log(data)
    })

    // this.ts.s2.subscribe((data: any) => {
    //   console.log(data)
    // })

    //subject
    const subject = new Subject();
    subject.subscribe(d => console.log(`subscriber1:${d}`));  //subscribing is listening
    subject.next(10);                      // pass value 10
    subject.subscribe(d => console.log(`subscriber2:${d}`)); //returns nothing
    subject.next(30);

    //behavoir subject
    const bsubject = new BehaviorSubject<number>(2);
    bsubject.subscribe(d => console.log(`bsub subscriber1: ${d}`));
    subject.next(30)
  }
}
