import { Input } from './components/ui/input'
import { Button } from './components/ui/button'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Form() {
    const [email, setEmail] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        localStorage.setItem('formData', JSON.stringify({ email, username, password }));
        navigate('/result');
    };
    return (
        <div className=' flex items-center flex-col bg-zinc-300 h-screen scale-110'>
            <h1 className="text-center font-bold mt-5 text-[2rem] text-black py-4">Assignment Form</h1>
            <form onSubmit={handleSubmit} className="w-72 flex flex-col items-center gap-y-2 ">
                <Input type="text" value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required className=" rounded-xl font-semibold text-lg py-2" placeholder="Username" />
                <Input type="email" value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required className=" rounded-xl font-semibold text-lg p-2" placeholder="Email" />
                <Input type="password" value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required className=" rounded-xl font-semibold text-lg p-2" placeholder="Password" />
                <Button type='submit' className="bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl w-fit">Submit</Button>
            </form>
        </div>
    )
}
