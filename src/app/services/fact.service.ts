import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FactService {

  public fact: string;

  constructor( private httpClient: HttpClient) { }

  getRandomFact(): void {
    this.httpClient.get('https://uselessfacts.jsph.pl/random.json?language=en')
      .subscribe(
        fact => {
          this.fact = fact['text'];
        }
      );
  }
}
