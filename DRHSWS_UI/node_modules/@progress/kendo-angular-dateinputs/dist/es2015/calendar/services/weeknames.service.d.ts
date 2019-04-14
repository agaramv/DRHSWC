import { IntlService } from '@progress/kendo-angular-intl';
/**
 * @hidden
 */
export declare class WeekNamesService {
    private intl;
    constructor(intl: IntlService);
    getWeekNames(includeWeekNumber?: boolean): string[];
}
