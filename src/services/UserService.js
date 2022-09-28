
export async function getAllUsers() {

    try {
        const response = await fetch(`${process.env.REACT_API1_URL}/api/users`);
        return await response.json();
    } catch (error) {
        return [];
    }

}

export async function createUser(data) {
    const response = await fetch(`${process.env.REACT_API1_URL}/api/user`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user: data })
    });
    return await response.json();
}