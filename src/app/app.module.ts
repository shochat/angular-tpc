import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdDatepickerModule, MdIconModule, MdInputModule, MdNativeDateModule, MdOptionModule, MdSelectModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RightSidebarComponent } from './layout/right-sidebar/right-sidebar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreatePlanService } from './services/CreatePlanService';
import { DatePipe } from '@angular/common';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LeftSidebarComponent } from './layout/left-sidebar/left-sidebar.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';
import { PlanComponent } from './plan/plan.component';
import {AppRoutingModule} from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LeftSidebarComponent,
    HomeComponent,
    RightSidebarComponent,
    PlanComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MdInputModule,
    MdOptionModule,
    MdSelectModule,
    MdNativeDateModule,
    MdIconModule,
    MdDatepickerModule,
    MdNativeDateModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [CreatePlanService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
