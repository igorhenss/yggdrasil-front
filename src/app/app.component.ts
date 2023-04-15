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

  title = 'yggdrasil-front';

  data: TreeNode[] = [];

  constructor(private http: HttpClient) {
    this.http.get<any[]>('http://localhost:9339/yggdrasil/complete-tree')
      .subscribe(result => {
        this.data = result.map(marketplaceNode => {
          return {
            label: marketplaceNode.marketplace,
            type: 'marketplace',
            styleClass: 'bg-indigo-300 text-white marketplace',
            expanded: true,
            children: marketplaceNode.nodes.map(originCategoryNode => {
              return {
                label: originCategoryNode.originCategory,
                type: 'originCategory',
                styleClass: 'bg-purple-300 text-white origin-category',
                expanded: true,
                children: originCategoryNode.leafs.map(destinyCategoryNode => {
                  return {
                  label: destinyCategoryNode.destinyCategory,
                    type: 'destinyCategory',
                    styleClass: 'bg-blue-300 text-white destiny-category',
                    data: {
                      bindCount: destinyCategoryNode.bindCount,
                      totalBindCount: destinyCategoryNode.totalBindCount,
                      bindCountPercentage: destinyCategoryNode.bindCountPercentage
                    }
                  }
                })
              };
            })
          };
        });
      });
  }

}
