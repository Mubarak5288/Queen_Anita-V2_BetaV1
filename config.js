//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0MxYlB6LzUwTlRVMUZOY1RkSTdiVm5PWDZoRW1uN2tLT1h5MzU1L3NFcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMWIrRHBjejE1Q0dkNHg1SWJ6aWZPNFArRVBxRGJKeDI5RFdyUit0Sjkwdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTTFB4c0tFaGZrc01TWkJlQnJ5b0FENk1JclhZempDcUZVSENnSjhUU1ZnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0K1RXOHMvU29wcmp0L0JuVTVOYXdnbE1QUHhMenVDczI4YnN3bktqWUhjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdCeDF2WTZyYzJSaEQ0NThDMHgyTDROMDByODNNdUpPanRWdUpHV3JqVWc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRMTkJIdVB1eHNPVC9wNWFmRG5rTGNKK0FpRjZnNFBpZENtb2ZyTStIR0U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0VyRWRhbmRaMnBLSFBoQkRnNEFXRS9FYTZtTFhMQWpiUWw3QlhObjRGMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUllVck1xeEc3MUpFNm9rbWxZK09KNGR4TGxSSmxxSDIrNVM1ankrVWpWcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldiamdqMFd6YTFXTUsxc1IwNzZrSnppcy9leDZacGwwUHRSVFJqWWVkRzRMTDNHMTRQWTI2TXZMWFpwSTZlaFNwbndHd1RGWTN6QituWit3VFEwSkJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NSwiYWR2U2VjcmV0S2V5IjoidmtiN0hEZ2V5SzhPMHF5QWIyR3E0ekw4OTl1LzloU3pNWko5ZVloS0ZtRT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ4MDg0OTk4MDEzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNBMDRFRkU1MDg2Njg4RTZGMTc2In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjM5MjI4MDl9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkpsZTM1MHgzU1gyc1F6Zy14OHk0MFEiLCJwaG9uZUlkIjoiOTBjNWRlYWUtY2E2ZS00MTgzLThiMjgtN2ZkYzYxMzgxZDVmIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1OR0F3WlNMK08rOWxlU21HbXdybUpLOE9Sdz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIycG9ETnVsYk9WWGxBOUpwUHc1NWlnUDQ1dEU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQVJSWkhEQlIiLCJtZSI6eyJpZCI6IjIzNDgwODQ5OTgwMTM6N0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJUaGUgRWR1cHJlbmV1ciJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUHpYdElBSkVPbnlnN1lHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiQ3g2MVY3LzZoSVhJdW9KY2w3T1d4QXhWMXdpWlpDUGtrSlpHTFJtTWppZz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiS3JZcndic3BSeWZocVVMWGE3dGNJOUNEdmhDWkNZWjcyWDhFT1ZKdk9wd2NWNklYS0owUTFoaDJGQlRBQ3kwNU9Qb1JFcUhnbXQ5VXo1cXh3dkJTaUE9PSIsImRldmljZVNpZ25hdHVyZSI6InF2YzdLcHpFY0IyUDIwTEdlZEc2NndRaG5FNytzZVhWM05xMllhSFV0cVJKSG5oRlFMa2ZQSkhjdCtrSGNYOEtRSU9yZ3J3SVJLR2F3MGlDYVNBL0F3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0ODA4NDk5ODAxMzo3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlFzZXRWZS8rb1NGeUxxQ1hKZXpsc1FNVmRjSW1XUWo1SkNXUmkwWmpJNG8ifX1dLCJwbGF0Zm9ybSI6ImlwaG9uZSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMzkyMjgwNSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFBYlkifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
