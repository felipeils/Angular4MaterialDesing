import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-google-map-api-direction',
  templateUrl: './google-map-api-direction.component.html',
  styleUrls: ['./google-map-api-direction.component.css']
})
export class GoogleMapApiDirectionComponent implements OnInit {

  constructor(private http: Http) { }

  tiempo = '';
  distancia = '';
  origen = '';
  destino = '';
  apiKey = 'AIzaSyANtmiTDH0WGE0-mVut37DQRG6hUe6MISY';
   searchDestino()
   {
     this.http.get('https://maps.googleapis.com/maps/api/directions/json?origin='
     + this.origen + '&destination=' + this.destino + '&key=' + this.apiKey)
     .subscribe((res: Response) =>

      {
       const googleMapDirection = res.json();
       console.log(googleMapDirection);
      this.distancia = googleMapDirection.routes[0].legs[0].distance.text;
      this.tiempo = googleMapDirection.routes[0].legs[0].duration.text;
      }
     );
   }

  ngOnInit() {
  }

}

