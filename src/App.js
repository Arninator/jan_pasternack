import React, {Component} from 'react';
import $ from 'jquery';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import ApiCalendar from 'react-google-calendar-api';
import './App.css';
import cover from './imgs/janCover.jpg';
import logoWhite from './imgs/SPD_Logo_Weiss.png';
import logoBlack from './imgs/SPD_Logo_Schwarz_RGB.png';


const config = {
  "clientId": "287019187446-ir67emj56ek7hdqq1ehu58n2p3g8mdv3.apps.googleusercontent.com",
  // "clientId": "sechzehngeteiltdurchneun@gmail.com",
  "apiKey": "AIzaSyD3HySl2mo7m_5cjUwhltGmDt29yJ4U5uU",
  "scope": "https://www.googleapis.com/auth/calendar",
  "discoveryDocs": [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"
  ]
}

const apiCalendar = new ApiCalendar(config);
// apiCalendar.handleAuthClick();
// console.log(Object.keys(apiCalendar.listCalendars()));
// apiCalendar.handleAuthClick();
// apiCalendar.listUpcomingEvents(10).then((result) => {
//   console.log(Object.keys(result.items));
// });


class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      termine: []
    };

    this.handleItemClick = this.handleItemClick.bind(this);
  }
  componentDidMount () {

    // apiCalendar.handleAuthClick();
    // fetch("https://www.googleapis.com/calendar/v3/calendars/ar.maxnold@gmail.com/events?key=AIzaSyB7GfNxM4TXXtDue-64TMEzOViC8dTIgmA")
    fetch("https://www.googleapis.com/calendar/v3/calendars/sechzehngeteiltdurchneun@gmail.com/events?key=AIzaSyD3HySl2mo7m_5cjUwhltGmDt29yJ4U5uU")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            termine: result.items
          });
        },
        // (error) => {
        //   this.setState({
        //     isLoaded: true,
        //     error
        //   });
        // }
      )


    $(document).ready(function() {
      $(window).scroll(function() {

          /* sticky menu */
          $("#menu-div").each(function() {
              var menu_top = $(this).offset().top;
              var window_top = $(window).scrollTop();

              if (window_top > ($(window).height()) / 90.) {
                  $(this).css("background-color", "rgb(227, 0, 15)");
                  $("ul").addClass("menu-row");
                  $("ul").removeClass("menu-column");
                  $(".spd-logo").css("height", "3vh");
              } else {
                  $(this).css("background-color", "transparent");
                  $("ul").addClass("menu-column");
                  $("ul").removeClass("menu-row");
                  $(".spd-logo").css("height", "5vh");
              }
          })

          /* position of fade in and out objects */
          $('.fade-in').each(function(index){
              
              var object_top = $(this).offset().top;
              var object_bottom = $(this).offset().top + $(this).outerHeight();
              var window_top = $(window).scrollTop();
              var window_bottom = $(window).scrollTop() + $(window).height();
              
              /* if its half seen, fade it in */
              if (window_bottom - object_top > ($(this).outerHeight() / 2.)){
                  $(this).css("opacity", "1");
              } else {
                  $(this).css("opacity", "0");
              }
          }); 
      
      });
      
      $(".spd-logo").hover(function() {
          $(".spd-logo").attr("src", logoBlack);
      }, function() {
          $(".spd-logo").attr("src", logoWhite);
      });
    });
  }
  handleItemClick(event, name) {
    if (name === "sign-in") {
      apiCalendar.handleAuthClick();
      console.log("logged in");
    } else if (name === "sign-out") {
      apiCalendar.handleSignoutClick();
      console.log("logged out");
    }
  }
  render () {
    return(
        <div>
            <Header />
            <Body />
            {this.state.termine.map((item) => {
              return(
                <div>{item.summary}</div>
              )
            })}
        </div>
        
    )
  }
}

