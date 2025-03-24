import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'

function App() {

  const links = [
    { name: 'CHARACTERS', url: 'http://characters' },
    { name: 'COMICS', url: 'http://comics' },
    { name: 'MOVIES', url: 'http://movies' },
    { name: 'TV', url: 'http://tv' },
    { name: 'GAMES', url: 'http://games' },
    { name: 'COLLECTIBLES', url: 'http://collectibles' },
    { name: 'VIDEOS', url: 'http://videos' },
    { name: 'FANS', url: 'http://fans' },
    { name: 'NEWS', url: 'http://news' },
    { name: 'SHOP', url: 'http://shop' }
  ];

  return (
    <>
      <Header links={links} />
      <Main />
      <Footer />
    </>
  )
}

export default App
