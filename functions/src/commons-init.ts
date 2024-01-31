import * as admin from 'firebase-admin'
import * as functions from 'firebase-functions'

var serviceAccount = require("../key/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const firestore = admin.firestore()
const storage = admin.storage()
const auth:any = admin.auth()

firestore.settings({ timestampsInSnapshots: true })

export { admin, functions, firestore, storage, auth }

