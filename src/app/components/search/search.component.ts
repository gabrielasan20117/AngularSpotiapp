import { Component, Input } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import {Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {
  
 artists: any[] = [];
  loading: boolean;
  
  constructor(private spotify: SpotifyService, private router: Router) { 
    this.loading = true;
  }
  

  buscar(termino : string){
    console.log(termino)
    this.spotify.getArtistas(termino)
        .subscribe( (data: any)  => {
          this.artists = data;
          this.loading = false;
          console.log(data[0].images[0])
        });
  }

  viewArtist(artist:any){
    let artistid;
    if(artist.type === 'artist'){
      artistid = artist.id;
      console.log(artistid);
    }
    this.router.navigate(['/artist', artistid])
  }

}
