import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Intern } from '../intern';

@Injectable({
  providedIn: 'root',
})
export class InternServiceService {
  readonly baseUrl = 'https:/localhost:44394/intern';
  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

   comparatorAscending = (a, b) => {
     a.name=a.name.toLowerCase();
     b.name=b.name.toLowerCase();
    if (a.name < b.name)
      return -1;
    if (a.name > b.name)
      return 1;
    return 0;
  };

  
  comparatorDescending = (a, b) => {
    a.name=a.name.toLowerCase();
    b.name=b.name.toLowerCase();
   if (a.name < b.name)
     return 1;
   if (a.name > b.name)
     return -1;
   return 0;
 };

  getInterns(): Observable<Intern[]> {
    return this.httpClient.get<Intern[]>(this.baseUrl, this.httpOptions);
  }

  getBackendInterns():Observable<Intern[]>
  {
    return this.httpClient
      .get<Intern[]>(this.baseUrl, this.httpOptions)
      .pipe(
        map((notes) => notes.filter((note) => note.position.includes("Backend")))
      );
  }

  getAscendingInterns():Observable<Intern[]>
  {
    return this.httpClient
      .get<Intern[]>(this.baseUrl, this.httpOptions)
      .pipe(
        map((notes) => notes.sort(this.comparatorAscending))
      );
  }

  getDescendingInterns():Observable<Intern[]>
  {
    return this.httpClient
      .get<Intern[]>(this.baseUrl, this.httpOptions)
      .pipe(
        map((notes) => notes.sort(this.comparatorDescending))
      );
  }
  getOneIntern(id:string):Observable<Intern>{
    return this.httpClient.get<Intern>(this.baseUrl+ '/' + id, this.httpOptions);
  }
  addIntern(intern: Intern) {
    
    return this.httpClient.post(this.baseUrl, intern, this.httpOptions);
  }

  deleteIntern(id: string): Observable<unknown> {
    return this.httpClient.delete(this.baseUrl + '/' + id, this.httpOptions);
  }

  editIntern(id: string, updatedIntern: Intern): Observable<any> {
    return this.httpClient.put(
      this.baseUrl + '/' + id,
      updatedIntern,
      this.httpOptions
    );
  }
}
