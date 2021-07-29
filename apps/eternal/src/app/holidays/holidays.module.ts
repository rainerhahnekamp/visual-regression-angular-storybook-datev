import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared/shared.module';
import { HolidaysEffects } from './+state/holidays.effects';
import { holidaysFeatureKey, holidaysReducer } from './+state/holidays.reducer';
import { AddressGetterComponent } from './address-getter/address-getter.component';
import { HolidayCardComponent } from './holiday-card/holiday-card.component';
import { HolidaysComponent } from './holidays/holidays.component';

@NgModule({
  declarations: [HolidayCardComponent, HolidaysComponent, AddressGetterComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: HolidaysComponent
      }
    ]),
    StoreModule.forFeature(holidaysFeatureKey, holidaysReducer),
    EffectsModule.forFeature([HolidaysEffects]),
    SharedModule
  ]
})
export class HolidaysModule {}
