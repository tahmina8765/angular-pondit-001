import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { IconsModule } from '../icons/icons.module';

@NgModule({
  declarations: [
    HomeComponent, 
    AboutComponent, 
    HeaderComponent, 
    SidebarComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    IconsModule
  ],
  exports: [
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    ContactComponent
  ]
})
export class SharedModule { }
