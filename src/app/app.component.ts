import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { UserFormGroup } from './user-form-group';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  profile: FormGroup<{
    favoriteColor: FormControl<String | null>;
    users: FormArray<UserFormGroup>;
  }>;

  fbnn: NonNullableFormBuilder;

  constructor(private fb: FormBuilder) {
    this.fbnn = this.fb.nonNullable;

    this.profile = fb.group({
      favoriteColor: fb.control<String | null>(null),

      users: fb.array<UserFormGroup>([new UserFormGroup({
        name: this.fbnn.control(''),
        color: this.fbnn.control('')
      })])
    });
  }

  /**
   * Testeando propiedades
   */
  get favoriteColor() {
    return this.profile.controls.favoriteColor;
  }

  /**
   * Actualizando el color
   */
   addUser(): void {
    let d = new Date().toLocaleTimeString();
    this.profile.controls.users.push(new UserFormGroup({
      name: this.fbnn.control('Usuario - ' + d),
      color: this.fbnn.control(d)
    }));
  }

  changeColor() : void {
    this.profile.controls.favoriteColor.setValue('New Color');
  }
}
