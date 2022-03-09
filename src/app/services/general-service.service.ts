import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

/* Interfaces */
import { About } from '../interfaces/about';
import { Header } from '../interfaces/header';
import { Education } from '../interfaces/education';
import { Experience } from '../interfaces/experience';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class GeneralServiceService {

  /* Api Url */
  private urlHeader = "http://localhost:5002/header";
  private urlAbout = "http://localhost:5002/about";
  private urlEducation = "http://localhost:5002/education";
  private urlExperience = "http://localhost:5002/experience";

  constructor(private http:HttpClient) { }

  getHeader(): Observable<Header>{
    return this.http.get<Header>(this.urlHeader);
  }
  getAbout(): Observable<About>{
    return this.http.get<About>(this.urlAbout);
  }
  getEducation(): Observable<Education[]>{
    return this.http.get<Education[]>(this.urlEducation);
  }
  getExperience(): Observable<Experience[]>{
    return this.http.get<Experience[]>(this.urlExperience);
  }
}
