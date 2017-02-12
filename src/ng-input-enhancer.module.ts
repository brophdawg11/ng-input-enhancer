import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NgValidationMessagesService } from './ng-validation-messages.service';
import { NgInputEnhancerComponent } from './ng-input-enhancer.component';

import { KeyValuePipe } from './key-value.pipe';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [
        NgInputEnhancerComponent
    ],
    declarations: [
        KeyValuePipe,
        NgInputEnhancerComponent
    ],
    providers: [
        NgValidationMessagesService
    ]
})
export class NgInputEnhancerModule { }
