import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class MoviesService {
  movies = {};
  constructor(private http: Http) {
  }

  getMovies() {
    let url = "https://raw.githubusercontent.com/ashishpatelcs/angular-resources/master/api/movies.json";
    return this.http.get(url)
                    .pipe(map( (res) => {
                      return JSON.parse(res._body);
                    }
                    ));
  }

  getPoster(name: string) {
    let url = "https://api.themoviedb.org/3/search/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query=" + name;
    return this.http.get(url);
  }

} 