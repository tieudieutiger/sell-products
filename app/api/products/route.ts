import { NextResponse } from "next/server";
import { getProducts, addProduct } from "@/lib/products";

export async function GET() {
    const products = await getProducts();
    return NextResponse.json(products);
}

export async function POST(req: Request) {
    const data = await req.json();
    const newProduct = await addProduct(data);
    return NextResponse.json(newProduct, { status: 201 });
}
