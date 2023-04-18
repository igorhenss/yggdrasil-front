import { HttpClient } from '@angular/common/http';
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

  showTreeByMarketplace = false;
  showTreeByCategory = false;
  isLoading = false;

  data: TreeNode[] = [];

  constructor(private http: HttpClient) {}

  showCategoryTreeByMarketplace() {
    this.showTreeByCategory = false;
    this.showTreeByMarketplace = true;
    this.isLoading = true;

    this.http.get<any[]>('http://localhost:9339/yggdrasil/complete-tree/by-marketplace')
      .subscribe(result => {
        this.isLoading = false;

        this.data = [
          {
            label: 'Yggdrasil',
            type: 'rooty',
            styleClass: 'rooty',
            expanded: true,
            children: result.map(node => {
              return {
                label: node.label,
                type: 'marketplace',
                styleClass: 'marketplace',
                expanded: true,
                children: node.children.map(innerNode => {
                  return {
                    label: innerNode.label,
                    type: 'originCategory',
                    styleClass: 'origin-category',
                    expanded: true,
                    children: innerNode.children.map(leafNode => {
                      return {
                        label: leafNode.destinyCategory,
                        type: 'destinyCategory',
                        styleClass: 'destiny-category',
                        data: {
                          bindCount: leafNode.bindCount,
                          totalBindCount: leafNode.totalBindCount,
                          bindCountPercentage: leafNode.bindCountPercentage
                        }
                      }
                    })
                  };
                })
              };
            })
          }
        ]
      });
  }

  showCategoryTreeByCategory() {
    this.showTreeByCategory = true;
    this.showTreeByMarketplace = false;
    this.isLoading = true;

    this.http.get<any[]>('http://localhost:9339/yggdrasil/complete-tree/by-category')
      .subscribe(result => {
        this.isLoading = false;

        this.data = [
          {
            label: 'Yggdrasil',
            type: 'rooty',
            styleClass: 'rooty',
            expanded: true,
            children: result.map(node => {
              return {
                label: node.label,
                type: 'originCategory',
                styleClass: 'marketplace',
                expanded: true,
                children: node.children.map(innerNode => {
                  return {
                    label: innerNode.label,
                    type: 'marketplace',
                    styleClass: 'origin-category',
                    expanded: true,
                    children: innerNode.children.map(leafNode => {
                      return {
                        label: leafNode.destinyCategory,
                        type: 'destinyCategory',
                        styleClass: 'destiny-category',
                        data: {
                          bindCount: leafNode.bindCount,
                          totalBindCount: leafNode.totalBindCount,
                          bindCountPercentage: leafNode.bindCountPercentage
                        }
                      }
                    })
                  };
                })
              };
            })
          }
        ]
      });
  }

}
