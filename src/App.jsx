import Body from "./components/Body"
import Footer from "./components/Footer"
import Header from "./components/Header"

function App() {
 
  return (
    <>
     <div className="bg-purple-300 min-h-screen px-7 py-3.5 flex flex-col gap-16 md:py-7 md:px-7 md:justify-between lg:px-16 lg:py-10">
      <Header/>
      <Body/>
      <Footer/>
       </div>

    </>
  )
}

export default App
