import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="logo_x_white.png" className="App-logo" alt="logo" />
        <h1>Why Starlink</h1>
        <h2>Anup Kaundinya</h2>
        <h2>Cooper Oatess</h2>
        <h2>Jung Woo Kim</h2>
        <h2>Saif Alqubaisi</h2>
        <h2>Sungwook Huh</h2>
      </header>

      <section className="section">
        <h2>What is Starlink?</h2>

        <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/embed/xpl_JnG7rcg"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />

        <h3>How Starlink works</h3>

        <iframe src="https://satellitemap.space/"
          width="800px"
          height="480px"
          title="Starlink Satellite Map"
        />

        <h3>Elon Musk's goals</h3>
        <div
          className="placeholder"
          style={{ height: 300 }}
        >
          Elon Musk quote on his picture
        </div>
      </section>

      <section className="section">
        <h2>Why use Starlink?</h2>

        <h3>Starlink vs. Popular Internet providers</h3>
        <div
          className="placeholder"
          style={{ height: 600 }}
        >
          A table comparing Starlink vs. popular ISPs
        </div>

        <h3>Starlink vs. competitors</h3>
        <div
          className="placeholder"
          style={{ height: 600 }}
        >
          A table comparing Starlink vs. Kuiper, OneWeb, ...
        </div>

        <h3>How will Starlink save your money</h3>
        <div
          className="placeholder"
          style={{ height: 400 }}
        >
          Simple equations and calculations that show how much is saved
        </div>
      </section>
    </div >
  );
}

export default App;
