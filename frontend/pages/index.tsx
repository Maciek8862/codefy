import { useEffect } from 'react';

export default function Home() {
    useEffect(() => {
        async function fetchMessage() {
            try {
                const res = await fetch('https://codefy-qqlw.onrender.com/messages/1');
                const data = await res.json();
                alert(data.content); // Wyświetla w przeglądarce wartość z Supabase
            } catch (err) {
                console.error('Error fetching message:', err);
            }
        }

        fetchMessage();
    }, []);

    return <div></div>; // Pusta strona
}
