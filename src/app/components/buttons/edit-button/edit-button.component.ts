import { Component, OnInit } from '@angular/core';

import { faPen } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-edit-button',
  templateUrl: './edit-button.component.html',
  styleUrls: ['./edit-button.component.css']
})
export class EditButtonComponent implements OnInit {

  faPen = faPen;
  
  constructor() { }

  ngOnInit(): void {
  }

}
