import { Pipe, PipeTransform } from '@angular/core';

export interface KeyValuePair {
    key: string;
    value: any;
}

@Pipe({
    name: 'keyValue'
})
export class KeyValuePipe implements PipeTransform {

    transform(value: any, args?: any): KeyValuePair[] {
        return Object.keys(value || {}).map(k => {
            return {
                key: k,
                value: value[k]
            };
        });
    }

}
