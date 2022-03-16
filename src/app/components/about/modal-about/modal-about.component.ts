import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { About } from '../../../interfaces/about';

@Component({
  selector: 'app-modal-about',
  templateUrl: './modal-about.component.html',
  styleUrls: ['./modal-about.component.css']
})
export class ModalAboutComponent implements OnInit {
  @Output() editAbout: EventEmitter<About> = new EventEmitter;
  background = "assets/Img/background-image-modal.jpg";
  form: FormGroup;

  id:number = 1 ;
  profileImg: string = "";
  name:string = "Eric Nahuel Bravo";
  position: string = "";
  text: string = "";

  constructor(private formBuilder: FormBuilder) { 

    this.form = this.formBuilder.group({
      profileImg:['',[Validators.required]], position:['',[Validators.required]], text:['',[Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  get ProfileImg(){
    return this.form.get("profileImg");
  }

  get Position(){
    return this.form.get("position");
  }

  get Text(){
    return this.form.get("text");
  }

  submitAbout(event: Event){
    if(this.form.valid){
      const {id,profileImg, name, position, text} = this;
      const updateAbout = {id, name, profileImg, position, text};
      this.editAbout.emit(updateAbout);
    }else{
      alert("Campos Invalidos")
    }
  }
}
