import {RouterModule, Routes} from "@angular/router";
import {PeoplesComponent} from "./peoples/peoples.component";
import {PeopleComponent} from "./people/people.component";
import {ModuleWithProviders} from "@angular/core";
const APP_ROUTES: Routes = [
    {path: '', component: PeoplesComponent},
    {path: 'new-people', component: PeopleComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);