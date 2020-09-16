import Head from 'next/head'
import Link from 'next/link'
import fetch from 'node-fetch'
import {loadFirebase} from '../lib/db.js'
import { database } from 'firebase'
import { motion } from "framer-motion"
import { GA_TRACKING_ID } from '../lib/gtag'



function Index({ result }) {  
  var reload = () => { 
    window.location.reload()
  }

  return (
    <div>
      <Head>
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <meta name="author" content="Alterneering Studios"/>
        <meta name="description" content="A Brief Future is a pratical tool to create ideas in alternative realities. Let this tool drop you into a future scenario where you, your team, friends and pets can explore new ideas and designs." />
        <meta name="keywords" content="Futures thinking, beyond design thinking, design thinking, critical design, design criticism, criticism, design fiction, social dreaming, speculative everything, futurologist, futurology, future probes, workshop, design for debate, radical design, imaginary futures, utopia, real utopias, dystopia, futurescaping, dark design, what if, fictional world, innovation, micro-utopia,  mixed reality, sci art, art and science, concept design, systems thinking, social design, experimental design, product design, object design, UX design, concept art, tool, digital tool, cards,  challenge, design challenge, workshop, facilitation, group thinking, future vision, artifact" />
        <meta name="robots" content="noodp" />
        <title>A Brief Future – Create ideas in alternative realities</title>
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
      <motion.div className="container"
      initial={{
        opacity: 0.5,
        y: 0
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      transition={{ ease: "easeIn", duration: .2 }}>
        <div className="sun">
          <Link href="/about">
            <a>
              <img src="/sun.svg" className="about-link" alt="About page" />
            </a>
          </Link>
        </div>
        
        <img src="/a-brief-future-logo.svg" alt="A brief future logo" className="logo" />

        <motion.div className="card"
        initial={{
            opacity: 0.5,
            y: 0
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{ ease: "easeIn", duration: .2 }}>
          <motion.div className="brief"
            initial={{
              opacity: 0,
              y: -15
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{ ease: "easeIn", duration: 0.45 }}
          >
            <p> 
              <span className="highlight">You are </span><br/>
              <span className="sa"> {result.world.value} </span> <span className="dotted">{result.premise.value}</span><br/><br/>
              <span className="highlight">and you have to </span><br/> 
              <span className="sasa">{result.action.value}</span> for <span className="dotted">{result.object.value} {result.need.value}</span>
            </p>
          </motion.div>
          <motion.div className="brief-id"
          initial={{
            opacity: 0,
            y: 0
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{ ease: "easeIn", duration: 0.45 }}
          >
            <small>{result.world.id}-{result.premise.id}-{result.action.id}-{result.object.id}-{result.need.id}</small>
          </motion.div>
        </motion.div>
        <img src="/drip.svg" alt="drip" className="drip" />

        <motion.button onClick={() => reload()} className="btn" type="button" whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }} value="alternate">{result.cta}</motion.button>
        <footer>
        <p>
          A tool by <br/> <a href='https://alterneering.com' target='_blank'>alterneering studios</a>
        </p>
        <a href='https://alterneering.com' target='_blank'>
          <img src="/alterneering-logo.svg" alt="Alterneering studios logo" />
        </a>
        
        </footer>

  
    </motion.div>
    </div>
  )

}

// This gets called on every request
export async function getServerSideProps() {
  let firebase = await loadFirebase()
  let db = firebase.firestore()
  var result = {}
  var maximum_ranges = {}

  
  
  /**
   * ACTIONS
   */

  // Set action collection reference
  let actionsRef = db.collection('actions')

  // Find maximum result for that specific collection
  let actionMaxRef = actionsRef.orderBy('id', 'desc').limit(1);
  let actionMax = await actionMaxRef.get()
  .then(snapshot => {
    if (snapshot.empty) {
      console.log('No matching documents.');
      return;
    }  

    snapshot.forEach(doc => {
      maximum_ranges.action = doc.data().id
    });
  })
  .catch(err => {
    console.log('Error getting documents', err);
  });

  // Random number between 1 and maximum_ranges of that specific collection 
  let action_id = Math.floor((Math.random() * maximum_ranges.action) + 1);

  // Query the specific document
  let action = await actionsRef.where('id', '==', action_id).get() 
    .then(snapshot => {
      snapshot.forEach(doc => {
        // console.log(doc.data())
        result.action = doc.data()
      });
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });

   /**
   * OBJECT
   */

  // Set action collection reference
  let objectRef = db.collection('objects')

  // Find maximum result for that specific collection
  let objectMaxRef = objectRef.orderBy('id', 'desc').limit(1);
  let objectMax = await objectMaxRef.get()
  .then(snapshot => {
    if (snapshot.empty) {
      console.log('No matching documents.');
      return;
    }  

    snapshot.forEach(doc => {
      maximum_ranges.object = doc.data().id
    });
  })
  .catch(err => {
    console.log('Error getting documents', err);
  });

  // Random number between 1 and maximum_ranges of that specific collection 
  let object_id = Math.floor((Math.random() * maximum_ranges.object) + 1);

  // Query the specific document
  let object = await objectRef.where('id', '==', object_id).get() 
    .then(snapshot => {
      snapshot.forEach(doc => {
        // console.log(doc.data())
        result.object = doc.data()
      });
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });

  /**
   * NEED
   */

  // Set action collection reference
  let needRef = db.collection('needs')

  // Find maximum result for that specific collection
  let needMaxRef = needRef.orderBy('id', 'desc').limit(1);
  let needMax = await needMaxRef.get()
  .then(snapshot => {
    if (snapshot.empty) {
      console.log('No matching documents.');
      return;
    }  

    snapshot.forEach(doc => {
      maximum_ranges.need = doc.data().id
    });
  })
  .catch(err => {
    console.log('Error getting documents', err);
  });

  // Random number between 1 and maximum_ranges of that specific collection 
  let need_id = Math.floor((Math.random() * maximum_ranges.need) + 1);

  // Query the specific document
  let need = await needRef.where('id', '==', need_id).get() 
    .then(snapshot => {
      snapshot.forEach(doc => {
        // console.log(doc.data())
        result.need = doc.data()
      });
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });

  /**
   * WORLD
   */

  // Set action collection reference
  let worldRef = db.collection('worlds')

  // Find maximum result for that specific collection
  let worldMaxRef = worldRef.orderBy('id', 'desc').limit(1);
  let worldMax = await worldMaxRef.get()
  .then(snapshot => {
    if (snapshot.empty) {
      console.log('No matching documents.');
      return;
    }  

    snapshot.forEach(doc => {
      maximum_ranges.world = doc.data().id
    });
  })
  .catch(err => {
    console.log('Error getting documents', err);
  });

  // Random number between 1 and maximum_ranges of that specific collection 
  let world_id = Math.floor((Math.random() * maximum_ranges.world) + 1);

  // Query the specific document
  let world = await worldRef.where('id', '==', world_id).get() 
    .then(snapshot => {
      snapshot.forEach(doc => {
        // console.log(doc.data())
        result.world = doc.data()
      });
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });

  /**
   * PREMISE
   */

  // Set action collection reference
  let premiseRef = db.collection('premises')

  // Find maximum result for that specific collection
  let premiseMaxRef = premiseRef.orderBy('id', 'desc').limit(1);
  let premiseMax = await premiseMaxRef.get()
  .then(snapshot => {
    if (snapshot.empty) {
      console.log('No matching documents.');
      return;
    }  

    snapshot.forEach(doc => {
      maximum_ranges.premise = doc.data().id
    });
  })
  .catch(err => {
    console.log('Error getting documents', err);
  });

  // Random number between 1 and maximum_ranges of that specific collection 
  let premise_id = Math.floor((Math.random() * maximum_ranges.premise) + 1);

  // Query the specific document
  let premise = await premiseRef.where('id', '==', premise_id).get() 
    .then(snapshot => {
      snapshot.forEach(doc => {
        // console.log(doc.data())
        result.premise = doc.data()
      });
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });

    /***
   * Random CTAs
   */

  let ctas = [
  'Click to alternate', 
  'Click to alternate', 
  'Click to alternate', 
  'Click to alternate', 
  'Click to alternate', 
  'Click to alternate', 
  'Click to alternate', 
  'Click to alternate', 
  'Click to alternate', 
  'Click to alternate', 
  'Click to alternate', 
  'Click to alternate', 
  'Alternate another one', 
  'Alternate a new scenario',
  'Create a new future',
  'Alternate a new future',
  'Bring me to another dimension', 
  'Am I in the correct universe?', 
  'Go back to the future',
  'Another future is waiting you',
  'Try again',
  'Check the next version of you',
  'New future new you',
  ];
  
  let cta_id = Math.floor((Math.random() * ctas.length));
  result.cta = ctas[cta_id];

  //console.log(result)

  // Pass data to the page via props
  return { props: { result } }
}
export default Index