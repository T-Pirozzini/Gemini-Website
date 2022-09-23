import About from "../components/About";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact"
import MediaCard from "../components/MediaCard"

export default function Home() {
  return (
    <div>
      <Navbar />
      <About /> 
      <Contact />
      <MediaCard />   
    </div>
  )
}
