import { Component, Inject } from '@angular/core';
import { SudokuService, SudokuGrid } from '../services/sudoku.service';

@Component({
  selector:      'sudoku',
  templateUrl: './sudoku.component.html',
  styleUrls:  ['./sudoku.component.css']
})

export class SudokuComponent {
  public Grid: SudokuGrid;
  public SelectedCell: { X: number, Y: number };

  constructor(@Inject('BASE_URL') baseUrl: string, public sudokuService: SudokuService) {

    this.Grid = this.sudokuService.Grid.value;
    this.sudokuService.Grid
      .asObservable().subscribe(s => {
      this.Grid = s;
    });

    this.SelectedCell = this.sudokuService.SelectedCell.value;
    this.sudokuService.SelectedCell
      .asObservable().subscribe(s => {
      this.SelectedCell = s;
    })

  }

  public ClickCell(cellNr: number) {
    this.sudokuService.ChangeSelectedCell(cellNr);
  }

}