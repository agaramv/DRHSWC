/**
 * The exported package module.
 *
 * The package exports:
 * - `DateRangeComponent`&mdash;The DateRange component class.
 * - `DateRangePopupComponent`&mdash;The DateRangePopup component class.
 * - `DateRangeSelectionDirective`&mdash;The MultiviewCalendar date range selection directive.
 * - `DateRangeEndInputDirective`&mdash;The end DateInput date range selection directive.
 * - `DateRangeStartInputDirective`&mdash;The start DateInput date range selection directive.
 * - `DateRangePopupTemplateDirective`&mdash;The DateRangePopup content template directive.
 * - `MultiViewCalendarModule`&mdash;The MultiViewCalendar module.
 *
 * @example
 *
 * ```ts-no-run
 * // Import the DateRange module
 * import { DateRangeModule } from '@progress/kendo-angular-dateinputs';
 *
 * // The browser platform with a compiler
 * import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
 *
 * import { NgModule } from '@angular/core';
 *
 * // Import the app component
 * import { AppComponent } from './app.component';
 *
 * // Define the app module
 * _@NgModule({
 *     declarations: [AppComponent], // declare app component
 *     imports:      [BrowserModule, DateRangeModule], // import DateRange module
 *     bootstrap:    [AppComponent]
 * })
 * export class AppModule {}
 *
 * // Compile and launch the module
 * platformBrowserDynamic().bootstrapModule(AppModule);
 *
 * ```
 */
export declare class DateRangeModule {
}
