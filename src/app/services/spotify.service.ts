import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) {
    console.log('Spoty service')
   }
  
  getNetRealeases(){
  var valores = 'Bearer BQDZMk3cCnTn1c0WUBqZj-uTSWvj6tdC8JIMWs47sy15zgqf1Z5L4KPu-1tQE1Hin5qQ1HqWFNZJK2fqmG8Ib75u9sm1U1JP27UMB1TVrvs_WP5r28h_'
    const headers = new HttpHeaders({
      'Authorization': valores
    });

    return this.http.get('https://api.spotify.com/v1/browse/featured-playlists', {headers})
                .pipe( map( (data: any) => {
                  return data['playlists'].items;
                }))
  }

  getArtista(termino : string){
    var valores = 'Bearer BQAZiFFXBqzNLnTUbwZoNJLsXft1xB051IDnpTUWBhUWtBVLxhgNFDc48CAFeU0RkLot05P7SWHIOzPePbQ92b9L0OVnHME4WRTHSWtQCJcFzWTldBa4'
    const headers = new HttpHeaders({
      'Authorization': valores
    });
    var query = 'query=artist:'+termino+'&type=artist&locale=es-419%2Ces%3Bq%3D0.9&offset=0&limit=20'
    return this.http.get('https://api.spotify.com/v1/search?'+query, {headers});
  }
}