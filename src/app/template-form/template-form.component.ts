import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {

  usuario:any = {
    name: null,
    email: null
  };

  onSubmit(form): void {
    console.log(form.value);
    console.log(this.usuario);
  }

}
