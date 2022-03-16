import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

//* Interfaces 
import { About } from '../interfaces/about';
import { Header } from '../interfaces/header';
import { Education } from '../interfaces/education';
import { Experience } from '../interfaces/experience';
import { HardSkill } from '../interfaces/hardSkill';
import { SoftSkill } from '../interfaces/softSkill';
import { Proyect } from '../interfaces/proyect';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class GeneralServiceService {




  //* Api Url
  private urlHeader = "http://localhost:5002/header";
  private urlAbout = "http://localhost:5002/about";
  private urlEducation = "http://localhost:5002/education";
  private urlExperience = "http://localhost:5002/experience";
  private urlHardSkill = "http://localhost:5002/hardSkill";
  private urlSoftSkill = "http://localhost:5002/softSkill";
  private urlProyects = "http://localhost:5002/proyects";

  constructor(private http:HttpClient) { }

  //* Header 
  getHeader(): Observable<Header>{
    return this.http.get<Header>(this.urlHeader);
  }

  //* About 
  getAbout(): Observable<About[]>{
    return this.http.get<About[]>(this.urlAbout);
  }

  editAbout(about: About): Observable<About[]>{
    console.log("hola soy el servicio")
    const url =`${this.urlAbout}/${about.id}`
    return this.http.put<About[]>(url, about, httpOptions);
  }

  //* Education 
  getEducation(): Observable<Education[]>{
    return this.http.get<Education[]>(this.urlEducation);
  }
  deleteEducation(education: Education):Observable<Education>{
    const url = `${this.urlEducation}/${education.id}`
    return this.http.delete<Education>(url);
  }

  addEducation(education: Education): Observable<Education>{
    return this.http.post<Education>(this.urlEducation, education,httpOptions);
  }

  //* Experience 
  getExperience(): Observable<Experience[]>{
    return this.http.get<Experience[]>(this.urlExperience);
  }

  deleteExperience(experience: Experience):Observable<Experience>{
    const url = `${this.urlExperience}/${experience.id}`
    return this.http.delete<Experience>(url);
  }

  addExperience(experience: Experience): Observable<Experience>{
    return this.http.post<Experience>(this.urlExperience, experience,httpOptions);
  }

  //* Skills
  //* Hard
  getHardSkill(): Observable<HardSkill[]>{
    return this.http.get<HardSkill[]>(this.urlHardSkill);
  }
  addHardSkill(hardSkill: HardSkill): Observable<HardSkill>{
    return this.http.post<HardSkill>(this.urlHardSkill, hardSkill, httpOptions)
  }
  deleteHardSkill(hardSkill: HardSkill): Observable<HardSkill>{
    const url = `${this.urlHardSkill}/${hardSkill.id}`
    return this.http.delete<HardSkill>(url);
  }

   //* Soft
   getSoftSkill(): Observable<SoftSkill[]>{
    return this.http.get<SoftSkill[]>(this.urlSoftSkill);
  }
  addSoftSkill(softSkill: SoftSkill): Observable<SoftSkill>{
    return this.http.post<SoftSkill>(this.urlSoftSkill, softSkill, httpOptions)
  }
  deleteSoftSkill(softSkill: SoftSkill): Observable<SoftSkill>{
    const url = `${this.urlSoftSkill}/${softSkill.id}`
    return this.http.delete<SoftSkill>(url);
  }

  //*Proyects
  getProyects(): Observable<Proyect[]>{
    return this.http.get<Proyect[]>(this.urlProyects);
  }

  addProyect(proyect: Proyect): Observable<Proyect>{
    return this.http.post<Proyect>(this.urlProyects, proyect, httpOptions)
  }
  deleteProyect(proyect: Proyect): Observable<Proyect>{
    const url = `${this.urlProyects}/${proyect.id}`
    return this.http.delete<Proyect>(url);
  }
}
