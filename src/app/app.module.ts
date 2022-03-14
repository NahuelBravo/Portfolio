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
//*import { NavButtonsComponent } from './components/buttons/nav-buttons/nav-buttons.component';

//* icons
import { faLinkedin as faLinkedin ,faGithubSquare as faGithubSquare  } from '@fortawesome/free-brands-svg-icons';
import { faSignInAlt as faSignInAlt} from '@fortawesome/free-solid-svg-icons';
import { AddButtonComponent } from './components/buttons/add-button/add-button.component';


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
   //* NavButtonsComponent,
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
