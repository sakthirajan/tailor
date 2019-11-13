import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
  providers: [MessageService]
})
export class ContactFormComponent implements OnInit {

  userform: FormGroup;

  constructor(private fb: FormBuilder, private messageService: MessageService) { }

  ngOnInit() {
    this.userform = this.fb.group({
      'firstname': new FormControl('', Validators.required),
      'number': new FormControl('', Validators.required),
      'email': new FormControl(''),
    });
  }

}
