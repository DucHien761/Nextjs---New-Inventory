import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Project Management App',
  description: 'Manage your projects efficiently',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${inter.className} bg-gray-100 text-gray-900`}>
        <header className="bg-gray-200 text-white p-4 shadow-lg">
          <div className=" mx-auto">
            <h1 className="text-xl font-bold">Project Management App</h1>
          </div>
        </header>
        <main className=" mx-auto p-6">{children}</main>
				<footer className="bg-gray-200 text-white p-4 shadow-lg">
					<div className="container mx-auto">
						<p>&copy; {new Date().getFullYear()} Project Management App</p>
					</div>
				</footer>
      </body>
    </html>
  );
}
