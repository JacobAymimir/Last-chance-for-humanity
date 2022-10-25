import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  form: FormGroup;
  constructor(private formBuilder: FormBuilder) { 
    this.form = this.formBuilder.group({
      language: new FormControl('', Validators.compose([Validators.required])),
    })
  }
 get f(){
    return this.form.controls;
  }

  submit(){

    console.log(this.form.value.language);    
  }
  change(e:any){
      console.log(e.target.value);
  }
  title = 'LastChanceForHumanity';
}
