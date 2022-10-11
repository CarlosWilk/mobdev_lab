import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {

  people: Observable<any>;
  router: any;

  constructor(private activatedRoute: ActivatedRoute, private api: ApiService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  openDetails(people){
    let split = people.url.slipt('/');
    let peopleId = split[split.length-2];
    this.router.navigateByUrl(`/tabs/people/${peopleId}`);
  }

  // ngOnInit() { 
  //   this.people = this.api.getPeople();
  //   let id = this.activatedRoute.snapshot.paramMap.get('id');
  //   this.api.getPeople(id).subscribe(res => {
  //     this.people = res;
  //   }
    
  //  )

    
 // }

}
