// I'm stupid and lazy, so...
import { User } from "@/components/admin/user-table";

export function generateRandomString(length: number): string {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

// Function to generate a random user
export function generateRandomUser(id: number): User {
    const name = generateRandomString(8); // Random name
    const email = `${name}@example.com`; // Random email
    const username = generateRandomString(6); // Random username
    return { id, name, email, username };
}