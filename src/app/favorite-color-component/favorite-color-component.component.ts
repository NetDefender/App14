import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { UserFormGroup } from '../user-form-group';

@Component({
  selector: 'app-favorite-color-component',
  templateUrl: './favorite-color-component.component.html',
  styleUrls: ['./favorite-color-component.component.css']
})
export class FavoriteColorComponentComponent implements OnInit {
  @Input()
  favoriteColor: FormControl<String | null> = new FormControl<String | null>(null);

  @Input()
  users: FormArray<UserFormGroup> = new FormArray<UserFormGroup>([]);

  constructor() { }

  ngOnInit(): void {

  }

  UpdateColor() : void {
    this.favoriteColor.setValue(new Date().toLocaleTimeString())
  }

  AddUser(): void {
//this.users.push(new FormControl())
  }
}
