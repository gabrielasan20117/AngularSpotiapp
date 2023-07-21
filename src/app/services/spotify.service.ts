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

  getQuery(query : String){
    const url = `https://api.spotify.com/v1/${query}`;
    
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCWocTGdHbJ_HLCZv_P0iSFBeMbaGZh6pNG88iaof5-OXC8HB59j9o0eh0n0zzimBSuB_CfgIr1y5W6nHHbKJelAT4NwfYxL19lIunCRcFARnUu39o'
    });

    return this.http.get(url, {headers});
    
  }
  
  getNetRealeases(){
    // var valores = 'Bearer BQCi9RpvVwxtkiIl3VpTm7WhCUo5rOk0bnZzVKUzcGtgc6LlRD-xOYZ1jMm16BHuVkbdH0gbHThEWnolHBNiDFgISavdbjlJhcRt_ZqlmYKZ9DHwr7I'
    // const headers = new HttpHeaders({
    //   'Authorization': valores
    // });

    // return this.http.get('https://api.spotify.com/v1/browse/featured-playlists', {headers})
    //             .pipe( map( (data:any) => {
    //               return data['playlists'].items;
    //             }))
    
    //////Forma para simplificar el header y convertirl oen una function global////////////////
    return this.getQuery('browse/featured-playlists').pipe( map( (data:any) => { return data['playlists'].items }))
  }

  getArtista(termino : string){
    // var valores = 'Bearer BQCi9RpvVwxtkiIl3VpTm7WhCUo5rOk0bnZzVKUzcGtgc6LlRD-xOYZ1jMm16BHuVkbdH0gbHThEWnolHBNiDFgISavdbjlJhcRt_ZqlmYKZ9DHwr7I'
    // const headers = new HttpHeaders({
    //   'Authorization': valores
    // });
    // var query = 'query=artist:'+termino+'&type=artist&locale=es-419%2Ces%3Bq%3D0.9&offset=0&limit=20'
    // return this.http.get('https://api.spotify.com/v1/search?'+query, {headers})
    //         .pipe( map( (data:any) => {
    //           return data['artists'].items;
    //         }))

    return this.getQuery(`search?query=artist:${termino}&type=artist&locale=es-419%2Ces%3Bq%3D0.9&offset=0&limit=20`).pipe( map( (data:any) => { return data['artists'].items }))
  }
}