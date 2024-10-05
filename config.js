const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "9046377550";


//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_14_18_10_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDExNixcbiAgICAgICAgODYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyLFxuICAgICAgICAyMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTM0LFxuICAgICAgICAzNixcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOSxcbiAgICAgICAgMjIyLFxuICAgICAgICA4MixcbiAgICAgICAgNDMsXG4gICAgICAgIDc0LFxuICAgICAgICA5NixcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzYsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMzksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDk1LFxuICAgICAgICAzMixcbiAgICAgICAgNTIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMzMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDMzLFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTI2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDg1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxODksXG4gICAgICAgIDg5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMTksXG4gICAgICAgIDUxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzMixcbiAgICAgICAgNCxcbiAgICAgICAgMjAzLFxuICAgICAgICA4NyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDczLFxuICAgICAgICAyMTIsXG4gICAgICAgIDgyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTEzLFxuICAgICAgICA3MixcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDgyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDQ1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTYxLFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDYzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTcsXG4gICAgICAgIDY5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODUsXG4gICAgICAgIDcwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxODQsXG4gICAgICAgIDQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDk5LFxuICAgICAgICA4NyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTksXG4gICAgICAgIDczLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTA1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDg0LFxuICAgICAgICAxODgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQ2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTA4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTYzLFxuICAgICAgICA3MixcbiAgICAgICAgMTczLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNjhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA2MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTksXG4gICAgICAgIDc3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjksXG4gICAgICAgIDExNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTIwLFxuICAgICAgICA5NixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDYzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNCxcbiAgICAgICAgMTYyLFxuICAgICAgICA0MixcbiAgICAgICAgMjE0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTMzLFxuICAgICAgICA2MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDY0LFxuICAgICAgICAyNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDksXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDU2LFxuICAgICAgICAzNixcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJsU0l2WEhKSzFFT2lBRWJiYVhaVzhiWFZCYm5ZdnVkYmRwMjNjNlhHWGE0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ6Z2VrNEt2MFM2T2I0TEk4U3Q4anZBXCIsXG4gIFwicGhvbmVJZFwiOiBcImQzZTI3YTczLTQzZjMtNDQ4MS04ZGVjLWJlYzc4YzAzMDllY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDIsXG4gICAgICA0NyxcbiAgICAgIDgsXG4gICAgICAxNTAsXG4gICAgICAyMjUsXG4gICAgICAyMzAsXG4gICAgICAyNTIsXG4gICAgICA5NyxcbiAgICAgIDE1MyxcbiAgICAgIDUwLFxuICAgICAgMzIsXG4gICAgICA2NCxcbiAgICAgIDIzNyxcbiAgICAgIDIwMixcbiAgICAgIDE0LFxuICAgICAgNzAsXG4gICAgICAyMzAsXG4gICAgICAzOSxcbiAgICAgIDE2MSxcbiAgICAgIDE4NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk2LFxuICAgICAgMTE4LFxuICAgICAgOSxcbiAgICAgIDExNyxcbiAgICAgIDMsXG4gICAgICA0NCxcbiAgICAgIDI1NSxcbiAgICAgIDg2LFxuICAgICAgMTQ5LFxuICAgICAgMjM5LFxuICAgICAgMTY5LFxuICAgICAgNTgsXG4gICAgICA0NSxcbiAgICAgIDE0OCxcbiAgICAgIDExNCxcbiAgICAgIDI3LFxuICAgICAgNCxcbiAgICAgIDEwOSxcbiAgICAgIDIzMSxcbiAgICAgIDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKcms5SllDRUxDVmhiZ0dHQVlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIisyVE5saFo0NWxFZTkyQkRxUTFwK1F0Q3JnTkFLa2ZIZFIvSVFpM2tpRW89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNTkwQ0pwZG15QTc0ajhUZVJCZi9BTUtqYTM2RTAwWGR5ZEU4SjV0YzdrVE8vYldhSzdiUk9lZTBPWnE4VW5XSW94b0duck9Fbk02aTZva3VvTnRQQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZngxK1lTcHc4VGQxTkUvdkQraGFuK1J5TjhPcGNIY0Fzd0hVWjZQY1RZSXpqa0pFN0RyNUFidm5GTE1DWGNLQjZmMEJHclJ5RHpnUHpTUXJGTWI2aWc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDQ2Mzc3NTUwOjk3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI4OTIwNjcwNTY2MDA1MDo5N0BsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNDYzNzc1NTA6OTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA3NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI4MTM3OTA4XG59Igp9",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
