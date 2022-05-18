import { Cell } from "./Cell";
import { Colors } from "./Colors";
import { Bishop } from "./figures/Bishop";
import { Pawn } from "./figures/Pawn";
import { Queen } from "./figures/Queen";

export class Board {
    cells: Cell[][] = [];

    public initCells() {
        for (let i = 0; i < 8; i++) {
            const row: Cell[] = [];
            for (let j = 0; j < 8; j++) {
                if ((i + j) % 2 !== 0) {
                    row.push(new Cell(this, j, i, Colors.BLACK, null)); // blsck cells
                } else {
                    row.push(new Cell(this, j, i, Colors.WHITE, null)); // white cells
                }
            }
            this.cells.push(row);
        }
    }

    public getCell(x: number, y: number) {
        return this.cells[y][x];
    }

    private addPawns() {}
    private addKings() {}
    private addQueens() {}
    private addBishops() {}
    private addKnights() {}
    private addRooks() {}

    public addFigures() {
        this.addBishops();
        this.addKings();
        this.addPawns();
        this.addQueens();
        this.addKnights();
        this.addRooks();
    }
}
