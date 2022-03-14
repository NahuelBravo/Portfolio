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

  /* Header */
  getHeader(): Observable<Header>{
    return this.http.get<Header>(this.urlHeader);
  }

  /* About */
  getAbout(): Observable<About[]>{
    return this.http.get<About[]>(this.urlAbout);
  }

  editAbout(about: About): Observable<About[]>{
    console.log("hola soy el servicio")
    const url =`${this.urlAbout}/${about.id}`
    return this.http.put<About[]>(url, about, httpOptions)
  }

  /* Education */
  getEducation(): Observable<Education[]>{
    return this.http.get<Education[]>(this.urlEducation);
  }
  deleteEducation(education: Education):Observable<Education>{
    const url = `${this.urlEducation}/${education.id}`
    return this.http.delete<Education>(url)
  }

  addEducation(education: Education): Observable<Education>{
    return this.http.post<Education>(this.urlEducation, education,httpOptions);
  }

  /* Experience */
  getExperience(): Observable<Experience[]>{
    return this.http.get<Experience[]>(this.urlExperience);
  }
}
