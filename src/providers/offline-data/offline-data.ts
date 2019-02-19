import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MenuFoods } from '../../models/interfaces';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
@Injectable()
export class OfflineDataProvider {
  lunch = [
    {title: 'Arroz com feijão', type:'carnes', details: 'Acompanhar com vinho', description: 'Arroz, feijão, salada, batatas frita, milho e alface', image:'../../assets/lunch/lunch'},
    {title: 'Arroz com feijão', type:'carnes', details: 'Acompanhar com vinho', description: 'Arroz, feijão, salada, batatas frita, milho e alface', image:'../../assets/lunch/lunch'},
    {title: 'Arroz com feijão', type:'carnes', details: 'Acompanhar com vinho', description: 'Arroz, feijão, salada, batatas frita, milho e alface', image:'../../assets/lunch/lunch'},
    {title: 'Arroz com feijão', type:'carnes', details: 'Acompanhar com vinho', description: 'Arroz, feijão, salada, batatas frita, milho e alface', image:'../../assets/lunch/lunch'},
    {title: 'Arroz com feijão', type:'carnes', details: 'Acompanhar com vinho', description: 'Arroz, feijão, salada, batatas frita, milho e alface', image:'../../assets/lunch/lunch'},
    {title: 'Arroz com feijão', type:'carnes', details: 'Acompanhar com vinho', description: 'Arroz, feijão, salada, batatas frita, milho e alface', image:'../../assets/lunch/lunch'},
    {title: 'Arroz com feijão', type:'carnes', details: 'Acompanhar com vinho', description: 'Arroz, feijão, salada, batatas frita, milho e alface', image:'../../assets/lunch/lunch'},

  ]


  constructor(public http: HttpClient) {
    console.log('Hello OfflineDataProvider Provider');
    // this.getLocalData();
  }

  getLocalData() {
    console.log(this.http.get('assets/data/data.json'));

    return this.http.get('assets/data/data.json');

  }



}
