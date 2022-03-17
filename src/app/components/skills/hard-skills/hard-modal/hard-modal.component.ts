import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HardSkill } from '../../../../interfaces/hardSkill'
@Component({
  selector: 'app-hard-modal',
  templateUrl: './hard-modal.component.html',
  styleUrls: ['./hard-modal.component.css']
})
export class HardModalComponent implements OnInit {
  @Output() onAddHardSkill: EventEmitter<HardSkill> = new EventEmitter;
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
      const newHardSkill = {id, img, text, pct}
      this.onAddHardSkill.emit(newHardSkill);
    }else{
      alert("Datos Invalidos. Revisar el Formulario")
    }

  }

}
