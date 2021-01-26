import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-car-event',
	templateUrl: './car-event.component.html',
	styleUrls: ['./car-event.component.css']
})
export class CarEventComponent implements OnInit {



constructor(

) { }

ngOnInit(): void {

}
	
// openNav() {
// 	document.getElementById("mySidenav").style.width = "320px";
// 	document.getElementById("main").style.marginLeft = "320px";
// 	document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
// }

// closeNav() {
// 	document.getElementById("mySidenav").style.width = "0";
// 	document.getElementById("main").style.marginLeft = "0";
// 	document.body.style.backgroundColor = "white";
// }
openNav() {
	document.getElementById("mySidenav").style.width = "320px";
	document.getElementById("main").style.marginLeft = "320px";
}

closeNav() {
	document.getElementById("mySidenav").style.width = "0";
	document.getElementById("main").style.marginLeft = "0";
}

}
