import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

//RUTAS
import { ROUTES } from './app.routes';
//SERVICES
import { SpotifyService } from './services/spotify.service';
//PIPES
import { NoImagePipe } from './pipes/no-image.pipe';
import { LoandingComponent } from './components/shared/loanding/loanding.component';
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HomeComponent,
    ArtistComponent,
    NavbarComponent,
    NoImagePipe,
    LoandingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, { useHash: true } )
  ],
  providers: [
    SpotifyService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
