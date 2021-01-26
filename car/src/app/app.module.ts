import { BrowserModule } from '@angular/platform-browser';
import { AngularMaterialModule } from './angular-material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DpDatePickerModule } from 'ng2-date-picker';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchCarComponent } from './search-car/search-car.component';
import { TopPlaceComponent } from './top-place/top-place.component';
import { SearchMenuComponent } from './search-menu/search-menu.component';
import { TopModelComponent } from './top-model/top-model.component';
import { CarContentComponent } from './car-content/car-content.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { HomeComponent } from './home/home.component';
import { CarEventComponent } from './car-event/car-event.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { CategoryCarComponent } from './category-car/category-car.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchCarComponent,
    TopPlaceComponent,
    SearchMenuComponent,
    TopModelComponent ,
    CarContentComponent,
    CarDetailComponent,
    HomeComponent,
    CarEventComponent,
    MenuBarComponent,
    CategoryCarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    DpDatePickerModule,
    IvyCarouselModule,
    LazyLoadImageModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    NgxMatSelectSearchModule,
    MatSelectModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
  ],
  providers: [ ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }
