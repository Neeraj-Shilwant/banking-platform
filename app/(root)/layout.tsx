import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/ui/MobileNav";
import Image from "next/image";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedin = {firstname : 'Adrian',lastname : 'JSM'};
  return (
    <main className="flex h-screen w-full font-inter">
        <Sidebar user={loggedin}/>
        <div className="flex size-full flex-col">
          <div className="root-layout">
            <Image src='/icons/logo.svg' width={30} height={30} alt="menu icon"/>
            <div >
              <MobileNav user={loggedin}/>
            </div>
          </div>
          {children}
        </div>
        
        
    </main>
  );
}
