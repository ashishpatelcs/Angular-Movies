import { Component, Input } from '@angular/core';

import { MoviesService } from './movies.service';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers: [
    MoviesService
  ]
})

export class MoviesComponent {
  
  constructor(private moviesService: MoviesService) {};

  movies = [];
  p: number = 1;
  flag = false;
  posterUrl = {};
  
  ngOnInit() {
    this.moviesService.getMovies().subscribe(
      (data: any) => {
        this.movies = data;
      },
      (err) => {
        console.log("Error: " + JSON.stringify(err));
      }
    );
  }

  @Input() getImage(name: string) {
    if(this.flag) {
      return this.posterUrl;
    } else {
    this.moviesService.getPoster(name).subscribe(
      (data: any) => {
        data = JSON.parse(data._body);
        this.posterUrl = "http://image.tmdb.org/t/p/w200" + data.results[0].poster_path;
        this.flag = true;
      },
      (err) => {
        console.log("Error: " + JSON.stringify(err));
      }
    );
    console.log(this.posterUrl);
    return this.posterUrl;
    }
  }

}