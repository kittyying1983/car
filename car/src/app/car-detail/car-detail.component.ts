import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  public results: any[];
  titlereview: string = 'Rewiew';
  states: any = [];
  data: any = {};
  local: any;
  mo: any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {
    this.route.params.subscribe(prams => {

      this.data = prams
      console.log(this.data)
      this.local = this.data.inputStateIn;
      this.mo = this.data.TModel
    });
  }

  ngOnInit(): void {
    this.http.get('./assets/js/card.json').subscribe(
      data => {
        this.results = data as any[];
        console.log(this.results);
        console.log(this.local)
        for (var i = 0; i < this.results.length; i++) {
          // console.log(this.results[i].influencers);
          if (this.results[i].influencers.location.name_th == this.local) {
            this.states.push(this.results[i])
          }
          if (this.results[i].cars.model == this.mo)
            this.states.push(this.results[i])
        }
        console.log(this.states);
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }
}
