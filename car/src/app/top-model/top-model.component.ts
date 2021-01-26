import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import Swiper, { Navigation, Pagination } from 'swiper';
import { DataService } from '../data.service';

@Component({
  selector: 'app-top-model',
  templateUrl: './top-model.component.html',
  styleUrls: ['./top-model.component.css']
})
export class TopModelComponent implements OnInit {
  data: any = {}
  public results: any[];
  GProvince: any;
  GLocal: any;
  GPop: any;
  GModel: any;
  CarStock : any;

  constructor(
    private datas: DataService,
    public router: Router,
    private http: HttpClient,
  ) {
    var date = new Date();
    this.data.DayIn = (date.getFullYear() + 543).toString()
      + "-"
      + ("0" + (date.getMonth() + 1)).slice(-2)
      + "-"
      + ("0" + (date.getDate() + 2)).slice(-2);
    this.data.TimeIn = ('10:00');
    this.data.TimeOut = ('10:00');


  }

  ngOnInit(): void {
    this.http.get('./assets/js/card.json').subscribe(
      data => {
        this.results = data as any[];
        console.log(this.results[1]);
        setTimeout(() => {
          this.SetSlide();
        }, 100);
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }

  onClick(province) {
    console.log(province)
    this.http.get('./assets/js/card.json').subscribe(
      res => {
        this.GProvince = res;
        for (var i = 0; i < this.GProvince.length; i++) {
          if (this.GProvince[i].influencers.location.province_th == province) {
            this.GLocal = this.GProvince[i].influencers.location.name_th;
          }
        }
        console.log(this.GLocal)
        // this.data.inputStateIn = this.GLocal;
        const data = this.data
        this.datas.SetServiceData(data)
        setTimeout(() => {
          this.router.navigate(['car-event',
            {
              inputStateIn: this.GLocal,
              DayIn: data.DayIn,
              TimeIn: data.TimeIn,
              DayOut: data.DayOut,
              TimeOut: data.TimeOut,
              inputAge: data.inputAge,
            }])
        }, 199);
      }
    )
  }

  onClickMD(pop) {
    console.log(pop)
    this.http.get('./assets/js/card.json').subscribe(
      res => {
        this.GPop = res;
        for (var x = 0; x < this.GPop.length; x++) {
          if (this.GPop[x].cars.model == pop) {
            this.GModel = this.GPop[x].cars.model;
          }
        }
        console.log(this.GLocal)
        // this.data.inputStateIn = this.GLocal;
        const data = this.data
        this.datas.SetServiceData(data)
        setTimeout(() => {
          this.router.navigate(['car-event',
            {
              TModel: this.GModel,
              DayIn: data.DayIn,
              TimeIn: data.TimeIn,
              DayOut: data.DayOut,
              TimeOut: data.TimeOut,
              inputAge: data.inputAge,
            }])
        }, 199);
      }
    )
  }

  SetSlide() {
    Swiper.use([Navigation, Pagination]);
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 0.5,
      freeMode: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 0
        },
        460: {
          slidesPerView: 1,
          spaceBetween: 30
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 15
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        920: {
          slidesPerView: 2,
          spaceBetween: 15
        },
        1000: {
          slidesPerView: 3,
          spaceBetween: 40
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 40
        },
        1600: {
          slidesPerView: 3,
          spaceBetween: 40
        },
        1800: {
          slidesPerView: 4,
          spaceBetween: 0
        }
      }
    });
  }
}

