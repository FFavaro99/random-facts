import { Component, OnInit, DoCheck } from '@angular/core';
import { FactService } from 'src/app/services/fact.service';
import { Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-random-fact',
  templateUrl: './random-fact.component.html',
  styleUrls: ['./random-fact.component.css']
})
export class RandomFactComponent implements OnInit, DoCheck {

  public fact: string;
  public observeFact: Subscription;

  constructor(private factService: FactService) {

  }

  ngOnInit(): void {
    this.factService.getRandomFact();
  }

  ngDoCheck(){
    this.fact = this.factService.fact;
  }

}
