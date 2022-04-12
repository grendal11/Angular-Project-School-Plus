import { AbstractControl, FormGroup, ValidationErrors } from "@angular/forms";

export function emailValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    if (!value) {
        return null;
    }

    if (!/[a-z0-9\.\-\ ]{3,}@[a-z\.]{3,}\.[a-z]{2,3}/.test(value)) {
        return {
            email: true
        }
    }

    return null;
}

export function passwordMatch(passwordFormControl: AbstractControl) {
    return (rePasswordFormControl: AbstractControl) =>{
        if (!rePasswordFormControl.value || passwordFormControl.value !== rePasswordFormControl.value) {
            return {
                passwordMatch: true
            }
        }
        return null;
    }
}


export function passwordMatch2(passwordFormControl: AbstractControl): ValidationErrors | null {
    const passwordGroup = passwordFormControl.parent as FormGroup;

    if (!passwordGroup) {
        return null;
    }

    const { password, rePassword } = passwordGroup.controls;
    if (password.value !== rePassword.value) {
        return {
            passwordMatch2: true
        }
    }

    return null;
}