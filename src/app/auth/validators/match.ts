import {FormGroup, ValidationErrors, Validator} from "@angular/forms";

export class Match implements Validator {
  validate(formGroup: FormGroup): ValidationErrors | null {
    const {password, passwordConfirmation} = formGroup.value;
    if (password === passwordConfirmation) {
      return null;
    } else {
      return {passwordDontMatch: true};
    }
  }
}
