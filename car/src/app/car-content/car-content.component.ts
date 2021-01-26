import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-car-content',
  templateUrl: './car-content.component.html',
  styleUrls: ['./car-content.component.css']
})
export class CarContentComponent implements OnInit {
  titlecar : string = 'หรือเทียบเท่า';
  titlereview : string = 'Review';
  public results:any[];

  public features: any[];


  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get('./assets/js/carbrand.json').subscribe(
      data => {
        this.results = data as any [];
         console.log(this.results[1]);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
    
  }
  

  // transform(items: any[], searchText: string): any[] {
  //   if(!items) return [];
  //   if(!searchText) return items;
  //   searchText = searchText.toLowerCase();
  //   return items.filter(it => {
  //       return it.toLowerCase().includes(searchText);
  //   });
  
  // }
 

}
