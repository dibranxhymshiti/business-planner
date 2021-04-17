import { HttpClient, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { createHttpParams } from '../../shared/utils/create-http-params.utils';

export abstract class BaseService<T> {
  protected resourceUrl: string;
  private dataSource = new BehaviorSubject((null as unknown) as T);
  currentData = this.dataSource.asObservable();

  changeData(data: T): void {
    this.dataSource.next(data);
  }

  protected constructor(protected http: HttpClient, entityName: string) {
    this.resourceUrl = `${environment.baseUrl}/${entityName}`;
  }

  create(entity: T): Observable<HttpResponse<T>> {
    return this.http.post<T>(`${this.resourceUrl}`, entity, {
      observe: 'response'
    });
  }

  patch(entity: T): Observable<HttpResponse<T>> {
    return this.http.patch<T>(`${this.resourceUrl}`, entity, {
      observe: 'response'
    });
  }

  read(searchValues: any): Observable<HttpResponse<{ data: T[] }>> {
    const params = createHttpParams(searchValues);

    return this.http.get<{ data: T[] }>(this.resourceUrl, {
      params,
      observe: 'response'
    });
  }

  getData(searchValues?: any): Observable<HttpResponse<T>> {
    searchValues = searchValues ? searchValues : {};
    const params = createHttpParams(searchValues);

    return this.http.get<T>(this.resourceUrl, {
      params,
      observe: 'response'
    });
  }

  find(id: number | string): Observable<HttpResponse<T>> {
    return this.http.get<T>(`${this.resourceUrl}/${id}`, {
      observe: 'response'
    });
  }

  export(searchValues: any): Observable<Blob> {
    const params = createHttpParams(searchValues);

    return this.http.get<Blob>(`${this.resourceUrl}/export`, {
      params,
      responseType: 'blob' as 'json'
    });
  }

  update(entity: T, id?: number): Observable<HttpResponse<T>> {
    return this.http.put<T>(
      `${this.resourceUrl}${id ? '/' : ''}${id ? id : ''}`,
      entity,
      {
        observe: 'response'
      }
    );
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, {
      observe: 'response'
    });
  }
}
