import { readJSON, writeJSON } from "./data";

export interface ContactInfo {
    address: string;
    phone: string;
    email: string;
    facebook?: string;
    zalo?: string;
}

const FILE_NAME = "contact.json";

export async function getContact(): Promise<ContactInfo> {
    return await readJSON<ContactInfo>(FILE_NAME);
}

export async function updateContact(data: ContactInfo) {
    await writeJSON(FILE_NAME, data);
    return data;
}
