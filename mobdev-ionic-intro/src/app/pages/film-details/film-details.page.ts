import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { FavouriteService } from './../../services/favourite.service';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.page.html',
  styleUrls: ['./film-details.page.scss'],
})
export class FilmDetailsPage implements OnInit {

  film: any;
  isFavorite = false;
  filmId = null;

  constructor(private activatedRoute: ActivatedRoute, private api: ApiService,  private favouriteService: FavouriteService) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.api.getFilm(id).subscribe(res => {
      this.film = res;
    });

  this.favouriteService.isFavourite(this.filmId).then(isFav => {
    this.isFavorite = isFav;
  });

  }
  
favoriteFilm() {
  this.favouriteService.favouriteFilm(this.filmId).then(() => {
    this.isFavorite = true;
  });
}

unfavoriteFilm() {
  this.favouriteService.unfavouriteFilm(this.filmId).then(() => {
    this.isFavorite = false;
  });
}

}

