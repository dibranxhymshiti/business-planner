import { HttpClient, HttpResponse } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import { ClientProfile } from 'src/app/models/client/client-profile.model';
import { CountryCode } from 'src/app/models/properties/country-code.model';
import { AnnouncementService } from '../announcement/announcement.service';
import { ClientProfileService } from '../client-profile/client-profile.service';
import { PropertyService } from '../property/property.service';
import { announcementMock } from '../../mocks/announcement.mock';
import { mockClientProfile } from '../../mocks/client-profile.mock';
import { mockCountriesData } from '../../mocks/property.mock';
import { AnnouncementModel } from '../../models/messages/announcement-details.model';

describe('BaseService', () => {
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: []
    });
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should find the announcements successful', inject(
    [HttpClient],
    (http: HttpClient) => {
      let service: AnnouncementService;
      service = new AnnouncementService(http);
      service.find(1).subscribe((data: HttpResponse<AnnouncementModel>) => {
        expect(data.body).toEqual(announcementMock);
      });
      const req = httpMock.expectOne(
        `https://aument-dev-api.abc-techgroup.com/v1/announcements/1`,
        'call to api'
      );
      expect(req.request.method).toBe('GET');
      req.flush(announcementMock);

      httpMock.verify();
    }
  ));

  it('should delete the announcements successful', inject(
    [HttpClient],
    (http: HttpClient) => {
      let service: AnnouncementService;
      service = new AnnouncementService(http);
      service.delete(1).subscribe((data: HttpResponse<AnnouncementModel>) => {
        expect(data.body).toEqual(announcementMock);
      });
      const req = httpMock.expectOne(
        `https://aument-dev-api.abc-techgroup.com/v1/announcements/1`,
        'call to api'
      );
      expect(req.request.method).toBe('DELETE');
      req.flush(announcementMock);

      httpMock.verify();
    }
  ));

  it('should read the data successful', inject(
    [HttpClient],
    (http: HttpClient) => {
      let service: PropertyService;
      service = new PropertyService(http);
      service
        .read({})
        .subscribe((data: HttpResponse<{ data: CountryCode[] }>) => {
          expect(data.body).toEqual({ data: mockCountriesData });
        });
      const req = httpMock.expectOne(
        `https://aument-dev-api.abc-techgroup.com/v1/properties/country-codes`,
        'call to api'
      );
      expect(req.request.method).toBe('GET');
      req.flush({ data: mockCountriesData });

      httpMock.verify();
    }
  ));

  it('should get the data successful', inject(
    [HttpClient],
    (http: HttpClient) => {
      let service: ClientProfileService;
      service = new ClientProfileService(http);
      service.getData().subscribe((data: HttpResponse<ClientProfile>) => {
        expect(data.body).toEqual(mockClientProfile);
      });
      const req = httpMock.expectOne(
        `https://aument-dev-api.abc-techgroup.com/v1/client-profile`,
        'call to api'
      );
      expect(req.request.method).toBe('GET');
      req.flush(mockClientProfile);

      httpMock.verify();
    }
  ));
});
