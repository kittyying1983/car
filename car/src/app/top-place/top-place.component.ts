import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-top-place',
  templateUrl: './top-place.component.html',
  styleUrls: ['./top-place.component.css']
})
export class TopPlaceComponent implements OnInit {
  public results: any[];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get('./assets/js/topmodel.json').subscribe(
      data => {
        this.results = data as any[];
        console.log(this.results[1]);

      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }
 
}
