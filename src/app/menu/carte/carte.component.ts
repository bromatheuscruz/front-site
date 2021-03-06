import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  categories: any[] = [
    {
      title: 'PROMOÇÃO 30%', products: [
        {
          name: 'Hamburguer Artesanal bom de bom', currentPrice: '30,00', description: 'Artesanal', oldPrice: '80,00', img: '../../../assets/imgs/hamburguers/hamb1.jpg'
        },
        {
          name: 'Haburguer feito com amor', currentPrice: '25,80', description: 'Amável', oldPrice: '80,00', img: '../../../assets/imgs/hamburguers/hamb2.jpg'
        }
      ]
    },
    {
      title: 'SANDUÍCHES', products: [
        {
          name: 'Sanduíche 1', currentPrice: '20,99', description: 'Descrição 1', oldPrice: '80,00', img: '../../../assets/imgs/hamburguers/hamb3.jpg'
        },
        {
          name: 'Sanduíche 2', currentPrice: '19,99', description: 'Descrição 2', oldPrice: '80,00', img: '../../../assets/imgs/hamburguers/hamb4.jpg'
        },
        {
          name: 'Sanduíche 3', currentPrice: '10,99', description: 'Descrição 3', oldPrice: '80,00', img: '../../../assets/imgs/hamburguers/hamb5.jpg'
        }
      ]
    },
    {
      title: 'Gelados', products: [
        {
          name: 'Sanduíche 1', currentPrice: '20,99', description: 'Descrição 1', oldPrice: '80,00', img:'../../../assets/imgs/hamburguers/hamb6.jpg'
        },
        {
          name: 'Sanduíche 2', currentPrice: '19,99', description: 'Descrição 2', oldPrice: '80,00', img: '../../../assets/imgs/hamburguers/hamb1.jpg'
        },
        {
          name: 'Sanduíche 3', currentPrice: '10,99', description: 'Descrição 3', oldPrice: '80,00', img: '../../../assets/imgs/hamburguers/hamb2.jpg'
        }
      ]
    }
  ]
}
