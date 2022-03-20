import { CartItem } from "../models/cart-item.model";
import { Cart } from "../models/cart.model";

export class CartUtil {

    public static get(): Cart {
        // recuperar os dados do local storage
        const data = localStorage.getItem('petshopcart');

        // caso não hajam dados, retorna um novo carrinho
        if (!data)
            return new Cart();

        // caso hajam dados, retorna o carrinho
        return JSON.parse(data);
    }

    public static add(id: string, product: string, quantity: number, price: number, image: string[]) {
        // obtem o carrinho
        let cart = this.get();

        // gera o novo item
        const item = new CartItem(id, product, quantity, price, image);

        // adiciona ao carrinho
        cart.items.push(item);

        // salva no localStorage
        // localStorage.setItem('petshopcart', JSON.stringify(cart));
        this.update(cart);
    }

    public static update(cart: Cart) {
        // salva no localStorage
        localStorage.setItem('petshopcart', JSON.stringify(cart))
    }

    public static clear() {
        localStorage.removeItem('petshopcart');
    }
}