import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, 
          MatCardModule, 
          MatMenuModule, 
          MatToolbarModule,
          MatIconModule,
          MatFormFieldModule,
          MatInputModule,
          MatSelectModule,
          MatAutocompleteModule,
          MatCheckboxModule,
          MatNativeDateModule,
          MatDatepickerModule,
          MatRadioModule,
          MatSliderModule,
          MatSlideToggleModule,
          MatSidenavContent} from '@angular/material';

import 'hammerjs';
import { AppComponent } from './app.component';
import { MyformComponent } from './myform/myform.component';
import { routing } from './app.routing';

// import { materialize } from 'rxjs/operators';

@NgModule({
  declarations: [
    AppComponent,
    MyformComponent
  ],
  imports: [
    routing,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule ,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavContent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
