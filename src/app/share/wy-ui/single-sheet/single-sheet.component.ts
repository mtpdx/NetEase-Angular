import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { SongSheet } from 'src/app/services/data-types/common.interface';

@Component({
  selector: 'app-single-sheet',
  templateUrl: './single-sheet.component.html',
  styleUrls: ['./single-sheet.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleSheetComponent implements OnInit {
  @Input() sheet: SongSheet;
  @Output() onnPlay = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  playSheet(id: number) {
    this.onnPlay.emit(id);
  }
}
