import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { SocialMediaComponent } from './components/header/social-media/social-media.component';
import { LoginModalComponent } from './components/header/login-modal/login-modal.component';
import { ModalAboutComponent } from './components/about/modal-about/modal-about.component';
import { EditButtonComponent } from './components/buttons/edit-button/edit-button.component';
import { EducationComponent } from './components/education/education.component';
import { EdCardComponent } from './components/education/ed-card/ed-card.component';
import { EdModalComponent } from './components/education/ed-modal/ed-modal.component';
import { NavButtonsComponent } from './components/buttons/nav-buttons/nav-buttons.component';


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
    NavButtonsComponent,
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
export class AppModule { }
