import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url ='https://geoportal.rtsd.mi.th/arcgis/rest/services/Hosted/Airport/FeatureServer/1/query?f=json&where=1%3D1&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100&resultOffset=0&resultRecordCount=2000';

  infoAge: string = 'บริษัทรถเช่าจะเรียกเก็บค่าธรรมเนียมผู้ขับอายุน้อยกว่า 30 หรือเกิน 65 ปีด้วย กรุณาตรวจสอบข้อมูลเพิ่มเติมและเงื่อนไขด้วย';


  constructor(
    private http: HttpClient,
  ) {
    
  }

  getState(){
    return this.http.get(this.url);
  }


  private ServiceData = new BehaviorSubject({})
  SharedData = this.ServiceData.asObservable();

  SetServiceData(data){
    console.log(data)
    this.ServiceData.next(data);
  }

  getServiceData(){
    console.log(this.ServiceData);
    return this.ServiceData;
  }
}