const Header = (props) => {
  return(
      <header>
          <div id="menu-div">
              <nav>
                  <img className="spd-logo black" src={logoWhite} alt="SPD Logo" />
                  <ul className="menu-column">
                      <li>Programm</li>
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
          <img id="cover-img" src={cover} alt="" />
          <div id="hello-div" className="background fade-in">
              <div id="hello" className="classic">
                  <img id="vorstellungs-img" className="inside-img" src="src\imgs\jan sitzt.jpg" alt=""/>
                  <div>
                      <h1>MOIN</h1>
                      <p>Non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Ultrices eros in cursus turpis massa tincidunt dui. Donec enim diam vulputate ut pharetra sit. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi. Justo donec enim diam vulputate ut pharetra sit amet. Adipiscing diam donec adipiscing tristique risus nec feugiat in. Enim nunc faucibus a pellentesque sit amet porttitor eget dolor. Lacinia quis vel eros donec. Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Lorem mollis aliquam ut porttitor leo a. Faucibus nisl tincidunt eget nullam non. Massa tincidunt dui ut ornare. Ullamcorper malesuada proin libero nunc consequat interdum varius sit. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Magna ac placerat vestibulum lectus mauris ultrices. Nibh tortor id aliquet lectus proin nibh nisl condimentum id. Dapibus ultrices in iaculis nunc sed augue lacus. Feugiat vivamus at augue eget arcu dictum varius duis at.
  In ornare quam viverra orci sagittis. Egestas dui id ornare arcu odio. Amet volutpat consequat mauris nunc congue nisi vitae. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Amet porttitor eget dolor morbi. Diam sit amet nisl suscipit adipiscing bibendum. Sollicitudin tempor id eu nisl nunc mi. Ornare lectus sit amet est placerat in egestas erat imperdiet. Interdum posuere lorem ipsum dolor sit. Eu volutpat odio facilisis mauris sit. Malesuada nunc vel risus commodo. Vulputate sapien nec sagittis aliquam malesuada bibendum. Egestas sed tempus urna et pharetra pharetra massa. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Ac placerat vestibulum lectus mauris ultrices eros in. Tincidunt nunc pulvinar sapien et ligula ullamcorper. Ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Adipiscing enim eu turpis egestas pretium aenean.</p>
                  </div>
              </div>
          </div>

          <div className="background fade-in two">
              <div id="twitter-div" className="">
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="jan_pasternack"
                tweetLimit="2"
                // options={{}}
              />
                  {/* <a className="twitter-timeline" data-tweet-limit="2" data-dnt="true" href="https://twitter.com/jan_pasternack?ref_src=twsrc%5Etfw">Tweets by @jan_pasternack</a>  */}
              </div>
              <div id="second" className="classic">
                  Non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Ultrices eros in cursus turpis massa tincidunt dui. Donec enim diam vulputate ut pharetra sit. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi. Justo donec enim diam vulputate ut pharetra sit amet. Adipiscing diam donec adipiscing tristique risus nec feugiat in. Enim nunc faucibus a pellentesque sit amet porttitor eget dolor. Lacinia quis vel eros donec. Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Lorem mollis aliquam ut porttitor leo a. Faucibus nisl tincidunt eget nullam non. Massa tincidunt dui ut ornare. Ullamcorper malesuada proin libero nunc consequat interdum varius sit. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Magna ac placerat vestibulum lectus mauris ultrices. Nibh tortor id aliquet lectus proin nibh nisl condimentum id. Dapibus ultrices in iaculis nunc sed augue lacus. Feugiat vivamus at augue eget arcu dictum varius duis at.
      In ornare quam viverra orci sagittis. Egestas dui id ornare arcu odio. Amet volutpat consequat mauris nunc congue nisi vitae. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Amet porttitor eget dolor morbi. Diam sit amet nisl suscipit adipiscing bibendum. Sollicitudin tempor id eu nisl nunc mi. Ornare lectus sit amet est placerat in egestas erat imperdiet. Interdum posuere lorem ipsum dolor sit. Eu volutpat odio facilisis mauris sit. Malesuada nunc vel risus commodo. Vulputate sapien nec sagittis aliquam malesuada bibendum. Egestas sed tempus urna et pharetra pharetra massa. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Ac placerat vestibulum lectus mauris ultrices eros in. Tincidunt nunc pulvinar sapien et ligula ullamcorper. Ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Adipiscing enim eu turpis egestas pretium aenean.
              </div>
          </div>

          <div className="background fade-in three">
              <div id="diesdas" className="classic">
                  <img id="" className="inside-img" src="src\imgs\20220504pj205.jpg" alt=""/>
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