import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-search-menu',
  templateUrl: './search-menu.component.html',
  styleUrls: ['./search-menu.component.css']
})
export class SearchMenuComponent implements OnInit {

  data: any = {}

  ShowCheckOut: boolean = false;
  CheckOut: any = 'Show';
  ShowAgeCheck: boolean = false;
  AgeCheck: any = 'Show';

  day_in ;
  day_out ;


  infoAge: string = this.datas.infoAge
  public results: any[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datas: DataService,
    private http: HttpClient,

  ) {

  

  }


  ngOnInit(): void {
    this.http.get('./assets/js/card.json').subscribe(
      data => {
        this.results = data as any[];
        console.log(this.results[1]);
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
    // this.datas.SharedData.subscribe(data => {
    //   this.newName = this.datas.getServiceData();
    //   console.log(this.newName)
    //   this.data = this.newName
    // })

    this.route.params.subscribe(prams => {
      this.data = prams
      console.log(this.data.DayIn)
      this.day_in = this.data.DayIn;
      this.day_out = this.data.DayOut;
    })

  }

  // toggleCheckOut() {
  //   this.ShowCheckOut = !this.ShowCheckOut;
  //   if (this.ShowCheckOut)
  //     this.CheckOut = "Hide";
  //   else
  //     this.CheckOut = "Show";
  // }

  // toggleAgeCheck() {
  //   this.ShowAgeCheck = !this.ShowAgeCheck;
  //   if (this.ShowAgeCheck)
  //     this.AgeCheck = "Hide";
  //   else
  //     this.AgeCheck = "Show";
  // }

  Change_Date_In(event){
    console.log(event.target.value);
    this.day_out = event.target.value;
  }

  SubmitNewSearch(myForm: NgForm) {
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
    console.log(this.data)
    const data = this.data
    this.datas.SetServiceData(data)
    // this.router.navigate(['car-event',
    //   {
    //     inputStateIn: data.inputStateIn,
    //     DayIn: data.DayIn,
    //     TimeIn: data.TimeIn,
    //     inputStateOut: data.inputStateOut,
    //     DayOut: data.DayOut,
    //     TimeOut: data.TimeOut,
    //     inputAge: data.inputAge,
    //   }
    // ])
  }

  onOptionsSelected(value: string) {
    console.log("the selected value is" + value);
  }

  DIn() {
    var date = new Date(new Date().setDate(new Date().getDate()));
    return this.day_out=(date.getFullYear() + 543).toString()
    + "-"
    + ("0" + (date.getMonth() + 1)).slice(-2)
    + "-"
    + ("0" + (date.getDate())).slice(-2);
  }
  DOut(DIn) {
    if (DIn) {
      var date = new Date(this.day_in);
      this.day_out= date.setDate(date.getDate() + 1)
    }
    else {
      var date = new Date(this.data.DayIn)
      this.data.DayIn <= this.data.DayOut
      this.data.DayOut = date.setDate(date.getDate()+1)
    }
    return this.day_out=(date.getFullYear()).toString()
      + "-"
      + ("0" + (date.getMonth() + 1)).slice(-2)
      + "-"
      + ("0" + (date.getDate())).slice(-2);
  }
}

