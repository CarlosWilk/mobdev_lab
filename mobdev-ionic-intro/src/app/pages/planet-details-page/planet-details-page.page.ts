import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-planet-details-page',
  templateUrl: './planet-details-page.page.html',
  styleUrls: ['./planet-details-page.page.scss'],
})
export class PlanetDetailsPagePage implements OnInit {

  planet : any;

  constructor(private activatedRoute: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.api.getPlanet(id).subscribe(res => {
    this.planet = res;
  });
}

}
