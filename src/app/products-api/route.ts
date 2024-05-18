import { NextRequest } from "next/server";
import { products } from "./data"
export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get("query")?.toString()
    const filteredProducts = query ?
        products.filter((product) => product.name.includes(query)) : products
    console.log(query)
    return Response.json(filteredProducts)
}
export async function POST(request: Request) {
    const product = await request.json()
    const newProduct = {
        id: products.length + 1,
        name: product.name,
        type: product.type,
    }
    products.push(newProduct);
    return new Response(JSON.stringify(newProduct), {
        headers: {
            'context-Type': "application/json"
        },
        status: 201
    })
}