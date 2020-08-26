import { Component, OnInit, AfterContentInit, DoCheck } from '@angular/core';
import { PictureService } from 'src/app/services/picture.service';

@Component({
  selector: 'app-random-picture',
  templateUrl: './random-picture.component.html',
  styleUrls: ['./random-picture.component.css']
})
export class RandomPictureComponent implements OnInit, AfterContentInit, DoCheck {

  public picture: string;

  constructor(private picService: PictureService) { }

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    this.picService.getPicture();
  }

  ngDoCheck(): void {
    this.picture = this.picService.picture;
  }

}
