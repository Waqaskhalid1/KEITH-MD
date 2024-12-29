/* Bot settings 

You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep */


const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMlBPOXFTY0psdkFwTGdqczBqMjk1WGgxTXNzcWRmN0dRZFNYM3NxVEcwRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU2swaUpiZWpBZTZROTZqekFDZTZJNVFxYjZhSjBlc21HUXYvNzNqQWdtVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzRkRtUlEySk9TWWhUQjNydnZEUHhaN240M1ptekZ4MW1LR3gwS2U3NUdzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmbytTMkxUVHBBSWFHQ21jemV2bnVVTmRvUFJRNmVhNWdsRVF0dkpWSVJBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVCTzFzU0d3WGxTTEYwY1VDRWpVbnhmeTQvZVp4d2twalJidmdJRXJuMTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllaNmtsQjh4bGRuc0RTb3dUY0hxckNtYTVJNW9pZzVHQnVKWHpVcDlPaVk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT05tTkEzZFF2RjFtWjVKNWdhWE5CRk1XT3hXU1BneHRYMU9YV0FqWWFGWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibzIyTXhmMjVCdHppbVQyNllQRE5IUE54M2JWc28xYUVGbkEvbXVXSytDOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImltT2h4SHNTTFgyb1pkTFlBYzhGRExXT013cEtYenVTNi91MngvbGQ2V2NFYjJLOXhrb1Z3RGJETWRDa3FXSE5UQmxwN2NiZDVRQzV6UkJURHBUVWlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUyLCJhZHZTZWNyZXRLZXkiOiJZWU45TWlOalVqUEcyR1creGZVUytmR3FBREE0cmNTTHNzRHhlZ1hSeVBjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzA1MjQ5MjAwOUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzMjZENzZBQUExNjJGNjQ4QzkwRDQ4NjY4RDRDODFGQyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzM1NDQ4NzEzfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI4eWxwOUhmU1JQU0hvd1d6ckNwVFFBIiwicGhvbmVJZCI6IjJhZGY1OGVmLTdmZDYtNDBhOS1iZmNiLTkzMzY2NDg5M2U0YyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0RWpNRmJtTFFmM2ZYTll3bjAwZkFYYklucEE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibFNsNi9lOGlSRnVZcmRjcUhpRWY5L0RIdmxFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkxLOUZZM0U0IiwibWUiOnsiaWQiOiI5MjMwNTI0OTIwMDk6MjRAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xMVCsvWURFUG13dzdzR0dCa2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjdPazQ1RHJuVHllYjdKdm1hSVdtTk85WER1Z0tiL2dLemthMzNyYUFEVUE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjU2aWVaY01BZEdqc0NHa3VTUTgwVlFISDlTMmJteHljblM5OFYvZFR6VGpvUEt1OThuQ05jd0Q0cXdJRVliMnR0WG5KRzcycHJ3aUwyUHdUQThicEJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJBOXU5a0swMm1NTFZoaTVDcG9pU3k1TVo5UGtjcERVYXVEa2dqdDlBWEg3WkdxT0tKaFNoSmFibDMvaGFxVU00QitTcGEzeERDYVJlR29ld0M5TkNqQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzA1MjQ5MjAwOToyNEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlenBPT1E2NTA4bm0reWI1bWlGcGpUdlZ3N29DbS80Q3M1R3Q5NjJnQTFBIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM1NDQ4NzEwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU8rSCJ9';

const prefix = process.env.PREFIX || '';
const mycode = process.env.CODE || "923052492009";
const author = process.env.STICKER_AUTHOR || 'Keith';
const packname = process.env.PACKNAME || 'keith';
const dev = process.env.DEV || '254748387615';
const DevKeith = dev.split(",");
const botname = process.env.BOTNAME || 'KEITH-MD';
const mode = process.env.MODE || 'public';
const gcpresence = process.env.GC_PRESENCE || 'false';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'online';

const antitag = process.env.ANTITAG || 'true';
const api = process.env.API || 'true';
const appname = process.env.APPNAME || 'true';
const antispam = process.env.ANTISPAM || 'true';
const chatbot = process.env.CHAT_BOT || 'true';
const antilink = process.env.ANTILINK || 'true';
const autoreact = process.env.AUTOREACT || 'true';
const antibot = process.env.ANTIBOT || 'true';
const anticall = process.env.ANTICALL || 'true';
const antibad = process.env.ANTI_BAD_WORD || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const permit = process.env.PM_PERMIT || 'true';
const autoread = process.env.AUTOREAD || 'false';
const autobio = process.env.AUTOBIO || 'false';

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  botname,
  api,
  appname,
  permit,
  autobio,
  autoreact,
  mode,
  antibad,
  antilink,
  prefix,
  anticall,
  chatbot,
  autolike,
  mycode,
  author,
  packname,
  dev,
  DevKeith,
  gcpresence,
  antionce,
  antibot,
  session,
  antitag,
  antidelete
};
