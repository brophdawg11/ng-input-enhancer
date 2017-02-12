import { Injectable } from '@angular/core';

import { NgInputEnhancerComponent } from './ng-input-enhancer.component';

export interface StringFunctionMap {
    [k: string]: Function;
}

@Injectable()
export class NgValidationMessagesService {
    private _validationErrors: StringFunctionMap = {
        required: (e: any, c: any) =>
            `${c.label} is required`,
        pattern: (e: any, c: any) =>
            `Invalid ${c.label}`,
        minlength: (e: any, c: any) =>
            `${c.label} must be at least ${e.requiredLength} characters`,
        maxlength: (e: any, c: any) =>
            `${c.label} cannot be longer than ${e.requiredLength} characters`,
    };

    constructor() { }

    getValidationError(key: string, errors: any, componentProps: any): string {
        return typeof this._validationErrors[key] === 'function' ?
                   this._validationErrors[key](errors, componentProps) :
                   null;
    }

    addValidationError(key: string, messageFn: Function) {
        this._validationErrors[key] = messageFn;
    }

    extendValidationErrors(validationErrors: StringFunctionMap) {
        (<any>Object).assign(this._validationErrors, validationErrors);
    }
}
