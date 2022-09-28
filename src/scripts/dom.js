import refreshingLogo from '../images/refreshLogo.svg';

const Dom = () => {
  const getElements = () => ({
    overlay: document.querySelector('.overlay'),
    sectionScreen: document.querySelector('.sectionScreen'),
    shipText: document.querySelector('.shipText'),
    shipGrid: document.querySelector('.shipGrid'),
    shipLayer: document.querySelector('.shipLayer'),
    rotateButton: document.querySelector('.rotateButton'),
    grids: Array.from(document.querySelectorAll('.grid')),
    hits: Array.from(document.querySelectorAll('.hits')),
    misses: Array.from(document.querySelectorAll('.misses')),
    playerGrid: document.querySelector('.playerGrid'),
    playerHits: document.querySelector('.playerHits'),
    playerMisses: document.querySelector('.playerMisses'),
    computerGrid: document.querySelector('.computerGrid'),
    computerHits: document.querySelector('.computerHits'),
    computerMisses: document.querySelector('.computerMisses'),
    content: document.querySelector('.content'),
  });

  const getPage = () => {
    const content = `    <div class="content">
                            <div class="overlay"></div>
                            <div class="sectionScreen">
                              <div class="shipSelection">
                                <h1 class="shipTitle">BATTLESHIP</h1>
                                <h2 class="shipText">Place your Battleship</h2>
                                <div class="shipLayer">
                                  <div class="shipOverlay"></div>
                                  <div class="shipGrid"></div>
                              </div>
                                <div class="rotateButton">
                                  <img
                                    class="rotateImage"
                                    src="${refreshingLogo}"
                                    alt="Rotate Image"
                                  />
                                </div>
                              </div>
                            </div>

                            <main class="mainSection">
                              <div class="mainTitle"><h1>BATTLESHIP</h1></div>
                              <div class="centerSection">
                                <div class="playerBoard board">
                                  <h2 class="boardTitle">Player Board</h2>
                                  <div class="playerGrid grid"></div>
                                  <div class="playerStats stats">
                                    <h2 class="playerHits hits">Hits 0</h2>
                                    <h2 class="playerMisses misses">Misses 0</h2>
                                  </div>
                                </div>

                                <div class="computerBoard board">
                                  <h2 class="boardTitle">Computer Board</h2>

                                  <div class="computerGrid grid"></div>
                                  <div class="computerStats stats">
                                    <h2 class="computerHits hits">Hits 0</h2>

                                    <h2 class="computerMisses misses">Misses 0</h2>
                                  </div>
                                </div>
                              </div>
                            </main>
                            <div class="footer">
                              <h2 class="copyrightMessage">
                                Website and code are made by Brayden Grotegut
                              </h2>
                            </div>
                          </div>`;
    return content;
  };

  return { getPage, getElements };
};

export default Dom;
