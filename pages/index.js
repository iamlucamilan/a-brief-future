import Head from 'next/head'
import Link from 'next/link'
import fetch from 'node-fetch'
import {loadFirebase} from '../lib/db.js'
import { database } from 'firebase'
import { motion } from "framer-motion"



function Index({ result }) {
  var reload = () => { 
    window.location.reload()
  }

const MyComponent = () => (
  <motion.div
    animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }} className = "example"
  />
)

  return (
    <div className="container">
        {/* <MyComponent /> */}

        <Link href="/about"><a className="about-link">☉</a></Link>
        
        <img src="/a-brief-future-logo.svg" alt="A brief future logo" className="logo" />

        
        
        
  

        <div className="card">
          <div className="brief">
            <p>
              <span className="highlight">You are </span><br/>
              {result.world.value} {result.premise.value}
            </p>
            <p>
              <span className="highlight">and you have to </span><br/> 
              {result.action.value} for {result.object.value} {result.need.value}
            </p>
          </div>
          <div className="brief-id">
            <small>{result.world.id}-{result.premise.id}-{result.action.id}-{result.object.id}-{result.need.id}</small>
          </div>
        </div>
        <img src="/drip.svg" alt="drip" className="drip" />

        <button onClick={() => reload()} className="btn" type="button" value="alternate">Alternate</button>
        <footer>
        <p>
          A tool by <br/> <a href='https://www.alterneering.com' target='_blank'>alterneering studios</a>
        </p>
        <img src="/alterneering-logo.svg" alt="Alterneering studios logo" />
        </footer>

  
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
        console.log(doc.data())
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
        console.log(doc.data())
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
        console.log(doc.data())
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
        console.log(doc.data())
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
        console.log(doc.data())
        result.premise = doc.data()
      });
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });




  console.log(result)

  // Pass data to the page via props
  return { props: { result } }
}
export default Index