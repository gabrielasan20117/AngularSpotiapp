import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  
  nuevas_canciones: any[] = [];

  constructor( private spotify : SpotifyService) {

    this.spotify.getNetRealeases()
        .subscribe((data: any) => {
          this.nuevas_canciones = data
        });
   }

  ngOnInit(): void {
  }

}
