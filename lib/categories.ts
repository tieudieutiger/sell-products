import { readJSON, writeJSON } from "./data";

export interface Category {
    id: string;
    name: string;
}

const FILE_NAME = "categories.json";

export async function getCategories(): Promise<Category[]> {
    return await readJSON<Category[]>(FILE_NAME);
}

export async function addCategory(name: string) {
    const categories = await getCategories();
    const newCat: Category = {
        id: `cat_${Date.now()}`,
        name,
    };
    categories.push(newCat);
    await writeJSON(FILE_NAME, categories);
    return newCat;
}

export async function deleteCategory(id: string) {
    const categories = await getCategories();
    const updated = categories.filter((c) => c.id !== id);
    await writeJSON(FILE_NAME, updated);
}
