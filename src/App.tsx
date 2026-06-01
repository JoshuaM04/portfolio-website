import Header from './components/Header.tsx'
import Main from './components/Main.tsx'
import Footer from './components/Footer.tsx'

export default function App() {
  return (
    <div className="bg-neutral min-h-dvh flex justify-center p-10">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}