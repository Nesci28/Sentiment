import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs/internal/Observable";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  analyse(text: string): Observable<any> {
    return this.httpClient.post<any>(
      `${environment.url}/api/v1/sentiment/getSentiment`,
      { text }
    );
  }
}
