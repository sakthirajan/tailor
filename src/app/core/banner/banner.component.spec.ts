import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerComponent } from './banner.component';
import { CarouselModule } from 'ngx-bootstrap';

describe('BannerComponent', () => {
    let component: BannerComponent;
    let fixture: ComponentFixture<BannerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BannerComponent],
            imports: [CarouselModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BannerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
