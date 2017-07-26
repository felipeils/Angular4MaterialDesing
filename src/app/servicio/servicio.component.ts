import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';


@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent implements OnInit {


  constructor(private http: Http) {


   }
  ciudad = '';
  cityName = '';
  cityHumid = '';
  cityWindSpeed = '';
   searchCity()
   {
     this.http.get('http://api.openweathermap.org/data/2.5/weather?APPID=f541a2d4be3b4e1c373353698f63d555&q=' + this.ciudad)
     .subscribe((res: Response) =>

      {
       const weatherCity = res.json();
       console.log(weatherCity);
       this.cityHumid = weatherCity.main.humidity + '°C';
       this.cityWindSpeed = weatherCity.wind.speed + 'Km/h';
      }
     );
   }
  ngOnInit() {

  }

}