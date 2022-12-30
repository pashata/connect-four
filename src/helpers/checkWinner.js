import { generateFieldKey, getColumnAndRowFromFieldKey } from "./generate";
const REQUIRED_FIELDS = 4;

const limitNumberWithinRange = (num, max) => Math.min(Math.max(num, 1), max);

export const checkWinner = ({
    player,
    clickedField,
    maxColumn,
    maxRow,
    fields
}) => {
    const {
        column: clickedColumn,
        row: clickedRow
    } = getColumnAndRowFromFieldKey(clickedField);
    const RANGE_FIELDS = REQUIRED_FIELDS - 1;
    const columnStart = limitNumberWithinRange(parseInt(clickedColumn) - RANGE_FIELDS, maxColumn );
    const columnEnd = limitNumberWithinRange(parseInt(clickedColumn) + RANGE_FIELDS, maxColumn);
    const rowStart = limitNumberWithinRange(parseInt(clickedRow) - RANGE_FIELDS, maxRow);
    const rowEnd = limitNumberWithinRange(parseInt(clickedRow) + RANGE_FIELDS, maxRow);

    const belongsToPlayer = ({ column, row }) => fields[generateFieldKey(column, row)] === player;

    const getWinCounter = ({
       column = clickedColumn,
       row = clickedRow,
       counter
   }) => {
        const belongs = belongsToPlayer({ column, row });
        const newCounter = belongs ? counter+1 : 0;
        return {
            newCounter,
            hasWinner: newCounter >= REQUIRED_FIELDS
        }
    }

    let winCounter = 0;
    // Check horizontally
    for (let x = columnStart; x <= columnEnd; x++) {
        const { newCounter, hasWinner } = getWinCounter({
            column: x,
            counter: winCounter
        });
        if (hasWinner) { return player; }
        winCounter = newCounter;
    }

    // Check vertically
    winCounter = 0
    for (let y = rowStart; y <= rowEnd; y++) {
        const { newCounter, hasWinner } = getWinCounter({
            row: y,
            counter: winCounter
        });
        if (hasWinner) { return player; }
        winCounter = newCounter;
    }

    // Check diagonally to the right, downwards
    const diagonalDownRight = Math.min(columnEnd - clickedColumn, rowEnd - clickedRow);
    const diagonalUpLeft = Math.min(clickedColumn - columnStart, clickedRow - rowStart);
    const diagonalDownLeft = Math.min(clickedColumn - columnStart, rowEnd - clickedRow);
    const diagonalUpRight = Math.min(columnEnd - clickedColumn, clickedRow - rowStart);

    if (!!diagonalUpLeft) {
        // Set to one because clicked field is skipped from checking
        winCounter = 1;
        for (let x = 1; x > diagonalUpLeft; x++) {
            const { newCounter, hasWinner } = getWinCounter({
                column: parseInt(clickedColumn) - x,
                row: parseInt(clickedRow) - x,
                counter: winCounter
            });
            if (hasWinner) { return player; }
            winCounter = newCounter;
        }
    }
    if (!!diagonalDownRight) {
        winCounter = 1;
        for (let x = 1; x <= diagonalDownRight; x++) {
            const { newCounter, hasWinner } = getWinCounter({
                column: parseInt(clickedColumn) + x,
                row: parseInt(clickedRow) + x,
                counter: winCounter
            });
            if (hasWinner) { return player; }
            winCounter = newCounter;
        }
    }
    if (!!diagonalDownLeft) {
        winCounter = 1;
        for (let x = 1; x <= diagonalDownLeft; x++) {
            const { newCounter, hasWinner } = getWinCounter({
                column: parseInt(clickedColumn) - x,
                row: parseInt(clickedRow) + x,
                counter: winCounter
            });
            if (hasWinner) { return player; }
            winCounter = newCounter;
        }
    }
    if (!!diagonalUpRight) {
        winCounter = 0;
        for (let x = 1; x <= diagonalUpRight; x++) {
            const { newCounter, hasWinner } = getWinCounter({
                column: parseInt(clickedColumn) + x,
                row: parseInt(clickedRow) - x,
                counter: winCounter
            });
            if (hasWinner) { return player; }
            winCounter = newCounter;
        }
    }

    return null;
}
