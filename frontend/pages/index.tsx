import { useEffect } from 'react';

export default function Home() {
    useEffect(() => {
        const fetchMessage = async () => {
            try {
                const res = await fetch('https://codefy-qqlw.onrender.com/messages');
                const data = await res.json();
                alert(data.content); // Alert z content id=1
            } catch (err) {
                console.error(err);
            }
        };
        fetchMessage();
    }, []);

    return <div></div>; // Pusta strona
}
