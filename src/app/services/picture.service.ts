import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PictureService {

  public picture: string;

  constructor(private httpClient: HttpClient) { }

  getPicture(): void{
    this.httpClient.get('https://api.thecatapi.com/v1/images/search')
      .subscribe( pic => {
        this.picture = pic[0].url;
      });
  }
}
