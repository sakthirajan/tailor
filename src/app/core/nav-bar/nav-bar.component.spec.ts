import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarComponent } from './nav-bar.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('NavBarComponent', () => {
    let component: NavBarComponent;
    let fixture: ComponentFixture<NavBarComponent>;

    let de: DebugElement;
    let e1: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NavBarComponent],
            imports: [FormsModule, ReactiveFormsModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NavBarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should create navMenu() method', () => {
        expect(component.navMenu).toBeTruthy();
        component.navMenu();
    });

});
