import { FlatTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';

interface FoodNode {
  name: string;
  count?: number | undefined;
  peso?: number | undefined;
  tamanho?: number | undefined;
  altura?: number | undefined;
  quilo?: number | undefined;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Fruit',
    children: [
      {
        name: 'Apple',
        peso: 10,
        tamanho: 25,
        altura: 1900,
        quilo: 19890,
        count: 10,
      },
      {
        name: 'Banana',
        peso: 10,
        tamanho: 25,
        altura: 1900,
        quilo: 19890,
        count: 20,
      },
      {
        name: 'Fruit loops',
        peso: 10,
        tamanho: 25,
        altura: 1900,
        quilo: 19890,
        count: 30,
      },
    ],
  },
  {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [
          {
            name: 'Broccoli',
            peso: 10,
            tamanho: 25,
            altura: 1900,
            quilo: 19890,
            count: 10,
          },
          {
            name: 'Brussel sprouts',
            peso: 10,
            tamanho: 25,
            altura: 1900,
            quilo: 19890,
            count: 20,
          },
        ],
      },
      {
        name: 'Orange',
        children: [
          {
            name: 'Pumpkins',
            peso: 10,
            tamanho: 25,
            altura: 1900,
            quilo: 19890,
            count: 30,
          },
          {
            name: 'Carrots',
            peso: 10,
            tamanho: 25,
            altura: 1900,
            quilo: 19890,
            count: 40,
          },
        ],
      },
    ],
  },
];

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  count: number | undefined;
  peso: number | undefined;
  tamanho: number | undefined;
  altura: number | undefined;
  quilo: number | undefined;
  level: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  displayedColumns: string[] = [
    'name',
    'peso',
    'tamanho',
    'altura',
    'quilo',
    'count',
  ];

  private transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      count: node?.count,
      peso: node.peso,
      tamanho: node.tamanho,
      altura: node.altura,
      quilo: node.quilo,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    (node) => node.level,
    (node) => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this.transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}
