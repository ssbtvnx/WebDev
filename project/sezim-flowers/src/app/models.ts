export interface BouquetCategory {
    name: string;
}

export interface Bouquet {
    name: string;
    description: string;
    price: number;
    quantity: number;
    in_stock: boolean;
    image: string;
    category: BouquetCategory;
}

export interface Order {
    order_number: number;
    total: number;
    address: string;
    phone_number: string;
    customer_name: string;
    user: User | null;
}

export interface OrderItem {
    quantity: number;
    bouquet: Bouquet;
}

export interface User {
    // Определите свойства пользователя здесь
}

export interface Token {
    access: string;
    refresh: string;
}