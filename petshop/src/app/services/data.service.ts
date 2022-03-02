import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../models/product.model';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    public url = 'http://127.0.0.1:3000/v1';

    constructor(private http: HttpClient) { }

    public composeHeaders() {
        const token = localStorage.getItem('petshop.token') || '';
        //const headers = new HttpHeaders().set('x-access-token',token);
        const headers = new HttpHeaders().set('Authorization', `bearer ${token}`);
        return headers;
    }

    getProducts() {
        return this.http.get<Product[]>(`${this.url}/products`);
    }

    authenticate(data: any) {
        return this.http.post(`${this.url}/accounts/authenticate`, data);
    }

    refreshToken(data: any) {
        return this.http.post(
            `${this.url}/accounts/refresh-token`,
            null,
            { headers: this.composeHeaders() }
        );
    }

    create(data: any) {
        return this.http.post(`${this.url}/accounts`,data);
    }
}