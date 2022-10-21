import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {

  people: Observable<any>;

  constructor(private navController: NavController, private router: Router, private api: ApiService) { }
  
  ngOnInit() {
    this.people = this.api.getPeople();
  }

  openDetails(person){
    console.log(person);

    let split = person.url.slipt('/');
    let personId = split[split.length-2]; //person or people?
    this.router.navigateByUrl(`/tabs/people/${personId}`); //need to check
  }

}
