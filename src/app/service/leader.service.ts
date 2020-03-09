import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { of, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { baseURL } from '../shared/baseurl';
import { HttpClient } from '@angular/common/http';
import { ProcessHTTPMsgService } from '../service/process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

    getLeaders(): Observable<Leader[]>{
      return this.http.get<Leader[]>(baseURL + 'leadership')
      .pipe(catchError(this.processHTTPMsgService.handleError));
    }
  
    getLeader(id: number): Observable<Leader>{
      return this.http.get<Leader>(baseURL + 'leadership/' + id)
      .pipe(catchError(this.processHTTPMsgService.handleError));
    }
  
    getFeaturedLeader(): Observable<Leader>{
      return this.http.get<Leader[]>(baseURL + 'leadership?featured=true').pipe(map(leaders => leaders[0]))
      .pipe(catchError(this.processHTTPMsgService.handleError));
    }

    getLeaderIds(): Observable<string[] | any>{
      return this.getLeaders().pipe(map(leaders => leaders.map(leader => leader.id)))
      .pipe(catchError(this.processHTTPMsgService.handleError));
    }

}