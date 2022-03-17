import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Education } from '../../../interfaces/education';

@Component({
  selector: 'app-ed-modal',
  templateUrl: './ed-modal.component.html',
  styleUrls: ['./ed-modal.component.css']
})
export class EdModalComponent implements OnInit {
  @Output() onAddEducation: EventEmitter<Education> = new EventEmitter;
  background = "assets/Img/background-image-modal.jpg";
  form: FormGroup;
  

  id: any;
  school!: string;
  img!: string;
  title!: string;
  start!: number;
  end!: number | string;
  
  constructor(private formBuilder: FormBuilder) { 
    this.form = this.formBuilder.group({
      img:['', []],
      school: ['',[Validators.required]],
      title:['', [Validators.required]],
      start:['', [Validators.required,Validators.min(1950)]],
      end: ['',[Validators.required,Validators.min(1950)]],
    })
  }

  ngOnInit(): void {
  }

  get School(){
    return this.form.get("school");
  }

  get Title (){
    return this.form.get("title");
  }

  get Start(){
    return this.form.get("start");
  }

  get End (){
    return this.form.get("end");
  }

  submitEducation(event: Event){
    if(this.form.valid && this.start > this.end){
      alert("Comienzo no puede ser menor que Final")
    }else if(this.form.valid && this.start === this.end){
      this.end = "Presente"
      const {id, school, img, title, start, end} = this; 
      const newEducation = {id, school, img, title, start, end}
      this.onAddEducation.emit(newEducation);
    }else if(this.form.valid){
      const {id, school, img, title, start, end} = this; 
      const newEducation = {id, school, img, title, start, end}
      this.onAddEducation.emit(newEducation);
    }else{
      alert("Datos Invalidos. Revisar el Formulario")
    }
  }
}

