import { promises as fs } from "fs";
import path from "path";

const dataDir = path.join(process.cwd(), "data");

/**
 * Đọc JSON từ file
 */
export async function readJSON<T>(filename: string): Promise<T> {
    const filePath = path.join(dataDir, filename);
    const content = await fs.readFile(filePath, "utf-8");
    return JSON.parse(content) as T;
}

/**
 * Ghi JSON vào file
 */
export async function writeJSON<T>(filename: string, data: T): Promise<void> {
    const filePath = path.join(dataDir, filename);
    await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf-8");
}
