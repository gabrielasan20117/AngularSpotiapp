import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: [
  ]
})
export class ArtistComponent {

  artista: any = {};
  tracks: any = [];

  loading: boolean;

  constructor(private router: ActivatedRoute,
              private service: SpotifyService) {
      this.loading = true;
      this.router.params.subscribe( params => {
        this.get_artist(params['id']);
        this.get_top_tracks(params['id']);
      });
   }

  get_artist( id: string){
    this.loading = true;
    this.service.getArtista(id)
                .subscribe( artista => {
                  console.log(artista)
                  this.artista = artista;
                  this.loading = false;
                })
  }

  get_top_tracks(id:string){
    this.service.getTopTracks(id)
                .subscribe(tracks =>{
                  this.tracks = tracks;
                  console.log(tracks);
                })
  }
}
