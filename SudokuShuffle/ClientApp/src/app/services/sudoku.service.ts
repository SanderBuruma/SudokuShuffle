import { Injectable } from '@angular/core'import { BehaviorSubject, Observable } from 'rxjs';import { KeyboardEventsService } from './keyboardevents.service';
/**Sudoku components should only be using this service when passing information in & out*/@Injectable({  providedIn: 'root', //ensures this service is used as a singleton})export class SudokuService {

  public Grid: BehaviorSubject<SudokuGrid>;
  public SelectedCell: BehaviorSubject<{ X: number, Y: number }>

  constructor(private keyboardEventService: KeyboardEventsService) {
    this.Grid = new BehaviorSubject<SudokuGrid>(new SudokuGrid());
    this.SelectedCell = new BehaviorSubject<{ X: number, Y: number }>({ X: 4, Y: 4 })

    this.keyboardEventService.LastKeyboardPress.subscribe(s => {

      //if number pressed
      if (s.charCode >= 49 && s.charCode <= 57) {
        this.Grid.value.Grid[this.SelectedCell.value.X][this.SelectedCell.value.Y].ChangePossibility(s.charCode-49);
        console.log(this.Grid);
      }

    })

  }


  public ChangeSelectedCell(cellNr: number) {
    this.SelectedCell.next(this.GetXY(cellNr));
  }

  private GetXY(cellNr: number) {
    return { X: cellNr % 9, Y: Math.floor(cellNr / 9) };
  }

}
/*** This should reflect the backend model SudokuGrid.cs*/
export class SudokuGrid {

  public Grid: Cell[][];

  constructor() {
    this.Grid = [];
    //just in case you didn't notice I'm initializing a 2d array here populated with possibilities and everything
    for (let i = 0; i < 9; i++)
    {
      this.Grid[i] = []
      for (let j = 0; j < 9; j++)
      {
        this.Grid[i][j] = new Cell();
      }
    }
  }

}

export class Cell {

  public Possibilities: number[];
  public Solved: boolean = false;
  public Given: boolean = false;

  constructor(givenDigit = -1) {

    if (givenDigit == -1) {

      //if no given digit then assign all possibilities
      this.Possibilities = [0, 1, 2, 3, 4, 5, 6, 7, 8];

    } else {

      //assign only the given digit and mark the cell as solved and given
      this.Possibilities = [givenDigit];
      this.Solved = true;
      this.Given = true;

    }

  }

  public ChangePossibility(num: number) {
    console.log({psbs: this.Possibilities})
    let index = this.Possibilities.indexOf(num);
    console.log({index});
    if (index == -1)
    {
      this.Possibilities.push(num);
    }
    else
    {
      this.Possibilities.splice(index, 1);
    }
    console.log({psbs: this.Possibilities})

  }

}
