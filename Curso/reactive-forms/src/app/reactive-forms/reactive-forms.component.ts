import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit{

  public cadastroForm: FormGroup = this.formBuilder.group({
    firsName: ['']
  })

  constructor(private formBuilder: FormBuilder){}
  ngOnInit(): void {

  }

}
