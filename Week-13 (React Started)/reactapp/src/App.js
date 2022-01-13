import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import NORDICROSE from './assets/images/NORDIC ROSE.png';
import yellow from './assets/images/yellow.png';
import fbTwitterIcon from './assets/images/fbTwitterIcon.png';
import MaskGroup from './assets/images/Mask Group.png';
import jin from './assets/images/jin.png';
import border from './assets/images/border.png';
import facebook from './assets/images/facebook.png';
import Twitter from './assets/images/Twitter.png';
import eyes from './assets/images/eyes.png';
import a from './assets/images/assignment3/1.png';
import b from './assets/images/assignment3/2.png';
import c from './assets/images/assignment3/3.png';
import d from './assets/images/assignment3/4.png';
import e from './assets/images/assignment3/5.png';
import f from './assets/images/assignment3/6.png';
import footerDesign from './assets/images/footerDesign.png';
import NORDICROSEWHITE from './assets/images/NORDIC ROSE WHITE.png';

function App() {
  return (
    <div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      

      <br/>

    {/* <!-- Nav bar starts from here --> */}

    <img src={NORDICROSE} alt="img" className="logo"/>

    <nav>

        <ul className="nav justify-content-end">
            <li className="nav-item">
              <a className="nav-link active" href="#">blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">about</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">projects</a>
            </li>
          </ul>

          <br/>
          

    </nav>

    <div className="line"></div>
    <hr/>
  
    <br/>



    {/* <!-- Main head Starts here  --> */}

<div className="container">
    <div className="row">

        <div className="col-2">
            
        </div>

        <div className="col-8 head" >
            <p>A few words about this blog platform, Ghost, and how this site was made</p>
        </div>

        <div className="col-2">

        </div>

    </div>

    <div className="row">

        <div className="col-3">
            
        </div>

        <div className="col-6" >
            <p className="headBelow">Why Ghost (& Figma) instead of Medium, WordPress or other options?</p>
        </div>

        <div className="col-3">

        </div>

    </div>
    
</div>

<br/>
<br/>

<img src={yellow} alt="img" width="100%"/>

<br/>
<br/>
<br/>



<div className="container">

<div className="row">

    <div className="col-3">

    </div>

    <div className="col-6 topLine">
        
    </div>

    <div className="col-3">

    </div>

</div>


<div className="row">

            <div className="col-3">

            </div>

            <div className="col-2">
                
                <img src={MaskGroup} alt="img" class="icon"/>

                <h4 className="tweetHead">Mika MAtikainen</h4>
                <p className="tweetInfo">Apr 15, 2020 · 4 min read</p>

            </div>

            <div className="col-2">

            </div>

            <div className="col-2">

                <img src={fbTwitterIcon} alt="img" className="fbTwitter"/>

            </div>

            <div className="col-3">

            </div>

        </div>


        <div className="row">

            <div className="col-3">

            </div>

            <div className="col-6">
                <p className="para1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra quis lacus at viverra.</p>
                
                <p className="para1">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula. In eu dui molestie, molestie lectus eu, semper lectus.</p>
            </div>

            <div className="col-3">
               
            </div>

        </div>


        <div className="row">

            <div className="col-3">

            </div>
            
            <div className="col-3">

            <br/>
            <br/>

                <h4 className="head1">Next on the pipeline</h4>

                <br/>

            </div>
            
            <div className="col-3">

            </div>

            <div className="col-3">

            </div>
        </div>


        <div className="row">

            <div className="col-3">

            </div>
    
                <div className="col-6">
                    <p className="para1">Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>

                    <br/>
                    

                    <p className="para1">Morbi efficitur auctor metus, id mollis lorem pellentesque id. Nullam posuere maximus dui et fringilla. </p>
                </div>
    
                <div className="col-3">
                   
                </div>
        </div>


        <div className="row">

                <div className="col-2">

                </div>

                <div className="col-8">
                    <br/>

                    <img src={jin} alt="img" width="100%"/>
                    
                </div>

                <div className="col-2">

                </div>

            </div>


            <div className="row">
                <div className="col-3">

                </div>

                <div className="col-6">

                    <br/>

                    <p className="caption">Image caption centered this way and I’ll make this a bit longer to indicate the amount of line-height. </p>

                    <br/>
                </div>

                <div className="col-3">

                </div>
            </div>


            <div className="row">

                <div className="col-3">

                </div>

                <div className="col-6">
                    <p className="para1">Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula.</p>

                    <br/>

                    <p className="para1">In eu dui molestie, molestie lectus eu, semper lectus. Proin at justo lacinia, auctor nisl et, consequat ante. Donec sit amet nisi arcu. Morbi efficitur auctor metus, id mollis lorem pellentesque id. Nullam posuere maximus dui et fringilla. Nulla non volutpat leo.</p>
                </div>

                <div className="col-3">

                </div>

            </div>


            <div class="row">

                <div class="col-3">

                </div>

                <div className="col-3">

                    <br/>

                    <p className="para1">A list looks like this:</p>
                </div>

                <div className="col-3">
                    
                </div>

                <div className="col-3">
                    
                </div>

            </div>


            <div className="row">

                <div className="col-3">

                </div>

                <div className="col-6">

                    <br/>

                    <ul>
                        <li className="para1">First item in the list</li>

                        <br/>

                        <li className="para1">Second item in the list lorem ipsum dolor sit amet nunc felis dolor lorem ipsum sit amet</li>

                        <br/>

                        <li className="para1">Third item in the list</li>
                    </ul>
                </div>

            </div>


            <div className="row">

                <div className="col-3">

                </div>

                <div className="col-6">

                    <br/>

                    <p className="para1">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula. </p>
                </div>

                <div className="col-3">

                </div>

            </div>

            <div className="row">

                <div className="col-3">

                </div>

                <div className="col-3">
                    <p className="para1">Thanks for reading <br/>  Mika</p>
                    {/* <!-- <p class="para1">Mika</p> --> */}
                </div>

                <div className="col-6">

                </div>

            </div>


            <div className="row">

                <div className="col-3">

                </div>

                <div className="col-6">

                    <br/>

                    <img src={border} alt="imgborder" className="borderImg"/>
                </div>


                <div className="col3">

                </div>

            </div>


            <div className="row">

                <div className="col-3">

                </div>

                <div className="col-3">

                    <img src={facebook} alt="" className="twoImgs"/>
                </div>

                <div className="col-3">
                    
                    <img src={Twitter} alt="" className="twoImgs"/>
                </div>

                <div className="col-3">
                    
                </div>

            </div>

            <div className="row">

                <div className="col-3">

                </div>

                <div className="col-1">

                    <br/>

                    <p className="caption">Tags:</p>
                </div>

                <div className="col-2">

                    <br/>

                    <p className="decor caption">product design, culture</p>
                </div>

                <div className="col-3">

                </div>

            </div>


            <div className="row">

                <div className="col-3">

                </div>

                <div className="col-6">

                    <br/>

                    <div className="dashed">

                    </div>
                </div>

                <div className="col-3">

                </div>

            </div>

            <div className="row">

                <div className="col-3">

                </div>

                <div className="col-1">

                    <br/>
                    
                    
                    <img src={MaskGroup} alt=""/>
                </div>

                <div className="col-5">

                    <br/>

                    <p className="para2"> <span className="parahead">Mika Matikainen</span> is a Design Founder & Advisor, Berlin School of Creative Leadership Executive MBA participant, Zippie advisor, Wolt co-founder, and Nordic Rose stakeholder.   </p>
                </div>

                <div className="col-3">

                  </div>

              </div>



            </div>

            <br/>
            <br/>

            <div className="container-flouid">

              <div className="row">

                <div className="col-12 beforeFooterLine">

                </div>

              </div>

              <div className="row">

            <div className="col-12">
                <img src={eyes} alt="img" className="eyesImg"/>
            </div>

        </div>


          <div className="row">

            <div className="col-4">

            </div>

            <div className="col-4">
                <p className="head">What to read next</p>
            </div>

            <div className="col-4">

            </div>

        </div>

        <br/>


        <div className="row">

            <div className="col-3">

            </div>

            <div className="col-2">
                <img src={a} alt="img" className="margin" width="95%"/>
                <p className="caption">Connecting artificial intelligence with digital product design</p>
            </div>

            <div className="col-2">
                <img src={b} alt="img" className="margin" width="95%"/>
                <p className="caption">Hello world, or, in other words, why this blog exists</p>
            </div>

            <div classNamae="col-2">
                <img src={c} alt="img" className="margin" width="100%"/>
                <p className="caption">Here are some things you should know regarding how we work </p>
            </div>

            <div className="col-3">

            </div>

        </div>

        <div className="row">

            <div className="col-3">

            </div>

            <div className="col-2">
                <img src={d} alt="img" width="95%"/>
                <p className="caption">A few words about this blog platform, Ghost, and how this site was made</p>
            </div>

            <div className="col-2">
                <img src={e} alt="img"  width="95%"/>
                <p className="caption">Updating list of 50+ sources on distributed teams, remote work, and how to make it all work better</p>
            </div>

            <div className="col-2">
                <img src={f} alt="img"  width="100%"/>
                <p className="caption">How modern remote working tools get along with Old School Cowboy's methods </p>
            </div>

            <div className="col-3">

            </div>

        </div>

        <br/>

    </div>


         <div className="container">

        <div className="row">

            <div className="col-3">

            </div>
    
                <div className="col-6 box">
                    

                    
                </div>
    
                <div className="col-3">
                   
                </div>
        </div>

        <div className="row">

            <div className="col-4">

            </div>
    
                <div className="col-4">
                    
                    <p className="signup">Sign up for news letter</p>

                </div>
    
                <div className="col-4">
                   
                </div>
        </div>

        <div className="row">

            <div className="col-3">

            </div>
    
                <div className="col-6">
                    
                    <p className="text caption">If you want relevant updates occasionally, sign up for the private newsletter. Your email is never shared. </p>

                </div>
    
                <div className="col-3">
                   
                </div>
        </div>


        <div className="row">

<div className="col-3">

</div>

    <div className="col-6">
        
        <input type="email" placeholder=" &nbsp; Enter your email" className="input"/>
        <button className="btn btn-danger" >sign up</button>

    </div>

    <div className="col-3">
    
    </div>
</div>

</div>

{/* <!-- footer starts here  --> */}

    <img src={footerDesign} alt="IMG" className="footerDesign"/>
     
    <img src={NORDICROSEWHITE} alt="IMG" className="footerLogo"/>
    
    <p className="footerPara">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. </p>

    <div className="link">
        <a className="a" href="">Twitter</a>
        <a className="a" href="">Linedin</a>
        <a className="a" href="">BSS</a>
    </div>

    <p className="lastPara">© 2012–2020 Nordic Rose Co. All rights reserved. </p>
    


    <div className="container-flouid">
        <div className="row">
            <div className="col-12 footercolor">

            </div>
        </div>
    </div>



      </div>

    

    
  );
}

export default App;
