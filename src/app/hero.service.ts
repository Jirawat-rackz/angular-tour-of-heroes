import { Injectable } from '@angular/core';
import { Hero } from 'interfaces/hero';
import { HEROES } from 'mocks/mock-heroes';
import { Observable, of } from 'rxjs';
import { MessagesService } from 'app/messages.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(
    private http: HttpClient,
    private messageService: MessagesService
  ) {}

  private heroesUrl = 'http://localhost:8080/heroes';

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find((h) => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
