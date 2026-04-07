import Link from "next/link";


export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">

      <div className="text-center space-y-6 px-4 max-w-xl">
        <h1 className="text-4xl font-bold">CantaBoard</h1>
        <p className="text-lg text-gray-600">Mi primer dashboard SaaS</p>

        <div className="felx justify-center gap-4">
          <div className="flex gap-4 justify-center">
            <Link href="/login" className="px-4 py-2 rounded bg-black text-white border border-black hover:bg-gray-700 transition duration-200">
              Login
            </Link>
            <Link href="/register" className="px-4 py-2 rounded bg-gray-400 text-black border border-black hover:bg-gray-100 transition duration-200">
              Registro
            </Link>
            <Link href="/register" className="px-4 py-2 rounded bg-gray-300 text-black border border-black hover:bg-gray-100 transition duration-200">
              Dashboard
            </Link>
          </div>

        </div>
      </div>
    </main>
  );
}
