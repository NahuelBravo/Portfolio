import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Proyect } from 'src/app/interfaces/proyect';

@Component({
  selector: 'app-proy-modal',
  templateUrl: './proy-modal.component.html',
  styleUrls: ['./proy-modal.component.css']
})
export class ProyModalComponent implements OnInit {
  @Output() onAddProyect: EventEmitter<Proyect> = new EventEmitter;
  background = "assets/Img/background-image-modal.jpg";
  form: FormGroup;

  id: any;
  name!: string;
  img!: string;
  info!: string;
  start!: string;
  end!: string | number;
  presente!: boolean;

  constructor(private formBuilder: FormBuilder) { 
    this.form = this.formBuilder.group({
      img:['', []],
      name: ['',[Validators.required]],
      info:['', [Validators.required]],
      start:['', [Validators.required,Validators.min(1950)]],
      end: ['',[Validators.min(1950)]],
      presente:['',[]]
    })
  }

  ngOnInit(): void {
  }

  get Name(){
    return this.form.get("name");
  }

  get Info(){
    return this.form.get("info");
  }

  get Start(){
    return this.form.get("start");
  }


  submitProyect(event: Event){
    if(this.form.valid && (this.presente === true)){
      this.end = "Presente"
      const {id, name, img, info, start, end} = this; 
      const newProyect = {id, name, img, info, start, end}
      this.onAddProyect.emit(newProyect);
    }else if(this.form.valid && (this.start > this.end)){
      alert("Comienzo no puede ser menor que Final");
    }else if(this.form.valid){
      const {id, name, img, info, start, end} = this; 
      const newProyect = {id, name, img, info, start, end}
      this.onAddProyect.emit(newProyect);
    }else{
      alert("Datos Invalidos. Revisar el Formulario")
    }
  }

}
