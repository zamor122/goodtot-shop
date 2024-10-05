import TopNav from './components/TopNav';
import './globals.css';
import {Providers} from "./Providers";

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <body className='text-foreground dark:bg-stone-700 bg-amber-50 h-full w-full'>
        <Providers>
          <main>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
