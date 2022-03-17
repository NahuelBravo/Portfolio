import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { SoftSkill } from 'src/app/interfaces/softSkill';

@Component({
  selector: 'app-soft-modal',
  templateUrl: './soft-modal.component.html',
  styleUrls: ['./soft-modal.component.css']
})
export class SoftModalComponent implements OnInit {
  @Output() onAddSoftSkill: EventEmitter<SoftSkill> = new EventEmitter;
  background = "assets/Img/background-image-modal.jpg";
  form: FormGroup;
  id: any;
  img!: string;
  text!: string;
  pct!: number;

 
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      img:['', []],
      text: ['',[Validators.required]],
      pct:['', [Validators.required,Validators.min(1),Validators.max(100)]],
    })
   }

  ngOnInit(): void {
  }

  get Text(){
    return this.form.get("text");
  }

  get Pct(){
    return this.form.get("pct");
  }

  submitHardSkill(event: Event){
    if(this.form.valid){
      const {id, img, text, pct} = this 
      const newSoftSkill = {id, img, text, pct}
      this.onAddSoftSkill.emit(newSoftSkill);
    }else{
      alert("Datos Invalidos. Revisar el Formulario")
    }
  }
}
