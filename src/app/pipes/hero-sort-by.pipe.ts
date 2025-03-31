import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroSortBy',
})
export class HeroSortByPipe implements PipeTransform {
  transform(value: Hero[], sortBy: keyof Hero | null): Hero[] {
    if (!sortBy) return value;
    switch (sortBy) {
      case 'name':
        return value.sort((a: Hero, b: Hero): number =>
          a.name.localeCompare(b.name)
        );
      case 'nameDesc':
        return value.sort((a: Hero, b: Hero): number =>
          b.name.localeCompare(a.name)
        );
      case 'canFly':
        return value.sort(
          (a: Hero, b: Hero): number =>
            (a.canFly ? 1 : -1) - (b.canFly ? 1 : -1)
        );
      case 'color':
        return value.sort((a: Hero, b: Hero): number => a.color - b.color);
      case 'creator':
        return value.sort((a: Hero, b: Hero): number => a.creator - b.creator);
      default:
        return value;
    }
  }
}
