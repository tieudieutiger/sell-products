import { NextResponse } from "next/server";
import { getContact, updateContact } from "@/lib/contact";

export async function GET() {
    try {
        const contact = await getContact();
        return NextResponse.json(contact);
    } catch (error) {
        return NextResponse.json({ error: "Failed to load contact info" }, { status: 500 });
    }
}

export async function PUT(req: Request) {
    try {
        const data = await req.json();
        const updated = await updateContact(data);
        return NextResponse.json(updated);
    } catch (error) {
        return NextResponse.json({ error: "Failed to update contact info" }, { status: 500 });
    }
}
