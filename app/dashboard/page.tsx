export default function DashboardPage() {
    return (
        <main className="min-h-screen bg-gray-100 px-4 py-10">

            <div className="max-w-5xl mx-auto space-y-8">
                <div  className="space-y-2">
                    <h1 className="text-3xl font-bold">Dashboard</h1>
                    <p className="text-gray-600">Aquí gestionarás tus tareas</p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    <div className="bg-white border rounded-xl shadow-sm p-6">
                        <h2 className="text-xl font-semibold">Crear tarea</h2>
                        <p>Aqui podras crear nuevas tareas</p>
                    </div>
                    <div className="bg-white border rounded-xl shadow-sm p-6">
                        <h2 className="text-xl font-semibold">Lista de tareas</h2>
                        <p>Aquí podrás ver tus tareas</p>
                    </div>
                </div>
            </div>

        </main>
    );
}