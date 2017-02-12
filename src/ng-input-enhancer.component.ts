import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { NgValidationMessagesService } from './ng-validation-messages.service';

@Component({
    selector: 'app-ng-input-enhancer',
    styles: [`
        :host:not(.ng-disable-styles) {

            .ng-input-enhancer {

                &__label {
                    display: block;
                    font-weight: bold;
                }

                &__errors {
                    margin: 0;
                    padding: 0;
                    list-style-type: none;
                }

                &__error {
                    color: red;
                    font-style: italic;
                }

                & /deep/ input:not(.ng-disable-styles) {
                    width: 100%;
                    border: 1px solid blue;
                }
            }

        }
    `],
    template: `
        <div class="ng-input-enhancer">

            <label class="ng-input-enhancer__label"
                   *ngIf="label"
                   for="{{id}}">{{label}}</label>

            <ng-content #child></ng-content>

            <ul class="ng-input-enhancer__errors"
                *ngIf="control?.errors && control?.touched">

                <ng-container *ngFor="let kv of (control.errors | keyValue)">

                    <li class="ng-input-enhancer__error"
                        *ngIf="hasValidationError(kv.key)">
                        {{ getValidationError(kv.key) }}
                    </li>

                </ng-container>

            </ul>

        </div>
    `
})
export class NgInputEnhancerComponent implements OnInit {
    @Input('id')
    public id: string;

    @Input('label')
    public label: string;

    @Input('control')
    public control: FormControl;

    constructor(public vms: NgValidationMessagesService) { }

    ngOnInit() {
    }

    hasValidationError(key: string) {
        return this.getValidationError(key);
    }

    getValidationError(key: string) {
        return this.vms.getValidationError(key,
                                           this.control.errors[key],
                                           this.exposedProperties);
    }

    get exposedProperties() {
        return {
            id: this.id,
            label: this.label
        };
    }
}
