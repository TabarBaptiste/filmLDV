import { Component, OnInit } from '@angular/core';
import { RecupFilmsService } from 'src/app/service/recup-films.service';
import { Film } from 'src/app/models/Film';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Film[] = [];

  constructor(private recupFilmsService: RecupFilmsService) { }

  ngOnInit() {
    this.recupFilmsService.getFilms().subscribe((data) => {
      this.movies = data;
    });
  }

}
