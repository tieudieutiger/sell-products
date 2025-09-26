export default function ClientLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-blue-600 text-white p-4">
                <div className="container mx-auto text-lg font-bold">
                    My Product Website
                </div>
            </header>
            <main className="flex-1 container mx-auto p-4">{children}</main>
            <footer className="bg-gray-100 text-center p-4 text-sm text-gray-600">
                © 2025 My Company
            </footer>
        </div>
    );
}
