import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule, MatPaginatorModule, MatSortModule,MatFormFieldModule, MatDatepickerModule, MatNativeDateModule,
  MatToolbarModule, MatInputModule, MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { EventsComponent } from './components/events/events.component';
import { TableComponent } from './components/table/table.component';
import { FormComponent } from './components/form/form.component';
import { RemoveUnderscorePipe } from './pipes/remove-underscore.pipe';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    TableComponent,
    FormComponent,
    RemoveUnderscorePipe,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
