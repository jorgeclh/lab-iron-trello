import { List } from '../../list/list.model';
import { Card } from '../../card/card.model';

export interface GenericResponse {
    message: string;
    error?: string;
    list?: List;
    card?: Card;
}
