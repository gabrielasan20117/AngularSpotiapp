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
  loading: boolean; 
  error: boolean;
  error_message: string;

  constructor( private spotify : SpotifyService) {

    this.loading = true;
    this.error = false;
    this.error_message = '';
        this.spotify.getNetRealeases()
        .subscribe((data: any) => {
          this.nuevas_canciones = data
          this.loading = false;
        }, (errorS) => {
         
          this.error_message = errorS.error.error.message;
          
          this.error = true;
          this.loading = false;
        });
   }

  ngOnInit(): void {
  }

}
