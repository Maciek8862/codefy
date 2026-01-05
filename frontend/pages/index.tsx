import { useState } from 'react';

export default function Home() {
    const [count, setCount] = useState(1);

    const handleClick = async () => {
        try {
            const res = await fetch('https://codefy-qqlw.onrender.com/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ content: count.toString() }),
            });
            
            if (res.ok) {
                setCount(count + 1);
            } else {
                console.error('Error creating message:', res.statusText);
            }
        } catch (err) {
            console.error('Error creating message:', err);
        }
    };

    return (
        <div className="relative min-h-screen">
            <button
                onClick={handleClick}
                className="absolute top-8 left-8 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
            >
                Click
            </button>
        </div>
    );
}
