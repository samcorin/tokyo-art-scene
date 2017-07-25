import { render, Component } from 'preact';

export const Description = () => {
  return (
    <div class="description">
      <h1 class="descHeader">Tokyo Art Scene</h1>
      <div class="descDetails">
        {/* <h3 class="descSubHeader"></h3> */}
        <p class="descText">A fast and convenient way to discover events around you. Designed as a mobile-first web app.</p>

        <h3 class="descSubHeader">❗ Status</h3>
        <p class="descText">This project was originally built with React. But it is now in the process of being rewritten in Preact in an attempt to reduce inital load. You can scroll through but that's about it for now. </p>

        <h3 class="descSubHeader">Techniques</h3>
        <p class="descText">Tokyo Art Scene displays current events and exhibitions with XML data provided by the Tokyo Art Beat API. The app works like this:</p>
        <ol>
          <li>Using a Node.js server, a cron job is set up to fetch the data from the API daily.</li>
          <li>The XML response is then converted from XML to JSON.</li>
          <li>Then the data is cleaned and stored on Firebase for quick access.</li>
          <li>On the client-side, the app fetches the data from Firebase and displays it using a simple UI design.</li>
        </ol>
        
        <br/>
        <p class="descText">Super simple.</p>
      </div>
    </div>
  );
}

export default Description;