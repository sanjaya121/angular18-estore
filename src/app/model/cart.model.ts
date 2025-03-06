

export interface CartItem{
    id:number,
    name:string,
    price:number,
    quantity:number
}

export interface Cart{
    id:number,
    items:CartItem
}