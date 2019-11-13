import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { HomeComponent } from './home.component';

import { NavBarComponent } from '../core/nav-bar/nav-bar.component';
import { BannerComponent } from '../core/banner/banner.component';
import { ContactFormComponent } from '../core/contact-form/contact-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RatingModule } from 'primeng/rating';
import { MessageModule } from 'primeng/message';
import { DialogModule } from 'primeng/dialog';
import { CarouselModule } from 'ngx-bootstrap';
import { PaginatorModule } from 'primeng/paginator';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;

    let e1: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                HomeComponent, NavBarComponent, BannerComponent, ContactFormComponent
            ],
            imports: [Ng2SearchPipeModule, RatingModule, MessageModule, DialogModule,
                CarouselModule, FormsModule, PaginatorModule, ReactiveFormsModule, HttpClientModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('Checking home component', () => {
        const fixture = TestBed.createComponent(HomeComponent);
        const component = fixture.debugElement.componentInstance;
        expect(component.title).toEqual('Home Page');
    });

    it('should set display to false', () => {
        component.contactUs();
        expect(component.display).toBeFalsy();
    });

    it('should be call the onSearch() method', () => {
        fixture.detectChanges();
        spyOn(component, 'onSearch');
        e1 = fixture.debugElement.query(By.css('input')).nativeElement;
        e1.onkeyup;
        expect(component.onSearch).toHaveBeenCalledTimes(0);
    })
});



