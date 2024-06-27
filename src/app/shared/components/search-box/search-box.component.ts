import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css',
})
export class SearchBoxComponent implements OnInit {
  // Necesario para mostrar datos mientras cliente escribe en búsqueda
  private debouncing: Subject<string> = new Subject();

  @Input()
  public placeholder: string = '';

  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();

  emitValue(value: string): void {
    this.onValue.emit(value);
  }

  ngOnInit(): void {
    this.debouncing.pipe(debounceTime(200)).subscribe((value) => {
      this.onDebounce.emit(value);
    });
  }

  whileKeyPressing(searchTerm: string) {
    this.debouncing.next(searchTerm);
  }
}
