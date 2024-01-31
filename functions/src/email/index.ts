import { functions } from '../commons-init'
import * as constants from '../constants'

const nodemailer = require("nodemailer");
const {google} = require('googleapis');

const EMAIL = constants.EMAIL
const CLIENTID = constants.CLIENTID
const CLIENTSECRET = constants.CLIENTSECRET
const REFRESHTOKEN = constants.REFRESHTOKEN

const OAuth2_client = new google.auth.OAuth2(CLIENTID, CLIENTSECRET)
OAuth2_client.setCredentials({ refresh_token: REFRESHTOKEN})

const Logger = functions.logger
const accessToken = OAuth2_client.getAccessToken()

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: EMAIL,
    clientId: CLIENTID,
    clientSecret: CLIENTSECRET,
    refreshToken: REFRESHTOKEN,
    accessToken: accessToken
  }
})

export const sendContato = functions.https.onCall( async (data:any, context:any) => {
  return sendEmail(data)
})

async function sendEmail(data:any) {

  let email = data.email
  let subject = data.subject
  let html = data.html
  let text = data.text

  const msg = {
    from: `<${EMAIL}>`,
    to: email,
    subject: subject,
    text: text,
    html: html,
  }

  await transporter.sendMail(msg)
    .then((response:any) => {
      Logger.log(response)
    })
    .catch((error:any) => {
      Logger.error(error.response.body.errors)
    })

  return 'mensagem enviada com sucesso'
}

