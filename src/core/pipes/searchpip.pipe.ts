import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchpip'
})
export class SearchpipPipe implements PipeTransform {

  transform(arrayofobject: any[], klma:string): any[] {
    // return myArray.filter((item)=> item.title.includes(text));
    // transform(arrayofobject: any[], klma:string): any[] {

    return arrayofobject.filter((item)=>item.title.toLowerCase().includes(klma.toLowerCase()));
  }
  }


