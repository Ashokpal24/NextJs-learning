import { products } from "../data";
export async function GET(request: Request, { params }: { params: { id: string } }) {
    const reqProduct = products.find((product) => product.id === parseInt(params.id))
    return Response.json(reqProduct)
}
export async function PATCH(request: Request, { params }: { params: { id: string } }) {
    const index = products.findIndex((product) => product.id === parseInt(params.id))
    const body = await request.json()
    products[index].name = body.name
    products[index].type = body.type
    return Response.json(products[index])
}
export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    const index = products.findIndex((product) => product.id === parseInt(params.id))
    const deletedComment = products[index]
    products.splice(index, 1)
    return Response.json(deletedComment)
}
