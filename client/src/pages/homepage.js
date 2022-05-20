import React from 'react';
function homepage() {
  return (
    <section className="my-5">
     <div class="landing-map">
  <div class="header__overlay">
</div>
<div class="header-wrapper">
  <h1 class="landing-map-title">Find Crime in Your Neighborhood</h1>
  <div class="view-or-search-map-container">
    <div class="view-or-search-map">
<a class="view-map" href="/map">View Crime Near Me</a>
        <form id="landing-page__address-search" class="search-container" role="search">
          <input id="pac-input" class="places-search" type="text" placeholder="Search for Address (Street, City, State)" aria-label="Search for Address (Street, City, State)"/>
          <button class="search-button" type="submit" aria-label="Click to search for an address on the map">
            <img src="https://d2gd0no3pm9ozo.cloudfront.net/images/search-01d040380b715c7bf35ce04cd2e94943.svg?vsn=d" alt="Search" class="search-icon"/>
          </button>
        </form>
    </div>
  </div>
  <div class="learn_more--wrapper">
    <a class ="link-text" href="#what-is-crime-watch">
      <div class="learn-more">
        <span class="learn_more--text">Learn More</span>
        <img class="learn_more--down-arrow" src="https://d2gd0no3pm9ozo.cloudfront.net/images/chevron-thin-down-7112962821113542692e387dbc7d2571.svg?vsn=d" alt="Map + Alert" class="learn-more-arrow"/>
      </div>
    </a>
  </div>
</div>
</div>
    </section>
  );
}

export default homepage;