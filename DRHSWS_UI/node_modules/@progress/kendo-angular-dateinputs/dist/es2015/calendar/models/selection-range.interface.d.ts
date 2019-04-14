/**
 * The type that defines the Calendar selection range.
 */
export interface SelectionRange {
    /**
     * The beginning of the selection range.
     */
    start: Date;
    /**
     * The end of the selection range.
     */
    end: Date;
}
/**
 * @hidden
 */
export declare const EMPTY_SELECTIONRANGE: SelectionRange;
