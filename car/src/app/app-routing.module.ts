import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchCarComponent } from './search-car/search-car.component';
import { TopPlaceComponent } from './top-place/top-place.component';
import { SearchMenuComponent } from './search-menu/search-menu.component';
import { TopModelComponent } from './top-model/top-model.component';
import { CarContentComponent } from './car-content/car-content.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { HomeComponent } from './home/home.component';
import { CarEventComponent } from './car-event/car-event.component';



const routes: Routes = [
  
  { path: "home",component:HomeComponent},
  { path: "car-event", component:CarEventComponent},
  { path: "search-car", component:SearchCarComponent},
  { path: "top-place", component:TopPlaceComponent},
  { path: "search-menu",  component:SearchMenuComponent},
  { path: "top-model", component:TopModelComponent},
  { path: "car-content", component:CarContentComponent},
  { path: "car-detail", component:CarDetailComponent},
  { path: "", component:HomeComponent},
  { path: '**',redirectTo:'home',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes , {
    onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
