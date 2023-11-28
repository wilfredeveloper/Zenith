import bg from '/bg.jpg'
import bg2 from '/2.jpg'
import './index.css'
import Navbar from './components/navbar/navbar'
import CTAButton from './components/button/button'

function App() {

  return (
    <main>
      <div className="section section-1">
        <div className="hero-text">
          <h1 className='main-text'>ZENITH</h1>
          <p className='tag'>BEHIND THE DISHES</p>
        </div>
      </div>
      <div className="section section-2">
        <div className="overlay"></div>
        <div className="text-block">
          <h3 className='section-heading'>Who We Are</h3>
          <p className='section-descritption'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur inventore perspiciatis odio dolore possimus numquam tenetur, maxime voluptates, unde, iusto repellat quas dolor iure veniam nemo asperiores. Error necessitatibus illo sit natus modi corrupti autem adipisci possimus quo consequuntur quod eveniet magni ipsa aut, numquam dolore soluta aperiam vero atque sequi, quos vitae in aliquam porro! Consequatur, eligendi? Culpa sequi consequuntur, magnam ipsum saepe enim ipsam numquam sed !</p>
        <CTAButton />
        </div>
      </div>
      <div className="section section-3">
        <div className="overlay"></div>
        <div className="text-block">
          <h3 className='section-heading'>What we do</h3>
          <p className='section-descritption'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur inventore perspiciatis odio dolore possimus numquam tenetur, maxime voluptates, unde, iusto repellat quas dolor iure veniam nemo asperiores. Error necessitatibus illo sit natus modi corrupti autem adipisci possimus quo consequuntur quod eveniet magni ipsa aut, numquam dolore soluta aperiam vero atque sequi, quos vitae in aliquam porro! Consequatur, eligendi? Culpa sequi consequuntur, magnam ipsum saepe enim ipsam numquam sed !</p>
        </div>
      </div>
    </main>
  )
}

export default App
