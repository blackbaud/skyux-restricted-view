import {
  Component,
  OnDestroy
} from '@angular/core';

import {
  SkyRestrictedViewAuthService
} from './restricted-view-auth.service';

import {
  Subject,
  Observable
} from 'rxjs';

@Component({
  selector: 'sky-restricted-view',
  templateUrl: './restricted-view.component.html'
})
export class SkyRestrictedViewComponent implements OnDestroy {
  public ngUnsubscribe = new Subject();
  public isAuthenticated: Observable<boolean>;

  constructor(private authService: SkyRestrictedViewAuthService) {
    this.isAuthenticated = this.authService.isAuthenticated;
  }

  public ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
