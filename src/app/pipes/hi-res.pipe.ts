import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'hiRes'
})
export class HiResPipe implements PipeTransform {
    transform(value: any) {
        return value.substr(0, value.length - 5) + ".JPG";
    }
}
