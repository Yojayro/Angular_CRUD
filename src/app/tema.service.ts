import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TemaService {
    endPoint = 'http://localhost:8000/api/tema';
    constructor(protected httpClient: HttpClient) {
    }
    public getTemas$(): Observable<any> {
        return this.httpClient.get<any>(`${this.endPoint}`);
    }
    public postTemas$(data): Observable<any> {
        return this.httpClient.post<any>(`${this.endPoint}`, data);
    }
    public updateTemas$(id, data): Observable<any> {
        return this.httpClient.put<any>(`${this.endPoint}/${id}`, data);
    }
    public deteleTemas$(id): Observable<any> {
        return this.httpClient.delete<any>(`${this.endPoint}/${id}`);
    }    
    
}
