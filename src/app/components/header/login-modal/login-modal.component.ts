import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

import { faSignInAlt} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {

  form: FormGroup;
  
  signIn = faSignInAlt
  background = "assets/Img/background-image-modal.jpg";

  constructor(private formBuilder: FormBuilder) { 

    this.form = this.formBuilder.group({
      password: ['',[Validators.required, Validators.minLength(8)]],
      email:['', [Validators.required, Validators.email]],
    })

  }

  ngOnInit(): void {
  }

  get Password(){
    return this.form.get("password");
  }

  get Mail (){
    return this.form.get("email");
  }

  get PasswordValid(){
    return this.Password?.touched && !this.Password?.valid;
  }

  get MailValid(){
    return false;
  }

  onEnviar( event: Event){
    event.preventDefault;

    if(this.form.valid){
      alert("Todo salio bien ¡Enviar formuario!")
    }else{
      this.form.markAllAsTouched();
    }
  }
  
}
