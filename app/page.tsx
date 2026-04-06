import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <h1>CantaBoard</h1>
        <p>Mi primer dashboard SaaS</p>
        <div>
          <a href="/login">Ir a login</a>
        </div>

        <div>
          <a href="/register">Ir a registro</a>
        </div>
      </main>
    </div>
  );
}
