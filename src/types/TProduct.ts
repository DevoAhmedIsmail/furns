type TProduct = {
    id: string
    name: string
    price: number
    "old-price"?: number
    img: string
    description: string
    discount?: string,
    add_new?: string,
    category?: string
}

export default TProduct;