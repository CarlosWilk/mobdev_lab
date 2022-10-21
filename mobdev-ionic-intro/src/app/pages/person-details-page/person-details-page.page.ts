import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-person-details-page',
  templateUrl: './person-details-page.page.html',
  styleUrls: ['./person-details-page.page.scss'],
})
export class PersonDetailsPagePage implements OnInit {

  person: any;

  constructor(private activatedRoute: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.api.getPerson(id).subscribe(res => {
      this.person = res;
    });
  }

}
