import './App.scss'
import iconBtn from './assets/icon-btn.svg'
import item1 from './assets/item1.svg'
import item2 from './assets/item2.svg'
import item3 from './assets/item3.svg'
import black_big from './assets/black_big.svg'
import gold_big from './assets/gold_big.svg'
function App() {
  return (
    <div className="wrapper">
      <div className="container__poker">
        <img className="chip__gold" src={gold_big} alt="Gold" />
        <img className="chip__black" src={black_big} alt="Black" />
        <h1 className="title">Join our exclusive tables from all over the world</h1>
        <button className="btn">
          <img src={iconBtn} /> PLAY HERE
        </button>

        <div className="card">
          <div className="card__item">
            <img src={item1} />
            <h2>
              Exclusive
              <br />
              &private
            </h2>
            
          </div>
          <div className="card__item">
            <img src={item2} />
            <h2>
              Customize
              <br />
              everything
            </h2>
            
          </div>
          <div className="card__item">
            <img src={item3} />
            <h2>
              Guaranteed
              <br />
              fair-play
            </h2>
            
          </div>
        </div>
        <h1 className="description">How to play</h1>
        <div className="steps">
          <div className="steps__item">
            <div className="arrow">
              <div></div>
            </div>
            <h2>Register your account</h2>
          </div>
          <div className="steps__item">
            <div className="arrow">
              <div></div>
            </div>
            <h2>Make a deposit</h2>
          </div>
          <div className="steps__item">
            <div className="arrow__last">
              <div></div>
            </div>
            <h2>Play and win</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
