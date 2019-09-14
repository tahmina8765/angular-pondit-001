import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ContactListComponent } from './pages/contact-list/contact-list.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AuthGuardService } from './services/auth-guard.service';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: "about",
    component: AboutComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "blog",
    component: BlogComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "contact",
    component: ContactComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "contact-list",
    component: ContactListComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "admin",
    component: AdminComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
