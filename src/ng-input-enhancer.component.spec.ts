/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NgInputEnhancerComponent } from './ng-input-enhancer.component';

describe('NgInputEnhancerComponent', () => {
    let component: NgInputEnhancerComponent;
    let fixture: ComponentFixture<NgInputEnhancerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ NgInputEnhancerComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NgInputEnhancerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
