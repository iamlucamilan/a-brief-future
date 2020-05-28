import Head from 'next/head'
import Link from 'next/link'
import fetch from 'node-fetch'
import {loadFirebase} from '../lib/db.js'
import { database } from 'firebase'

function Index({ result }) {
  return (
    <div>
        <h2>A brief future</h2>
        <p>Lorem ipsum</p>
  <p>You are {result.world.value} {result.premise.value} and you have to {result.action.value} for {result.object.value} {result.need.value}</p>
  <p>{result.world.id}-{result.premise.id}-{result.action.id}-{result.object.id}-{result.need.id}</p>
    </div>
  )

}

// This gets called on every request
export async function getServerSideProps() {
  let firebase = await loadFirebase()
  let db = firebase.firestore()
  var result = {}

  // const document = db.collection('actions').doc()
  // const documentUuid = document.id
  // console.log(documentUuid)
  

  // Retrieve action

  let actionsRef = db.collection('actions').limit(1)
  let action = await actionsRef.get() 
    .then(snapshot => {
      snapshot.forEach(doc => {
        console.log(doc.data())
        result.action = doc.data()
      });
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });


  // Retrieve object

  let objectsRef = db.collection('objects').limit(1)
  let object = await objectsRef.get() 
    .then(snapshot => {
      snapshot.forEach(doc => {
        console.log(doc.data())
        result.object = doc.data()
      });
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });

  // Retrieve need

  let needsRef = db.collection('needs').limit(1);
  let need = await needsRef.get() 
    .then(snapshot => {
      snapshot.forEach(doc => {
        console.log(doc.data())
        result.need = doc.data()
      });
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });

  // Retrieve world

  let worldsRef = db.collection('worlds').limit(1);
  let world = await worldsRef.get() 
    .then(snapshot => {
      snapshot.forEach(doc => {
        console.log(doc.data())
        result.world = doc.data()
      });
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });

  // Retrieve premise
  
  let premisesRef = db.collection('premises').limit(1);
  let premise = await premisesRef.get() 
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