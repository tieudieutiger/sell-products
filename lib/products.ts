import { readJSON, writeJSON } from "./data";

export interface Product {
    id: string;
    title: string;
    price: number;
    salePrice?: number | null;
    categories: string[];
    description?: string;
    images: string[];
    createdAt: string;
    updatedAt: string;
}

const FILE_NAME = "products.json";

/** Lấy danh sách sản phẩm */
export async function getProducts(): Promise<Product[]> {
    return await readJSON<Product[]>(FILE_NAME);
}

/** Lấy sản phẩm theo ID */
export async function getProductById(id: string): Promise<Product | null> {
    const products = await getProducts();
    return products.find((p) => p.id === id) || null;
}

/** Thêm sản phẩm mới */
export async function addProduct(newProduct: Omit<Product, "id" | "createdAt" | "updatedAt">) {
    const products = await getProducts();
    const product: Product = {
        ...newProduct,
        id: `prod_${Date.now()}`,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    };
    products.push(product);
    await writeJSON(FILE_NAME, products);
    return product;
}

/** Cập nhật sản phẩm */
export async function updateProduct(id: string, data: Partial<Product>) {
    const products = await getProducts();
    const index = products.findIndex((p) => p.id === id);
    if (index === -1) return null;

    products[index] = {
        ...products[index],
        ...data,
        updatedAt: new Date().toISOString(),
    };

    await writeJSON(FILE_NAME, products);
    return products[index];
}

/** Xóa sản phẩm */
export async function deleteProduct(id: string) {
    const products = await getProducts();
    const updated = products.filter((p) => p.id !== id);
    await writeJSON(FILE_NAME, updated);
}
