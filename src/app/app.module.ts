import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';


import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { SocialMediaComponent } from './components/header/social-media/social-media.component';
import { LoginModalComponent } from './components/header/login-modal/login-modal.component';
import { ModalAboutComponent } from './components/about/modal-about/modal-about.component';
import { EditButtonComponent } from './components/buttons/edit-button/edit-button.component';
import { EducationComponent } from './components/education/education.component';
import { EdCardComponent } from './components/education/ed-card/ed-card.component';
import { EdModalComponent } from './components/education/ed-modal/ed-modal.component'
import { DeleteButtonComponent } from './components/buttons/delete-button/delete-button.component';
import { EdModal2Component } from './components/education/ed-modal2/ed-modal2.component';
import { NavButtonsComponent } from './components/buttons/nav-buttons/nav-buttons.component';

//* icons
import { faLinkedin as faLinkedin ,faGithubSquare as faGithubSquare  } from '@fortawesome/free-brands-svg-icons';
import { faSignInAlt as faSignInAlt} from '@fortawesome/free-solid-svg-icons';
import { AddButtonComponent } from './components/buttons/add-button/add-button.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ExpCardComponent } from './components/experience/exp-card/exp-card.component';
import { ExpModalComponent } from './components/experience/exp-modal/exp-modal.component';
import { ExpModal2Component } from './components/experience/exp-modal2/exp-modal2.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { HardSkillsComponent } from './components/skills/hard-skills/hard-skills.component';
import { SoftSkillsComponent } from './components/skills/soft-skills/soft-skills.component';
import { HardCardComponent } from './components/skills/hard-skills/hard-card/hard-card.component';
import { SoftCardComponent } from './components/skills/soft-skills/soft-card/soft-card.component';
import { SkillsModalComponent } from './components/skills/skills-modal/skills-modal.component';
import { ProyCardComponent } from './components/proyects/proy-card/proy-card.component';
import { ProyModalComponent } from './components/proyects/proy-modal/proy-modal.component';
import { HardModalComponent } from './components/skills/hard-skills/hard-modal/hard-modal.component';
import { SoftModalComponent } from './components/skills/soft-skills/soft-modal/soft-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HeaderComponent,
    SocialMediaComponent,
    LoginModalComponent,
    ModalAboutComponent,
    EditButtonComponent,
    EducationComponent,
    EdCardComponent,
    EdModalComponent,
    DeleteButtonComponent,
    EdModal2Component,
    AddButtonComponent,
    ExperienceComponent,
    ExpCardComponent,
    ExpModalComponent,
    ExpModal2Component,
    SkillsComponent,
    ProyectsComponent,
    NavButtonsComponent,
    HardSkillsComponent,
    SoftSkillsComponent,
    HardCardComponent,
    SoftCardComponent,
    SkillsModalComponent,
    ProyCardComponent,
    ProyModalComponent,
    HardModalComponent,
    SoftModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor( library: FaIconLibrary){
    library.addIcons(faGithubSquare,faLinkedin, faSignInAlt)
  }
}
