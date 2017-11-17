import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppListModule } from './list/app.module';
import { AppReadModule} from './read/app.module';
import { AppReadingModule } from './reading/app.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppListModule,
    AppReadModule,
    AppReadingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
