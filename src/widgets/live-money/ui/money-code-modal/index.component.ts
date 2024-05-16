import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from "@angular/core";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  standalone: true,
  selector: 'char-codes-modal',
  templateUrl: './index.component.html',
  imports: [
    NgForOf,
    NgIf
  ],
  styleUrls: ['./index.component.scss']
})
export class CharCodesModal implements OnChanges {
  codes: Array<string> = [
    "CNY",
    "JPY",
    "TRY"
  ]

  @Input() codesUsed: Array<string> = []
  @Output() add: EventEmitter<string> = new EventEmitter()

  ngOnChanges(changes: SimpleChanges) {

  }

  isKeyUsed(key: string): boolean {
    return this.codesUsed.find(cu => cu === key) !== undefined
  }

  onClick(code: string) {
    this.add.emit(code)
  }
}
