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
      'Authorization': 'Bearer BQBkmk8Ma0i77DxclmdCBKdKgf_CtV4u4DYiAL3Pfa7H-RRISFFYNADvbYQsA-E7qlSN1PaQT8JZewIh3IaCNxMEI91oIAULUz0xkNo1lyXOe6ktx5s'
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

  getArtistas(termino : string){
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

  getArtista(id: string){
    return this.getQuery(`artists/${id}`)
  }

  getTopTracks(id: string){
    return this.getQuery(`artists/${id}/top-tracks?market=US`).pipe( map( (data:any) => { return data['tracks'] }))
  }
}
