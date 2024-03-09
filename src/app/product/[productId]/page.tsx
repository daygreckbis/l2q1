export default function ProductDetails(
    {params} : {params : any}
){
    return(<h1>Product number {params.productId} details</h1>)
}