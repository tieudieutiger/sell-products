import { NextResponse } from "next/server";
import { getProducts, addProduct } from "@/lib/products";

export async function GET() {
    try {
        const products = await getProducts();
        return NextResponse.json(products);
    } catch (error) {
        return NextResponse.json({ error: "Failed to load products" }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const data = await req.json();

        // Validate basic
        if (!data.title || !data.price) {
            return NextResponse.json({ error: "Title and price are required" }, { status: 400 });
        }

        const newProduct = await addProduct(data);
        return NextResponse.json(newProduct, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to create product" }, { status: 500 });
    }
}
