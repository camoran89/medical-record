import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordUpsertComponent } from './record-upsert.component';

describe('RecordUpsertComponent', () => {
  let component: RecordUpsertComponent;
  let fixture: ComponentFixture<RecordUpsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecordUpsertComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecordUpsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
