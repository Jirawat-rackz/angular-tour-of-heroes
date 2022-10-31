import { Injectable } from '@angular/core';
import { Hero } from 'interfaces/hero';
import { HEROES } from 'mocks/mock-heroes';
import { Observable, of } from 'rxjs';
import { MessagesService } from 'app/messages.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessagesService) {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
