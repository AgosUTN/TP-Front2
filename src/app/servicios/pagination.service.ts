import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PaginationService {
  constructor() {}

  paginate(items: any[], pageSize: number, currentPage: number): any[] {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return items.slice(startIndex, endIndex);
  }
  filterItems(items: any[], searchText: string, searchField: string): any[] {
    if (!searchText) return items;

    searchText = searchText.toLowerCase();
    return items.filter((item) =>
      item[searchField].toLowerCase().includes(searchText)
    );
  }

  getTotalPages(items: any[], pageSize: number): number {
    return Math.ceil(items.length / pageSize) || 1;
  }
}
