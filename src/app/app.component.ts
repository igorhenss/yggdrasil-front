import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class AppComponent {

  constructor(private http: HttpClient) { }

  title = 'yggdrasil-front';

  data: TreeNode[] = [
    {
      label: 'AMAZON',
      type: 'marketplace',
      styleClass: 'bg-indigo-500 text-white marketplace',
      expanded: true,
      children: [
        {
          label: 'MLB001',
          type: 'originCategory',
          styleClass: 'bg-purple-500 text-white origin-category',
          expanded: true,
          children: [
            {
              label: '101',
              type: 'destinyCategory',
              styleClass: 'bg-teal-500 text-white destiny-category',
              data: {
                'bindCount': 3,
                'totalBindCount': 10,
                'bindCountPercentage': 30
              }
            },
            {
              label: '102',
              type: 'destinyCategory',
              styleClass: 'bg-teal-500 text-white destiny-category',
              data: {
                'bindCount': 2,
                'totalBindCount': 10,
                'bindCountPercentage': 20
              }
            },
            {
              label: '103',
              type: 'destinyCategory',
              styleClass: 'bg-teal-500 text-white destiny-category',
              data: {
                'bindCount': 5,
                'totalBindCount': 10,
                'bindCountPercentage': 50
              }
            }
          ]
        },
        {
          label: 'MLB002',
          type: 'originCategory',
          styleClass: 'bg-purple-500 text-white origin-category',
          expanded: true,
          children: [
            {
              label: 'Toys-productType-eletronic',
              type: 'destinyCategory',
              styleClass: 'bg-teal-500 text-white destiny-category',
              data: {
                'bindCount': 9725,
                'totalBindCount': 10000,
                'bindCountPercentage': 97.25
              }
            },
            {
              label: 'Toys-productType-plushie',
              type: 'destinyCategory',
              styleClass: 'bg-teal-500 text-white destiny-category',
              data: {
                'bindCount': 275,
                'totalBindCount': 10000,
                'bindCountPercentage': 2.75
              }
            }
          ]
        }
      ]
    }
  ];
}
