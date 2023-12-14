import { Routes } from '@angular/router';

import { DashboardComponent } from './medical-records/dashboard/dashboard.component';
import { TestComponent } from './test/test.component';

export const routes: Routes = [
	// { path: '', component: DashboardComponent }
	{ path: '', component: TestComponent }
];
