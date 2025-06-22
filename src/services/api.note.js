const baseUrl = 'https://note-code-backend.vercel.app'
// import toast from 'react-hot-toast';

export async function createNote(obj) {
    console.log('object', obj)
    const res = await fetch(`${baseUrl}/api/snippets`, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    })

    const json = await res.json();
    if (!res.ok) throw new Error(json?.message);
    console.log('responsee', json);
    return json.data;
}