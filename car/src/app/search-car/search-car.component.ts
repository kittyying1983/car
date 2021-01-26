import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-car',
  templateUrl: './search-car.component.html',
  styleUrls: ['./search-car.component.css']
})
export class SearchCarComponent implements OnInit {

  ShowCheckOut: boolean = false;
  CheckOut: any = 'Show';
  ShowAgeCheck: boolean = false;
  AgeCheck: any = 'Show';

  infoAge: string = this.datas.infoAge
  data: any = {}
  states:any;
  local:any;
  public results: any[];

  constructor(
    private datas: DataService,
    private http: HttpClient,
    private router: Router,

  ) {
    var date = new Date();
    this.data.DayIn = (date.getFullYear() + 543).toString()
      + "-"
      + ("0" + (date.getMonth() + 1)).slice(-2)
      + "-"
      + ("0" + (date.getDate() + 2)).slice(-2);
    // this.data.DayIn =  new Date(new Date().setDate(new Date().getDate()+2)).toISOString().slice(0, 10);
    // this.data.DayIn = new Date(new Date().setFullYear(new Date().getFullYear() + 543)).toISOString().slice(0, 10);
    this.data.TimeIn = ('10:00');
    this.data.TimeOut = ('10:00');
  }

  ngOnInit(): void {
    this.http.get('./assets/js/card.json').subscribe(
      data => {
        this.results = data as any[];
        console.log(this.results);
        for (var i = 0; i < this.results.length; i++) {
        //  console.log(this.results[i].influencers);
         if (this.results[i].influencers.location.name_th == this.local) {
           this.states.push(this.results[i])
          }
        }
        console.log(this.states);
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }

  toggleCheckOut() {
    this.ShowCheckOut = !this.ShowCheckOut;
    if (this.ShowCheckOut)
      this.CheckOut = "Hide";
    else
      this.CheckOut = "Show";
  }

  toggleAgeCheck() {
    this.ShowAgeCheck = !this.ShowAgeCheck;
    if (this.ShowAgeCheck)
      this.AgeCheck = "Hide";
    else
      this.AgeCheck = "Show";
  }

  onOptionsSelected(value: string) {
    console.log("the selected value is " + value);
  }

  onSubmit(myForm: NgForm) {
    // console.log(myForm.value);
    if (myForm.value.inputStateIn != "" &&
      myForm.value.DayIn != "" &&
      myForm.value.TimeIn != "" &&
      myForm.value.DayOut != "" &&
      myForm.value.TimeOut != "") {
      if (myForm.value.inputStateIn === myForm.value.inputStateIn) {
        let DayIn = myForm.value.DayIn;
        let TimeIn = myForm.value.TimeIn;
        let DayOut = myForm.value.DayOut;
        let TimeOut = myForm.value.TimeOut;
      } else {
        // Swal.fire('ขออภัยค่ะ', 'รหัสผ่านไม่ตรงกัน', 'error');
      }
    } else {
      // Swal.fire('ขออภัยค่ะ', 'กรุณากรอกข้อมูลที่ * ให้ครบถ้วน', 'error');
    }
    // console.log(this.data)
    const data = this.data
    this.datas.SetServiceData(data)
    this.router.navigate(['car-event',
      {
        inputStateIn: data.inputStateIn,
        DayIn: data.DayIn,
        TimeIn: data.TimeIn,
        inputStateOut: data.inputStateOut,
        DayOut: data.DayOut,
        TimeOut: data.TimeOut,
        inputAge: data.inputAge,
      }])
  }

  DIn() {
    var date = new Date(new Date().setDate(new Date().getDate()));
    return this.data.DayOut = (date.getFullYear() + 543).toString()
      + "-"
      + ("0" + (date.getMonth() + 1)).slice(-2)
      + "-"
      + ("0" + (date.getDate())).slice(-2);

  }

  DOut(DIn) {
    if (DIn) {
      var date = new Date(this.data.DayIn);
      this.data.DayOut = date.setDate(date.getDate() + 1)
    }
    else {
      var date = new Date(this.data.DayIn)
      // this.data.DayIn <= this.data.DayOut
      // this.data.DayOut = date.setDate(date.getDate()+2)
    }
    return this.data.DayOut = (date.getFullYear()).toString()
      + "-"
      + ("0" + (date.getMonth() + 1)).slice(-2)
      + "-"
      + ("0" + (date.getDate())).slice(-2);
  }

}
