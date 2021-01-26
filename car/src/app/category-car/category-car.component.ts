import { Component, OnInit } from '@angular/core';
import Swiper, { Navigation, Pagination } from 'swiper';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-category-car',
  templateUrl: './category-car.component.html',
  styleUrls: ['./category-car.component.css']
})
export class CategoryCarComponent implements OnInit {
  public results: any[];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get('./assets/js/carcategory.json').subscribe(
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
          slidesPerView: 2,
          spaceBetween: 30
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 15
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10
        },
        920: {
          slidesPerView: 3,
          spaceBetween: 15
        },
        1000: {
          slidesPerView: 4,
          spaceBetween: 20
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 20
        },
        1600: {
          slidesPerView: 5,
          spaceBetween: 5
        },
        1800: {
          slidesPerView: 5,
          spaceBetween: 0
        }
      }

    });
  }
}
