import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  transform(image: any[]) {
    if(!image){
      return 'assets/img/noimage.png';
    }else if( image.length > 0){
       return image[0].url;
    }else{
      return 'assets/img/noimage.png';
    }
  }

}
