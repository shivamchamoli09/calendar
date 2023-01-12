/// <reference types="react" />
export interface CalendarPropsInterface {
    type: 'date' | 'month' | 'year';
    onChange?: (value: string) => void;
}
export default function Calendar(props: CalendarPropsInterface): JSX.Element;
