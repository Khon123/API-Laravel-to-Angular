import {Component, Input, OnInit} from '@angular/core';
import {People} from "../people.interface";
import {PeopleService} from "../people.service";

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  @Input() people: People;

  editing = false;
  editValue = '';
  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
  }

  onEdit(){
    this.editing = true;
    this.editValue = this.people.name;
  }

  onUpdate()
  {
    this.peopleService.updatePeople(this.people.id, this.editValue)
        .subscribe(
            (people: People) => {
              this.people = people;
              this.editValue = '';
            }
        );
    this.editing = false;
  }

  onCancel(){
    this.editValue = '';
    this.editing = false;
  }

  onDelete(){
    this.peopleService.deletePeople(this.people.id)
        .subscribe(
            () => console.log('People deleted!')
        );
  }
}
