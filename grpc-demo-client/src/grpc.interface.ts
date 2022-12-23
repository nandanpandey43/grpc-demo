import { Observable } from 'rxjs';

// export interface IGrpcService {
//   accumulate(numberArray: INumberArray): Observable<any>;
//   greeting(messageToGreet: GreetData): Observable<any>;
// }
export interface IGrpcService {
  accumulate(numberArray: any): Observable<any>;
  greeting(greetingName: GreetData): Observable<any>;
}
export interface IGrpcServiceGreeting {
  greeting(greetingName: GreetData): Observable<any>;
}

interface INumberArray {
  data: number[];
}
// interface INumberArray {
//   data1: number[];
// }

interface GreetData {
  data: string;
}
