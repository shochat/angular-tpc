import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdInputModule, MdOptionModule, MdSelectModule} from '@angular/material';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LeftSidebarComponent } from './layout/left-sidebar/left-sidebar.component';
import { HomeComponent } from './home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RightSidebarComponent } from './layout/right-sidebar/right-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LeftSidebarComponent,
    HomeComponent,
    RightSidebarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MdInputModule,
    MdOptionModule,
    MdSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
