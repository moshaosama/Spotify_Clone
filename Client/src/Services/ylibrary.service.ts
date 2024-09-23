import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class YlibraryService {
  Links = [
    {
      name: 'Legal',
    },
    {
      name: 'Safety & Privacy Center',
    },
    {
      name: 'Privacy Policy',
    },
    {
      name: 'Cookies',
    },
    {
      name: 'About Ads',
    },
    {
      name: 'Accessibility',
    },
  ];
}
