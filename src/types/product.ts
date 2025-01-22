interface product {
    _id:string
    name:string
    description:string
    slug:string
    image:string
    price: number
    quantity:number
    tags:string[]
    features:string[]
    dimensions:{
        height:string
        width:string
        depth:string
    }

}