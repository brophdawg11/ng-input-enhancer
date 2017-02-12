/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NgValidationMessagesService } from './ng-validation-service.service';

describe('NgValidationMessagesService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                NgValidationMessagesService
            ]
        });
    });

    it('should ...', inject(
        [ NgValidationMessagesService ],
        (service: NgValidationMessagesService) => {
            expect(service).toBeTruthy();
        }
    ));
});
