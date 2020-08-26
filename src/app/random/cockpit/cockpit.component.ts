import { Component, OnInit } from '@angular/core';
import { FactService } from 'src/app/services/fact.service';
import { PictureService } from 'src/app/services/picture.service';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {


  constructor(private factService: FactService, private picService: PictureService ) { }

  ngOnInit(): void {}

  update(){
    this.factService.getRandomFact();
    this.picService.getPicture();
  }
}
