import { TemplateRef } from '@angular/core';
/**
 * Used for rendering the header title of the Calendar. To define the header title template, nest an `<ng-template>` tag
 * with the `kendoCalendarHeaderTitleTemplate` directive inside the component tag. The template context is set to the
 * current component. To get a reference to the current title, use the `let-title` directive. To provide more details about
 * the current title, get a reference to the current `date` by using the `let-date` directive or get a reference to the
 * current active view  by using the `let-activeView` directive.
 *
 * For more examples, refer to the article on [templates]({% slug templates_calendar %}).
 *
 * @example
 * ```ts
 * _@Component({
 * selector: 'my-app',
 * styles: ['.custom { color: red; }'],
 * template: `
 *  <kendo-calendar>
 *    <ng-template kendoCalendarHeaderTitleTemplate let-title>
 *      <span class="custom">{{title}}</span>
 *    </ng-template>
 *  </kendo-calendar>
 * `
 * })
 * class AppComponent { }
 * ```
 */
export declare class HeaderTitleTemplateDirective {
    templateRef: TemplateRef<any>;
    constructor(templateRef: TemplateRef<any>);
}
