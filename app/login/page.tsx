import Link from 'next/link';
export default function LoginPage() {
    return (
        <main className="min-h-screen flex items-center justify-center px-4 bg-gray-100">

            <div className='bg-white w-full max-w-md rounded-xl border p-6 shadow-sm space-y-6'>
                <h1 className="text-2xl font-bold text-center">Login</h1>

                <form action="" className='space-y-6'>
                    <label htmlFor="email" className="block text-sm font-medium">Email</label>
                    <input id="email" type="email" className='w-full border rounded px-3 py-2' />

                    <label htmlFor="password" className="block text-sm font-medium">Password</label>
                    <input id="password" type="password" className='w-full border rounded px-3 py-2'/>

                    <button type="submit" className='w-full bg-black text-white rounded px-4 py-2 hover:bg-gray-800 transition duration-200'>Login</button>
                </form>
                <div className="flex justify-center gap-4 text-sm text-gray-600">
                    <Link href="/register" className="hover:text-black hover:underline">Register</Link>
                    <Link href="/" className="hover:text-black hover:underline">Home</Link>
                </div>
            </div>

        </main>
    );
}
