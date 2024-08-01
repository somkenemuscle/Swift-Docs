import Navbar from "@/components/shared/Navbar"

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div >
            <Navbar />
            <main className='auth'>
                {children}
            </main>
        </div>
    )
}

export default Layout