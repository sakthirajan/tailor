import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactFormComponent } from './contact-form.component';
import { MessageModule } from 'primeng/message';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('ContactFormComponent', () => {
    let component: ContactFormComponent;
    let fixture: ComponentFixture<ContactFormComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ContactFormComponent],
            imports: [FormsModule, ReactiveFormsModule, MessageModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ContactFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
