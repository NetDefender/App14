import { FormControl, FormGroup } from "@angular/forms";

export class UserFormGroup extends FormGroup<{name: FormControl<String>, color: FormControl<String>}>{
}
