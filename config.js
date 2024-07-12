const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348027143251";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_29_07_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTk2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDYwLFxuICAgICAgICAxMyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDgxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTE2LFxuICAgICAgICAxODcsXG4gICAgICAgIDU1LFxuICAgICAgICA1NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA4MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5LFxuICAgICAgICAxNixcbiAgICAgICAgMTc2LFxuICAgICAgICAzNSxcbiAgICAgICAgOCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDcxLFxuICAgICAgICA1NixcbiAgICAgICAgMzksXG4gICAgICAgIDYyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjEzLFxuICAgICAgICA2NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDk0LFxuICAgICAgICAxODEsXG4gICAgICAgIDMyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDg4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxOTksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTcwLFxuICAgICAgICA2NixcbiAgICAgICAgMTExLFxuICAgICAgICA0OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDY1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDkyLFxuICAgICAgICA3MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTYxLFxuICAgICAgICA2NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzcsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDUxLFxuICAgICAgICA5NCxcbiAgICAgICAgODIsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDg2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDQxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDY1LFxuICAgICAgICA5MixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgODMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDExLFxuICAgICAgICAzNSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDkwLFxuICAgICAgICAxMTksXG4gICAgICAgIDg5LFxuICAgICAgICAzLFxuICAgICAgICA4OSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxLFxuICAgICAgICAyMyxcbiAgICAgICAgNTksXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNzksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTAwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjUzLFxuICAgICAgICA1MCxcbiAgICAgICAgMjE1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDg1LFxuICAgICAgICAxMSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjU1LFxuICAgICAgICA3OCxcbiAgICAgICAgNDksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDM2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDExNSxcbiAgICAgICAgODAsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDYxLFxuICAgICAgICAyNSxcbiAgICAgICAgNjksXG4gICAgICAgIDU5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQ3LFxuICAgICAgICA2MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDk3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAwLFxuICAgICAgICA2OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTc0LFxuICAgICAgICA1NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDQxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjEyLFxuICAgICAgICA0NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDgyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjMzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTg2LFxuICAgICAgICAzNixcbiAgICAgICAgMTY3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDMsXG4gICAgICAgIDY0LFxuICAgICAgICA5MCxcbiAgICAgICAgMjQwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQzLFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOTEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTHhVZVFqSTFoZmpIKytzMnN4K2VSekwxMVZNd0tvSmFwSnJmZ1VsaWFPND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MDI3MTQzMjUxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJEQzlFM0I1NjY5MzA2NDE1NDM2Q0NDQzhBREQzRjNDOVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA3ODAxNjhcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MDI3MTQzMjUxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxRjc1N0U4MTAwQURGMUUxRDNFRDRBNzE3QjlFQTU5NlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA3ODAxNzBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWm1QSUFXVzZTNTIwODdXVTFQZllId1wiLFxuICBcInBob25lSWRcIjogXCIxOTYxMDg3MS1mMjdmLTRkMGEtYWM2Yy1jNzUzNzg5MWRkOTRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA2LFxuICAgICAgMjU1LFxuICAgICAgMTYzLFxuICAgICAgMTg3LFxuICAgICAgNTksXG4gICAgICAxNzksXG4gICAgICAxMDMsXG4gICAgICA5NSxcbiAgICAgIDE0OSxcbiAgICAgIDcyLFxuICAgICAgMTksXG4gICAgICA3MixcbiAgICAgIDE3NCxcbiAgICAgIDE4NSxcbiAgICAgIDE5MCxcbiAgICAgIDY3LFxuICAgICAgMTE0LFxuICAgICAgNSxcbiAgICAgIDI3LFxuICAgICAgMjU0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYxLFxuICAgICAgMTU1LFxuICAgICAgMzAsXG4gICAgICAyMzgsXG4gICAgICAxMjksXG4gICAgICA0NCxcbiAgICAgIDI3LFxuICAgICAgMTQyLFxuICAgICAgMTA1LFxuICAgICAgMTgzLFxuICAgICAgMTY4LFxuICAgICAgMjA4LFxuICAgICAgOTEsXG4gICAgICA4NCxcbiAgICAgIDMxLFxuICAgICAgMTQzLFxuICAgICAgMTgxLFxuICAgICAgMjUwLFxuICAgICAgMjAzLFxuICAgICAgMTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMTJNVFRKU0VcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwMjcxNDMyNTE6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk1lc3NpZnVsXCIsXG4gICAgXCJsaWRcIjogXCIyMzQ0MTk2NjczNjE4NzA6N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKR21pWVFHRVArS3hMUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInNXellNMUFmeUR2eGoxMVZlWFFlUVU4MlN1dFRScldsWDZVQVFKRDhlQVU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwia0JXZ29TNVNaeVNXRTZOVmowWnhxdmVWcUp1WkNPbTVBM2JhUDA2UFZ1aFEyd1lWVG1YVG8zb09oTUgrazFrbzBNWWMyaTh1Y1BIK1liOVpWMWh4QVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTGRtSk85YkVDekZuNkxpbEFPalc2cy9YYUQzengzcm1TRW5BVzJaNG91b01GRVlWYlh4WWkyNlB4Snl6eWgremRYVzkxaXYzeFZFUEJhNHVQYUJ1QWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODAyNzE0MzI1MTo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA3ODAxNjMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHdWpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUd1ai5qc29uIjogIntcImtleURhdGFcIjpcImo5Q09RQ1N0LzZjQUQxNys4UGkvVktSODdRNVhHMERsNkhkZWVkVzZzM0k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTYxOTE1MzY4MCxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
