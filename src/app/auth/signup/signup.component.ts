import { FormGroup, FormControl} from "@angular/forms";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  authForm = new FormGroup( {
    username: new FormControl(''),
    password: new FormControl(''),
    passwordConfirmation: new FormControl(''),
  })
  constructor() { }

  ngOnInit(): void {
  }

}
