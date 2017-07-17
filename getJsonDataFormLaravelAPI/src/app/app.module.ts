import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component';
import { PeoplesComponent } from './peoples/peoples.component';
import { NewpeopleComponent } from './newpeople/newpeople.component';
import {routing} from "./app.routing";
import {PeopleService} from "./people.service";
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    PeoplesComponent,
    NewpeopleComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
