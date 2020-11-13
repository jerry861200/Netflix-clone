import Row from './component/Row/Row';
import Banner from './component/Banner/Banner';
import Nav from './component/Nav/Nav';
import requests from './Requests';
import "./App.css";

function App() {
  return (
    <div className="app">
      <Nav/>
      <Banner fetchUrl = {requests.fetchNetflixOriginals}/>
      <Row title='Netflix Original' fetchUrl = {requests.fetchNetflixOriginals} isLargeRow/>
      <Row title='Trending Now' fetchUrl = {requests.fetchTrending}/>
      <Row title='Top Rated' fetchUrl = {requests.fetchTopRated}/>
      <Row title='Action Movies' fetchUrl = {requests.fetchActionMovie}/>
      <Row title='Comedy Movies' fetchUrl = {requests.fetchComedyMovie}/>
      <Row title='Horror Movies' fetchUrl = {requests.fetchHorrorMovie}/>
      <Row title='Romace Movies' fetchUrl = {requests.fetchRomanceMovie}/>
      <Row title='Documentaris' fetchUrl = {requests.fetchDocumentaris}/>
    </div>
  );
}

export default App;
