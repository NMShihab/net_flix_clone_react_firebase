import React from "react";
import "../css/HomeScreen.css";
import requests from "../Requests";
import Banner from "./Banner";
import NavBar from "./NavBar";
import Row from "./Row";

function HomeScreen() {
  return (
    <div className="homeScreen">
      {/* Navbar */}
      <NavBar />
      {/* Banner */}
      <Banner />
      {/* Row */}
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow="true"
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default HomeScreen;
