/**
 * @hidden
 */
export interface CellContext {
    /**
     * @hidden
     */
    formattedValue: string;
    /**
     * @hidden
     */
    id: string;
    /**
     * @hidden
     */
    isWeekend: boolean;
    /**
     * @hidden
     */
    isFocused: boolean;
    /**
     * @hidden
     */
    isSelected: boolean;
    /**
     * @hidden
     */
    isRangeStart: boolean;
    /**
     * @hidden
     */
    isRangeEnd: boolean;
    /**
     * @hidden
     */
    isRangeMid: boolean;
    /**
     * @hidden
     */
    isRangeSplitEnd?: boolean;
    /**
     * @hidden
     */
    isRangeSplitStart?: boolean;
    /**
     * @hidden
     */
    isToday: boolean;
    /**
     * @hidden
     */
    title?: string;
    /**
     * @hidden
     */
    value: Date;
}
