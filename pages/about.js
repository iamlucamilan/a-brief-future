import Head from 'next/head'
import Link from 'next/link'
import { motion } from "framer-motion"
import { GA_TRACKING_ID } from '../lib/gtag'


function About({  }) {


  return (
    <div>
      <Head>
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
          <meta name="author" content="Alterneering Studios"/>
          <meta name="description" content="A Brief Future is a pratical tool to create ideas in alternative realities. Let this tool drop you into a future scenario where you, your team, friends and pets can explore new ideas and designs." />
          <meta name="keywords" content="Futures thinking, beyond design thinking, design thinking, critical design, design criticism, criticism, design fiction, social dreaming, speculative everything, futurologist, futurology, future probes, workshop, design for debate, radical design, imaginary futures, utopia, real utopias, dystopia, futurescaping, dark design, what if, fictional world, innovation, micro-utopia,  mixed reality, sci art, art and science, concept design, systems thinking, social design, experimental design, product design, object design, UX design, concept art, tool, digital tool, cards,  challenge, design challenge, workshop, facilitation, group thinking, future vision, artifact" />
          <meta name="robots" content="noodp" />
          <title>About – A Brief Future – Create ideas in alternative realities</title>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-32x32.png" />
          <link rel="manifest" href="/site.webmanifest"/>
          <meta property="og:title" content="A Brief Future" />
          <meta property="og:description" content="A Brief Future is a pratical tool to create ideas in alternative realities. Let this tool drop you into a future scenario where you, your team, friends and pets can explore new ideas and designs." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="abrieffuture.xyz" />
          <meta property="og:image" content="/opengraph.png" />
          <meta property="og:locale" content="en-gb" />
          <meta property="og:site_name" content="A brief future" />

          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
              }}
            />
        </Head>
      <motion.div className="container about"
      initial={{
        opacity: 0,
        y: 0
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      transition={{ ease: "easeIn", duration: .5 }}yarn >
        
        <p>
          Heyhowyoudoing?
        </p>
        <p>
          We are <a href="https://www.alterneering.com" target="_blank">alterneering studios</a>, a speculative design studio from London. <br/> <span className="highlight">We create ideas in alternative realities.</span> To help us do this, we developed this tool that drops us into a future scenario. <br/> Feel free to use it and help a random citizen with the challenge they are facing.
        </p>
        <p>
          We enjoy this sort of brain teaser and appreciate it if you do too. <br/>Please contact us for any sort of <span className="dotted">feedback</span>, <span className="dotted">unnecessary comments</span>, <span className="dotted">collaboration requests</span> or <span className="dotted">serious wedding proposals.</span> <br/>We do <a href="mailto:hq@alterneering.com?subject=Yo!&body=Hello%20email%20sender%2C%20we%20appreciate%20you.%20Did%20you%20enjoyed%20the%20sun%20lately%3F" >email</a> but prefer Instagram at <a href="https://www.instagram.com/alterneeringstudios" target="_blank">@alterneeringstudios</a>
        </p>
        <p>
          Have a nice day and keep doubting. <br/>Enjoy the sun! ☉
        </p>
        <Link href="/">
          <a>↩︎ Back </a>
        </Link>
    </motion.div>
    </div>
     )
}
export default About