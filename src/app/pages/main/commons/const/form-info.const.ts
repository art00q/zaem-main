import { SafeHtml } from "@angular/platform-browser";

export const FORM_INFO: {
    text: string | SafeHtml;
    status: string;
}[] = [
    {
        text: 'Входим в <strong>ТОП 20</strong> банки.ру',
        status: 'active'
    },
    {
        text: 'Каждый шестой займ под <strong>0%</strong>',
        status: ''
    },
    {
        text: 'Кэшбэк до <strong>10 080 руб</strong> за займ',
        status: ''
    },
    {
        text: 'Ставка <strong>0.4%</strong> со второго займа',
        status: ''
    },
    {
        text: '<strong>Дарим</strong> деньги и айфоны',
        status: 'prev'
    }
];