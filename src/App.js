import React, {Component} from 'react';
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);
  }
  render () {
    return(
        <div>
            <Header />
            <Body />
        </div>
        
    )
  }
}

const Header = (props) => {
  return(
      <header>
          <div id="menu-div">
              <nav>
                  <img className="spd-logo black" src="src\imgs\SPD_Logo_Weiss.png" alt="SPD Logo" />
                  <ul className="menu-column">
                      <li>Programmmm</li>
                      <li>Über</li>
                      <li>Bilder</li>
                      <li>Kontakt</li>
                      <li><i className="fa fa-facebook-official"></i></li>
                      <li><i className="fa fa-instagram"></i></li>
                      <li><i className="fa fa-twitter"></i></li>
                  </ul>
              </nav>
          </div>
      </header>
  )
}
const Body = (props) => {
  return(
      <div>
          <img id="cover-img" src="imgs\janCover.jpg" alt=""/>
          <div id="hello-div" className="background fade-in">
              <div id="hello" className="classic">
                  <img id="vorstellungs-img" className="inside-img" src="imgs\jan sitzt.jpg" alt=""/>
                  <div>
                      <h1>MOIN</h1>
                      <p>Non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Ultrices eros in cursus turpis massa tincidunt dui. Donec enim diam vulputate ut pharetra sit. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi. Justo donec enim diam vulputate ut pharetra sit amet. Adipiscing diam donec adipiscing tristique risus nec feugiat in. Enim nunc faucibus a pellentesque sit amet porttitor eget dolor. Lacinia quis vel eros donec. Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Lorem mollis aliquam ut porttitor leo a. Faucibus nisl tincidunt eget nullam non. Massa tincidunt dui ut ornare. Ullamcorper malesuada proin libero nunc consequat interdum varius sit. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Magna ac placerat vestibulum lectus mauris ultrices. Nibh tortor id aliquet lectus proin nibh nisl condimentum id. Dapibus ultrices in iaculis nunc sed augue lacus. Feugiat vivamus at augue eget arcu dictum varius duis at.
  In ornare quam viverra orci sagittis. Egestas dui id ornare arcu odio. Amet volutpat consequat mauris nunc congue nisi vitae. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Amet porttitor eget dolor morbi. Diam sit amet nisl suscipit adipiscing bibendum. Sollicitudin tempor id eu nisl nunc mi. Ornare lectus sit amet est placerat in egestas erat imperdiet. Interdum posuere lorem ipsum dolor sit. Eu volutpat odio facilisis mauris sit. Malesuada nunc vel risus commodo. Vulputate sapien nec sagittis aliquam malesuada bibendum. Egestas sed tempus urna et pharetra pharetra massa. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Ac placerat vestibulum lectus mauris ultrices eros in. Tincidunt nunc pulvinar sapien et ligula ullamcorper. Ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Adipiscing enim eu turpis egestas pretium aenean.</p>
                  </div>
              </div>
          </div>

          <div className="background fade-in two">
              <div id="twitter-div" className="">
                  <a className="twitter-timeline" data-tweet-limit="2" data-dnt="true" href="https://twitter.com/jan_pasternack?ref_src=twsrc%5Etfw">Tweets by @jan_pasternack</a> 
              </div>
              <div id="second" className="classic">
                  Non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Ultrices eros in cursus turpis massa tincidunt dui. Donec enim diam vulputate ut pharetra sit. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi. Justo donec enim diam vulputate ut pharetra sit amet. Adipiscing diam donec adipiscing tristique risus nec feugiat in. Enim nunc faucibus a pellentesque sit amet porttitor eget dolor. Lacinia quis vel eros donec. Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Lorem mollis aliquam ut porttitor leo a. Faucibus nisl tincidunt eget nullam non. Massa tincidunt dui ut ornare. Ullamcorper malesuada proin libero nunc consequat interdum varius sit. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Magna ac placerat vestibulum lectus mauris ultrices. Nibh tortor id aliquet lectus proin nibh nisl condimentum id. Dapibus ultrices in iaculis nunc sed augue lacus. Feugiat vivamus at augue eget arcu dictum varius duis at.
      In ornare quam viverra orci sagittis. Egestas dui id ornare arcu odio. Amet volutpat consequat mauris nunc congue nisi vitae. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Amet porttitor eget dolor morbi. Diam sit amet nisl suscipit adipiscing bibendum. Sollicitudin tempor id eu nisl nunc mi. Ornare lectus sit amet est placerat in egestas erat imperdiet. Interdum posuere lorem ipsum dolor sit. Eu volutpat odio facilisis mauris sit. Malesuada nunc vel risus commodo. Vulputate sapien nec sagittis aliquam malesuada bibendum. Egestas sed tempus urna et pharetra pharetra massa. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Ac placerat vestibulum lectus mauris ultrices eros in. Tincidunt nunc pulvinar sapien et ligula ullamcorper. Ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Adipiscing enim eu turpis egestas pretium aenean.
              </div>
          </div>

          <div className="background fade-in three">
              <div id="diesdas" className="classic">
                  <img id="" className="inside-img" src="imgs\20220504pj205.jpg" alt=""/>
                  <div>
                      <h1>DIESDAS</h1>
                      <p>Non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Ultrices eros in cursus turpis massa tincidunt dui. Donec enim diam vulputate ut pharetra sit. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi. Justo donec enim diam vulputate ut pharetra sit amet. Adipiscing diam donec adipiscing tristique risus nec feugiat in. Enim nunc faucibus a pellentesque sit amet porttitor eget dolor. Lacinia quis vel eros donec. Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Lorem mollis aliquam ut porttitor leo a. Faucibus nisl tincidunt eget nullam non. Massa tincidunt dui ut ornare. Ullamcorper malesuada proin libero nunc consequat interdum varius sit. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Magna ac placerat vestibulum lectus mauris ultrices. Nibh tortor id aliquet lectus proin nibh nisl condimentum id. Dapibus ultrices in iaculis nunc sed augue lacus. Feugiat vivamus at augue eget arcu dictum varius duis at.</p>
                  </div>
              </div>
              <div id="neben-diesdas" className="classic">
                  Non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Ultrices eros in cursus turpis massa tincidunt dui. Donec enim diam vulputate ut pharetra sit. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi. Justo donec enim diam vulputate ut pharetra sit amet. Adipiscing diam donec adipiscing tristique risus nec feugiat in. Enim nunc faucibus a pellentesque sit amet porttitor eget dolor. Lacinia quis vel eros donec. Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Lorem mollis aliquam ut porttitor leo a. Faucibus nisl tincidunt eget nullam non. Massa tincidunt dui ut ornare. Ullamcorper malesuada proin libero nunc consequat interdum varius sit. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Magna ac placerat vestibulum lectus mauris ultrices. Nibh tortor id aliquet lectus proin nibh nisl condimentum id. Dapibus ultrices in iaculis nunc sed augue lacus. Feugiat vivamus at augue eget arcu dictum varius duis at.
              </div>
          </div>
      </div>
  )
}

export default App;