import { Injectable } from "@angular/core";
import {Subject,BehaviorSubject} from 'rxjs'


@Injectable({
    providedIn:'root'
})
export class TestService{
    s1=new Subject();

    // s2=new BehaviorSubject(" behavior subject")

    constructor(){
        this.s1.next("simple subjects")
        // this.s2.next("behavior 2 subjects")
    }
}