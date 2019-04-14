import { ElementRef, Renderer2, NgZone, OnInit, OnDestroy } from '@angular/core';
import { DateInputComponent } from '../dateinput/dateinput.component';
import { AutoCorrectOn } from './auto-correct-on.type';
import { DateRangeInput } from './date-range-input';
import { DateRangeService } from './date-range.service';
import { SelectionRange } from '../calendar/models/selection-range.interface';
/**
 * A directive which manages the start selection range.
 *
 * > You can use the DateRangeStartInputDirective only with a DateInput component.
 */
export declare class DateRangeStartInputDirective extends DateRangeInput implements OnInit, OnDestroy {
    private rangeService;
    private dateInput;
    /**
     * Specifies the auto-correction behavior. If the start date is greater than the end date,
     * the directive fixes the date range to a single date either on input change or on blur
     * ([see example]({% slug autocorrect_daterange %}#toc-configuring-input-directives)).
     *
     * By default, the component does not perform any auto-correction.
     */
    autoCorrectOn: AutoCorrectOn;
    /**
     * Specifies the navigation behavior of the calendar when the active end is changed on input focus.
     * When enabled, the calendar navigates to the value of the focused input. Otherwise, the calendar
     * displays the last picked date.
     *
     * By default, the automatic navigation behavior on input focus is disabled.
     *
     * @example
     * ```ts
     * _@Component({
     * selector: 'my-app',
     * template: `
     *  <h5>Toggle input focus to see the calendar navigating between range ends.</h5>
     *  <kendo-daterange>
     *      <kendo-dateinput kendoDateRangeStartInput [navigateCalendarOnFocus]="true" [(value)]="start"></kendo-dateinput>
     *      <kendo-dateinput kendoDateRangeEndInput [navigateCalendarOnFocus]="true" [(value)]="end"></kendo-dateinput>
     *  </kendo-daterange>
     * `
     * })
     * class AppComponent {
     *   public start: Date = new Date(2018, 3, 10);
     *   public end: Date = new Date(2018, 10, 20);
     * }
     * ```
     */
    navigateCalendarOnFocus: boolean;
    constructor(rangeService: DateRangeService, dateInput: DateInputComponent, element: ElementRef, renderer: Renderer2, zone: NgZone);
    ngOnInit(): void;
    ngOnDestroy(): void;
    protected getRange(value: Date, correctOn: AutoCorrectOn): SelectionRange;
    protected updateInputValue(range: SelectionRange): void;
}
