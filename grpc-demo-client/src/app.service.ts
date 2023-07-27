import { HttpService } from '@nestjs/axios/dist/http.service';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs/operators';


@Injectable()
export class AppService {

  constructor(private readonly httpService: HttpService) { }

  getHello(): string {
    return 'Hello World!';
  }

  restAdd(data: number[]) {
    return this.httpService.get('http://localhost:3001/rest-add', {
      data: data
    })
      .pipe(map((response) => response.data))
  }
}
