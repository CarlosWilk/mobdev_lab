import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  

  constructor(private http: HttpClient) { }

  getFilms(){
    return this.http.get('https://swapi.dev/api/films');
  }

  getFilm(id){
    return this.http.get(`https://swapi.dev/api/films/${id}`);
  }

  getPeople(){
    return this.http.get('https://swapi.dev/api/people');
  }

  getPerson(id) {
    console.log(this.http.get(`https://swapi.dev/api/people/${id}`));
    return this.http.get(`https://swapi.dev/api/people/${id}`);
  }

  getPlanets(){
    return this.http.get('https://swapi.dev/api/planet');
  }

  getPlanet(id){
    return this.http.get(`https://swapi.dev.api/planet/${id}`);
  }

}
