using System;
using System.Collections.Generic;

namespace SudokuShuffle.Model
{
    public class SudokuGrid
    {
        #region The Grid

        /// <summary>
        /// x,y coordinates
        /// </summary>
        public Cell[,] Grid { get; set; }

        public SudokuGrid(Int32 gridSize = 9)
        {
            Grid = new Cell[gridSize, gridSize];
            for (Int32 i = 0; i < gridSize; i++) for (Int32 j = 0; j < gridSize; j++)
            {
                Grid[i, j] = new Cell(gridSize);
            }
        }

        #endregion

        #region Cell

        public class Cell
        {
            /// <summary>
            /// Which numbers are possible on this cell
            /// </summary>
            public Boolean[] Possibilities { get; set; }
            /// <summary>
            /// Whether or not this cell needs to be rechecked for being a naked single
            /// </summary>
            public Boolean Solved { get; set; }

            public Cell(Int32 gridSize)
            {
                Possibilities = new Boolean[gridSize];
                Solved = false;
            }
        }

        #endregion
    }
}
