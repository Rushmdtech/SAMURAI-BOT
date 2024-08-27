const fs = require('fs') 
const path = require('path')
const chalk = require('chalk') 
const { en, es, ar, id, pt, rs} = require('./libs/idiomas/total-idiomas.js') 

//---------[ PROPIETARIO/OWNER ]---------
global.owner = [["94762498519", "RUSH TECH", true], ["94762498519"]]
global.mods = []
global.premium = []  
global.blockList = []  

//---------[ NOMBRE/INFO ]---------
global.botname = "𝗥𝗨𝗦𝗛𝗤𝗘𝗘𝗡𝗣𝗜𝗧𝗛𝗨-𝐁𝐎𝐓 🔖"
global.wm = '𝗥𝗨𝗦𝗛𝗤𝗘𝗘𝗡𝗣𝗜𝗧𝗛𝗨-𝐁𝐎𝐓 🔖'
global.vs = '1.0 (beta)'

//Función beta : 𝘁𝗵𝗶𝘀 𝘄𝗵𝗮𝘁𝘀𝗮𝗽𝗽 𝗯𝗼𝘁 𝗰𝗿𝗲𝗮𝘁𝗲𝗱 𝗯𝘆 𝗿𝘂𝘀𝗵 𝘁𝗵𝗶𝘀 𝗶𝘀 𝗾𝗲𝗲𝗻 𝗽𝗶𝘁𝗵𝘂 
global.botNumberCode = "" //E𝘅𝗮𝗺𝗽𝗹𝗲: +94761111111
global.phoneNumber = ""

//---------[ FECHA/IDIOMAS ]---------
global.place = 'America/Thule' // Aquí puedes encontrar tu ubicación https://momentjs.com/timezone/
global.lenguaje = es //Predeterminado en idioma Español 
global.prefix = [`/`]

//---------[ APIS GLOBAL ]---------
global.keysZens = ['LuOlangNgentot', 'c2459db922', '37CC845916', '6fb0eff124', 'hdiiofficial', 'fiktod', 'BF39D349845E', '675e34de8a', '0b917b905e6f']; 
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]; 
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']; 
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]; 
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']; 
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]; 
global.lolkeysapi = ['GataDios']; // ['BrunoSobrino_2'] 
global.itsrose = ['4b146102c4d500809da9d1ff'];
global.API = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({...query, ...(apikeyqueryname ? {[apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name]} : {})})) : '');

global.APIs = {
//ApiEmpire: 'https://',
CFROSAPI: 'https://api.cafirexos.com',
nrtm: 'https://fg-nrtm.ddns.net',
fgmods: 'https://api.fgmods.xyz', 
xteam: 'https://api.xteam.xyz',
dzx: 'https://api.dhamzxploit.my.id',
lol: 'https://api.lolhuman.xyz',
neoxr: 'https://api.neoxr.my.id',
zenzapis: 'https://api.zahwazein.xyz',
akuari: 'https://api.akuari.my.id',
akuari2: 'https://apimu.my.id',
botcahx: 'https://api.botcahx.biz.id',
ibeng: 'https://api.ibeng.tech/docs',
rose: 'https://api.itsrose.site',
popcat: 'https://api.popcat.xyz',
xcoders: 'https://api-xcoders.site',
vihangayt: 'https://vihangayt.me',
erdwpe: 'https://api.erdwpe.com',
xyroinee: 'https://api.xyroinee.xyz',
nekobot: 'https://nekobot.xyz'
},
global.APIKeys = {
'https://api.xteam.xyz': `${keysxteam}`,
'https://api.lolhuman.xyz': 'GataDios',
'https://api.neoxr.my.id': `${keysneoxr}`,
'https://api.zahwazein.xyz': `${keysxxx}`,
'https://api.fgmods.xyz': 'DRLg5kY7', 
'https://api-fgmods.ddns.net': 'fg-dylux',
'https://api.botcahx.biz.id': 'Admin',
'https://api.ibeng.tech/docs': 'tamvan',
'https://api.itsrose.site': 'Rs-Zeltoria',
'https://api-xcoders.site': 'Frieren',
'https://api.xyroinee.xyz': 'uwgflzFEh6'
};
 
//---------[ STICKERS ]---------
global.packname = "𝗥𝗨𝗦𝗛-𝐁𝐎𝐓 🔖"
global.author = `${vs}`

 global.catalogo = "https://qu.ax/WlyB.jpg"
 
 //-----[Estilo]------------
 global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -888888, status: 1, surface : 1, message: botname, orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}
 
//---------[ IMAGEN ]---------
global.img = "https://telegra.ph/file/203215764dfc77e42e9cc.jpg"
global.img1 = 'https://telegra.ph/file/203215764dfc77e42e9cc.jpg'
global.img2 = 'https://telegra.ph/file/203215764dfc77e42e9cc.jpg'
global.vid1 = "https://telegra.ph/file/203215764dfc77e42e9cc.jpg"

