import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {



  constructor(
    private datas: DataService,
  ) { }

  ngOnInit(): void {
    var toggler = document.getElementsByClassName("fa-chevron-right");
    var i;

    for (i = 0; i < toggler.length; i++) {
      toggler[i].addEventListener("click", function () {
        console.log(i)
        this.parentElement.querySelector("span").classList.toggle("active");
        this.classList.toggle("fa-chevron-down");
      });
    }
  }
}
