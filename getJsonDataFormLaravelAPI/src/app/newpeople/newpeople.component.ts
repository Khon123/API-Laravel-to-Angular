import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {PeopleService} from "../people.service";

@Component({
  selector: 'app-newpeople',
  templateUrl: './newpeople.component.html',
  styleUrls: ['./newpeople.component.css']
})
export class NewpeopleComponent implements OnInit {

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm){
    this.peopleService.addPeople(form.value.name)
        .subscribe(
            () => alert('People Created!')
        );
    form.reset();
  }
}