global.imagen1 = "https://telegra.ph/file/203215764dfc77e42e9cc.jpg"
global.imagen2 = "https://telegra.ph/file/203215764dfc77e42e9cc.jpg"
global.imagen3 = "https://telegra.ph/file/203215764dfc77e42e9cc.jpg"
global.noperfil = "https://telegra.ph/file/203215764dfc77e42e9cc.jpg"

//---------[ ENLACES ]---------
global.md = 'https://github.com/RUSH/RUSH-BOT'
global.yt = 'https://www.youtube.com/@Rush_yt'
global.tiktok = 'https://www.tiktok.com/@rush_yt?_t=8mjJpoJfOBK&_r=1'
global.fb = 'https://www.facebook.com/profile.php?id=1000877105'
global.faceb = 'https://www.facebook.com/profile.php?id=1000877mibext=kFxxJD'
global.paypal = 'https://www.paypal.me/Moncada72' 

global.host = 'https://chat.whatsapp.com/DS6iXMBCCgCKlc3Pvaf9rh' //Infinity-host
global.nna = 'https://chat.whatsapp.com/DS6iXMBCCgCKlc3Pvaf9rh' //Update 
global.nn = 'https://chat.whatsapp.com/DS6iXMBCCgCKlc3Pvaf9rh' //𝗥𝘂𝘀𝗵-𝐁𝐎𝐓
global.nn2 = 'https://chat.whatsapp.com/DS6iXMBCCgCKlc3Pvaf9rh' //Loli & Nova
global.nn3 = 'https://chat.whatsapp.com/DS6iXMBCCgCKlc3Pvaf9rh' //Grupo de Colaboracion
global.nn4 = 'https://chat.whatsapp.com/DS6iXMBCCgCKlc3Pvaf9rh' // Grupo COL 2
global.nn5 = 'https://chat.whatsapp.com/DS6iXMBCCgCKlc3Pvaf9rh' //Grupo COL 3
global.nn6 = 'https://chat.whatsapp.com/DS6iXMBCCgCKlc3Pvaf9rh' //test
global.nn7 = 'https://chat.whatsapp.com/DS6iXMBCCgCKlc3Pvaf9rh' //Grupo ayuda sobre el bot
global.nn8 = 'https://chat.whatsapp.com/DS6iXMBCCgCKlc3Pvaf9rh' //enlace Rush-BOT
global.multi = 'https://chat.whatsapp.com/DS6iXMBCCgCKlc3Pvaf9rh' //Grupo náufrazapp
global.nna2 = 'https://github.com/Rush54/RUSH-BOT'
global.n2 = "https://chat.whatsapp.com/DS6iXMBCCgCKlc3Pvaf9rh"
//---------[ INFO ]--------- 
global.info = { wait: '*⌛ _Cargando..._ ▬▭▭▭▭▭▭*', 
waitt: '*⌛ _Cargando..._ ▬▬▭▭▭*', 
waittt: '*⌛ _Cargando..._ ▬▬▬▬▭▭*', 
waitttt: '*⌛ _Cargando..._ ▬▬▬▬▬▬▭*', 
waittttt: '*⌛ _Cargando..._ ▬▬▬▬▬▬▬*', 
result: `${lenguaje['exito']()}`,  
admin: `${lenguaje['admin']()}`, 
botAdmin: `${lenguaje['botAdmin']()}`, 
owner: `${lenguaje['propietario']()}`, 
premium: `${lenguaje['prem']()}`,                
group: `${lenguaje['group']()}`, 
private: `${lenguaje['private']()}`, 
bot: `${lenguaje['bot']()}`, 
error: `${lenguaje['error']()}`, 
advertencia: `${lenguaje['advertencia']()}`, 
registra: `${lenguaje['registra']()}`, 
limit: `${lenguaje['limit']()}`, 
AntiNsfw: `${lenguaje['AntiNsfw']()}`,
endLimit: `${lenguaje['endLimit']()}`, }
global.rwait = '🕛'
global.dmoji = '🧐'
global.done = '⚔️'
global.error = '😖' 
global.xmoji = '🥵' 

//---------------[ NIVELES, ADVERTENCIA ]----------------
global.multiplier = 180 // Cuanto más alto, más difícil subir de nivel 
global.maxwarn = '4' // máxima advertencias 

//----------------------------------------------------

let file = require.resolve(__filename) 
fs.watchFile(file, () => { 
fs.unwatchFile(file)
const fileName = path.basename(file)
console.log(chalk.greenBright.bold(`Update '${fileName}'.`)) 
delete require.cache[file] 
require(file) 
})
