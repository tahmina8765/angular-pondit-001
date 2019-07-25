import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import { Camera, Heart, Github, Home } from 'angular-feather/icons';

const icons = {
  Home,
  Camera,
  Heart,
  Github
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
