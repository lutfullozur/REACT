import './App.css'

export default  function App()
{
  return <div>
   <div className="header">
   <div className="left">
   <a className="Cootels" href="">Cootels</a>
   </div>
   <div className="center">
      <a className="textCenter"  href="">Rooms</a>
      <a className="textCenter" href="">Reservation</a>
      <a className="textCenter" href="">Contacs</a>
   </div>
   <div className="right">
    <button className="btnStarted">Get Started</button>
   </div>
   </div>
   <div className="container1">
    <div className="left1">
      <p className="texth1Container1">Nature, Warmth, and <br /> Beauty in One Space</p>
      <p className="textpContainer1">One place to release all the stress, bring back happines,<br /> and get back to nature. We provide the best room and <br /> nature for you. Come visit us anytime you want.</p><br />
      <button className='btnReservation'>Reservation</button>
    </div>
    <div className="right1">
      <div className="leftHome">
        <img className="imgHome" src="src/assets/leftHome.png" alt="" />
      </div>
      <div className="centerHome">
        <img className="imgHome" src="src/assets/images/centerHome.png" alt="" />
      </div>
      <div className="rightHome">
        <img className="imgHome" src="src/assets/images/rightHome.png" alt="" />
      </div>
    </div>
   </div>
   <div className="container2">
    <div className="left2">
    <img src="src/assets/images/leftImage2.png" alt="" />
    </div>
    <div className="right2">
      <p className="texth1Container2">Cozy and Down to Earth Cootage <br /> Hotel in Norway.</p>
      <p className="textpContainer1 textTiop1C2">Our Cootage Hotel is an intimate hideway concieved for dicerning <br /> travelers. It faces directly the unique and spectacular panorama of <br /> the Hallerbos Jungle.</p>
      <p className="textpContainer1 textDownp1C2">Cootels extends along a private, quiet, and beautiful nature. Stay <br /> away from crowd and enjoy the cozy and beauty with us.</p><br />
      <button className="btnLearnMore">Learn More</button>
    </div>
   </div>
   <div className="container3">
    <div className="left3">
      <p className='texth1Container3' >Cabin Activities</p>
      <p className="textpContainer3">Don’t worry to get bored easily in our cabin. We have so many cabin <br/> activities for you to do it alone or with group. Maybe this is the best <br /> chance for you to make new friends or even a lover.</p>
    </div>
    <div className="right3">
      <img src="src/assets/images/imgRight3.png" alt="" />
    </div>
   </div>
   <div className="container4">
    <div className="left4">
  <img src="src/assets/images/img4.png" alt="" />
    </div>
    <div className="right4">
      <p className="texth1Container4">100% Organic Food</p>
      <p className="textpContainer4">We served 100% organic, low process and delicious food. We allow <br /> our guest to have breakfast or dinner request.What ever made your <br />  taste buds happy.</p>
    </div>
   </div>
   <p className="text1">Many Rooms to Choose</p>
   <p className='text2'>There is a room for every needs. We have room for individuals until <br /> family size, we also have a cabin for more private experience</p>
   <button className='btnExploremore'>Explore more</button>
  </div>
}