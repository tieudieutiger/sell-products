import { NextResponse } from "next/server";
import { deleteCategory } from "@/lib/categories";

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
    try {
        await deleteCategory(params.id);
        return NextResponse.json({ message: "Category deleted" });
    } catch (error) {
        return NextResponse.json({ error: "Failed to delete category" }, { status: 500 });
    }
}
