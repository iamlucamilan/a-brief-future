import Head from 'next/head'
import Link from 'next/link'


function About({  }) {


  return (
    <div className="container about">
        
        {/* <img src="/a-brief-future-logo.svg" alt="A brief future logo" className="logo" /> */}

        <Link href="/">
          <a>↩︎ Back </a>
        </Link>

        <p>
          Heyhowyoudoing?
        </p>
        <p>
          We are <a href="https://www.alterneering.com" target="_blank">alterneering studios</a>, a speculative design studio from London. <br/> <span className="highlight">We create ideas in alternative realities.</span> To help us do this, we developed this tool that drops us into a future scenario. <br/> Feel free to use it and help a random citizen with the challenge they are facing.
        </p>
        <p>
          We enjoy this sort of brain teaser and appreciate it if you do too. <br/>Please contact us for any sort of feedback, unnecessary comments, collaboration requests or serious wedding proposals. <br/>We do <a href="mailto:hq@alterneering.com?subject=Yo!&body=Hello%20email%20sender%2C%20we%20appreciate%20you.%20Did%20you%20enjoyed%20the%20sun%20lately%3F" >email</a> but prefer Instagram at <a href="https://www.instagram.com/alterneeringstudios" target="_blank">@alterneeringstudios</a>
        </p>
        <p>
          Have a nice day and keep doubting. <br/>Enjoy the sun! ☉
        </p>
    </div>
  )
}
export default About