import { TestBed, async, inject } from '@angular/core/testing';

import { AdminGuard} from './admin-guard.guard';

describe('AdminGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminGuard]
    });
  });

  it('should ...', inject([AdminGuard], (guard: AdminGuard) => {
    expect(guard).toBeTruthy();
  }));
});
