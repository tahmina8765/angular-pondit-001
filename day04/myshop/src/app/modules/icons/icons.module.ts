import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import { 
  Home, 
  File, 
  ShoppingCart, 
  Users,
  BarChart2,
  Layers
 } from 'angular-feather/icons';

const icons = {
  Home,
  File,
  ShoppingCart, 
  Users,
  BarChart2,
  Layers
};

@NgModule({
  declarations: [],
  imports: [
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }
