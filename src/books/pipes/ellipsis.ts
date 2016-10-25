import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'bcEllipsis', pure: true })
export class EllipsisPipe implements PipeTransform {
  transform(str: string): string {
    const withoutHtml = str.replace(/(<([^>]+)>)/ig, '');
    if (str.length >= 250) {
      return withoutHtml.slice(0, 250) + '...';
    }
    return withoutHtml;
  }
}
