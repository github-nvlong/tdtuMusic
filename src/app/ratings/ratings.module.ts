import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RatingsPage } from './ratings.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { RatingsPageRoutingModule } from './ratings-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: RatingsPage }]),
    RatingsPageRoutingModule,
  ],
  declarations: [RatingsPage]
})
export class RatingsPageModule {}
