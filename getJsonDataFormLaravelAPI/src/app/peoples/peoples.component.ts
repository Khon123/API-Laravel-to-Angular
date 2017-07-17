import { Component, OnInit } from '@angular/core';
import {People} from "../people.interface";
import {PeopleService} from "../people.service";
import {Response} from "@angular/http";

@Component({
  selector: 'app-peoples',
  templateUrl: './peoples.component.html',
  styleUrls: ['./peoples.component.css']
})
export class PeoplesComponent implements OnInit {
  peoples: People[];
  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
  }
  onGetPeoples(){
    this.peopleService.getPoeple()
        .subscribe(
            (peoples: People[]) => this.peoples = peoples,
            (error: Response) => console.log(error)
        );
  }
}
