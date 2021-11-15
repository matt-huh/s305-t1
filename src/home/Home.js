import { competitors } from "./competitors";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <section className="section">
        <h2>What is Starlink?</h2>
        <iframe
          width="100%"
          height="450"
          src="https://www.youtube-nocookie.com/embed/giQ8xEWjnBs"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />

        <h3>Elon Musk Creating Starlink for...</h3>
        <div>
          <iframe
            scrolling="no"
            frameborder="0"
            style={{
              width: 317,
              height: 310,
              flexGrow: 1,
            }}
            title="Twitter Tweet"
            src="https://platform.twitter.com/embed/Tweet.html?dnt=true&amp;embedId=twitter-widget-9&amp;features=eyJ0ZndfZXhwZXJpbWVudHNfY29va2llX2V4cGlyYXRpb24iOnsiYnVja2V0IjoxMjA5NjAwLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2hvcml6b25fdHdlZXRfZW1iZWRfOTU1NSI6eyJidWNrZXQiOiJodGUiLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3NwYWNlX2NhcmQiOnsiYnVja2V0Ijoib2ZmIiwidmVyc2lvbiI6bnVsbH19&amp;frame=false&amp;hideCard=false&amp;hideThread=true&amp;id=1359026421012774915&amp;lang=en&amp;origin=https%3A%2F%2Fpublish.twitter.com%2F%3Fquery%3Dhttps%253A%252F%252Ftwitter.com%252Felonmusk%252Fstatus%252F1359026421012774915%26widget%3DTweet&amp;sessionId=2e01c5002816cf5b0e700c03497f9b0b23fe97c7&amp;theme=dark&amp;widgetsVersion=f001879%3A1634581029404&amp;width=550px"
            data-tweet-id="1359026421012774915"
          />
          <img src="https://static.independent.co.uk/2021/11/06/20/GettyImages-1229892421%20%281%29.jpg?height=310&auto=webp&quality=80&crop=982:726,smart" />
        </div>
        <p>
          &#11088; Bring broadband internet to the world with its star link constellation of satellites<br />
          &#11088; To beam superfast internet into your home from space<br />
          &#11088; Provide billions of people who currently do not have access to the internet a cheap way of getting online
        </p>

        <h3>Real-Time Starlink Satellite Map</h3>
        <iframe src="https://satellitemap.space/"
          width="800px"
          height="480px"
          frameborder="0"
          title="Starlink Satellite Map"
        />
      </section>

      <section className="section">
        <h2>Why use Starlink?</h2>
        <h3>Starlink vs. Current Internet</h3>

        <h3>Starlink vs. Competitors</h3>
        <table>
          <tr>
            <th>Company</th>
            <th>Download Speed (Mbps)</th>
            <th>Upload Speed (Mbps)</th>
            <th>Latency (ms)</th>
            <th>Constellation Satellites</th>
          </tr>
          {
            competitors.map((competitor) => (
              <tr>
                <td>{competitor.name}</td>
                <td>{competitor.download}</td>
                <td>{competitor.upload}</td>
                <td>{competitor.latency}</td>
                <td>{competitor.satellites}</td>
              </tr>
            ))
          }
        </table>

        <h3>How will Starlink save your money</h3>
        <div
          className="textbox"
        >
          Starlink is currently listed as $99/mo. for network acc ess with an additional $500 fee for the equipment necessary to connect your home to the satellite internet. However, Musk has said already that he expects those prices to go down as the network expands. Additionally, prices will vary based on their location and more remote places and developing countries will have reduced monthly fees. Many people also expect that competing networks like OneWed may help drive down the costs too. Although traditional networks are currently charging around cheaper rates they are still expensive with AT&T charging $35/mo. for their cheapest internet and $65/mo. for their most expensive service. In the future starlink should be closer to that 65 price point. It will also be very beneficial cost wise for big businesses or large complexes who would normally need to purchase many routers so that reliable internet connection can be supplied throughout the whole building. Even though it may be more expensive for households, getting the other 3 billion people who don’t have an internet connection connected to a network will have huge benefits for the globe's wealth. Having everyone able to communicate wirelessly on a fast network will be very helpful for every country’s economy. Additionally, once Starlink is operational the need for laying expensive fiber optic cables over long distances will no longer be necessary. The estimated total cost of completing the Starlink constellation will be about 10 billion dollars according to Spacex President Gwynne Shotwell.
        </div>
      </section>
    </div>
  );
}
