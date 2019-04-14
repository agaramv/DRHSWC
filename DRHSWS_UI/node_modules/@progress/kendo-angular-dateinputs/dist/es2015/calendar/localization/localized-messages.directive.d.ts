import { LocalizationService } from '@progress/kendo-angular-l10n';
import { Messages } from './calendar-messages';
/**
 * @hidden
 */
export declare class LocalizedMessagesDirective extends Messages {
    protected service: LocalizationService;
    constructor(service: LocalizationService);
}
