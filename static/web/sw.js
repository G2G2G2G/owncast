if(!self.define){let e,i={};const c=(c,s)=>(c=new URL(c+".js",s).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(s,n)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let t={};const r=e=>c(e,a),f={module:{uri:a},exports:t,require:r};i[a]=Promise.all(s.map((e=>f[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-b3600c15"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/Rq66_O_ZJbVqbMaJyNb1M/_buildManifest.js",revision:"167efad1030056f7a74e25c8f9714573"},{url:"/_next/static/Rq66_O_ZJbVqbMaJyNb1M/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/1008.99dec4b2a66b68e7.js",revision:"99dec4b2a66b68e7"},{url:"/_next/static/chunks/1010.2824dc68f3138394.js",revision:"2824dc68f3138394"},{url:"/_next/static/chunks/1024-5a1e8ff2a937f106.js",revision:"5a1e8ff2a937f106"},{url:"/_next/static/chunks/1051-b6952ebdb32dc661.js",revision:"b6952ebdb32dc661"},{url:"/_next/static/chunks/1053.8687cfd8a17fc072.js",revision:"8687cfd8a17fc072"},{url:"/_next/static/chunks/1084.6bea57384cba1ae4.js",revision:"6bea57384cba1ae4"},{url:"/_next/static/chunks/1130-4a8370230d0a99ac.js",revision:"4a8370230d0a99ac"},{url:"/_next/static/chunks/1264.e6ff55cd5932bf21.js",revision:"e6ff55cd5932bf21"},{url:"/_next/static/chunks/1390.84dcc17c9edf9dce.js",revision:"84dcc17c9edf9dce"},{url:"/_next/static/chunks/1446.d5d70ea36429f194.js",revision:"d5d70ea36429f194"},{url:"/_next/static/chunks/1529.bc79084598ec485d.js",revision:"bc79084598ec485d"},{url:"/_next/static/chunks/1538.ddeb59baf3667fde.js",revision:"ddeb59baf3667fde"},{url:"/_next/static/chunks/1594-bc7fd072fb337d6c.js",revision:"bc7fd072fb337d6c"},{url:"/_next/static/chunks/1639.f30fe9c1d7a9b7c2.js",revision:"f30fe9c1d7a9b7c2"},{url:"/_next/static/chunks/1650.2c53eeae1add6ffd.js",revision:"2c53eeae1add6ffd"},{url:"/_next/static/chunks/1660.3a875f75b87a8f91.js",revision:"3a875f75b87a8f91"},{url:"/_next/static/chunks/1664-7246e58924eb0118.js",revision:"7246e58924eb0118"},{url:"/_next/static/chunks/1668.e793f685c7b3da12.js",revision:"e793f685c7b3da12"},{url:"/_next/static/chunks/1700-e6a9bc220dc49449.js",revision:"e6a9bc220dc49449"},{url:"/_next/static/chunks/1706.a3e9374c37c19795.js",revision:"a3e9374c37c19795"},{url:"/_next/static/chunks/1749-a0dd3b94b9e443ea.js",revision:"a0dd3b94b9e443ea"},{url:"/_next/static/chunks/177.b4fb8c09dbfcfbb9.js",revision:"b4fb8c09dbfcfbb9"},{url:"/_next/static/chunks/1770.2ad43d40bf7d3f09.js",revision:"2ad43d40bf7d3f09"},{url:"/_next/static/chunks/1869.e4583025ff349656.js",revision:"e4583025ff349656"},{url:"/_next/static/chunks/1873.cf0d6495f7f707ba.js",revision:"cf0d6495f7f707ba"},{url:"/_next/static/chunks/1920.69952d11b23d14f9.js",revision:"69952d11b23d14f9"},{url:"/_next/static/chunks/1965.0e0251161f1da8ee.js",revision:"0e0251161f1da8ee"},{url:"/_next/static/chunks/2019-5803cd4bceffb3d9.js",revision:"5803cd4bceffb3d9"},{url:"/_next/static/chunks/2040.2b48b43e5c9bbd94.js",revision:"2b48b43e5c9bbd94"},{url:"/_next/static/chunks/2119.b057ef763f430d56.js",revision:"b057ef763f430d56"},{url:"/_next/static/chunks/2122-4597369d577e8470.js",revision:"4597369d577e8470"},{url:"/_next/static/chunks/2136.221df524236745b5.js",revision:"221df524236745b5"},{url:"/_next/static/chunks/2200.861650b77f324aca.js",revision:"861650b77f324aca"},{url:"/_next/static/chunks/228.386750529b544b44.js",revision:"386750529b544b44"},{url:"/_next/static/chunks/2314.58dfb076c32a08ac.js",revision:"58dfb076c32a08ac"},{url:"/_next/static/chunks/2348.1be85cc2e24e237d.js",revision:"1be85cc2e24e237d"},{url:"/_next/static/chunks/2386.4be277c267144098.js",revision:"4be277c267144098"},{url:"/_next/static/chunks/2406.96739077d3c84715.js",revision:"96739077d3c84715"},{url:"/_next/static/chunks/2424.f261d1fe70b432ca.js",revision:"f261d1fe70b432ca"},{url:"/_next/static/chunks/2474-a1a38c177c0a3774.js",revision:"a1a38c177c0a3774"},{url:"/_next/static/chunks/2542.82fcb9f7206aadce.js",revision:"82fcb9f7206aadce"},{url:"/_next/static/chunks/2554.a3c207d2af79fd1a.js",revision:"a3c207d2af79fd1a"},{url:"/_next/static/chunks/2602.9caa06ad22e0b475.js",revision:"9caa06ad22e0b475"},{url:"/_next/static/chunks/2675.3af9b237ab623dbf.js",revision:"3af9b237ab623dbf"},{url:"/_next/static/chunks/2711.92c0c0e183bdf565.js",revision:"92c0c0e183bdf565"},{url:"/_next/static/chunks/2877.4a5ca5df09892683.js",revision:"4a5ca5df09892683"},{url:"/_next/static/chunks/2891-2179d3003353632d.js",revision:"2179d3003353632d"},{url:"/_next/static/chunks/305.12d40e54e45183a1.js",revision:"12d40e54e45183a1"},{url:"/_next/static/chunks/3068-e7bfede5dce66569.js",revision:"e7bfede5dce66569"},{url:"/_next/static/chunks/310.491f0e2c64d30c64.js",revision:"491f0e2c64d30c64"},{url:"/_next/static/chunks/3203.8d1ea1037deb3d7c.js",revision:"8d1ea1037deb3d7c"},{url:"/_next/static/chunks/3236.001315c3b06f1d6c.js",revision:"001315c3b06f1d6c"},{url:"/_next/static/chunks/3283.5631a0b072194c3b.js",revision:"5631a0b072194c3b"},{url:"/_next/static/chunks/3314.0f3a0420056fafc0.js",revision:"0f3a0420056fafc0"},{url:"/_next/static/chunks/3366.41f38941c4bd29d5.js",revision:"41f38941c4bd29d5"},{url:"/_next/static/chunks/3371.178b555d217729cf.js",revision:"178b555d217729cf"},{url:"/_next/static/chunks/3436.1c08343f0c52c2aa.js",revision:"1c08343f0c52c2aa"},{url:"/_next/static/chunks/3465.b073db2af32c0171.js",revision:"b073db2af32c0171"},{url:"/_next/static/chunks/3482.c93cfe43ef26da10.js",revision:"c93cfe43ef26da10"},{url:"/_next/static/chunks/3509.bcdf7260c6713a58.js",revision:"bcdf7260c6713a58"},{url:"/_next/static/chunks/3519.dcd108edf45606ca.js",revision:"dcd108edf45606ca"},{url:"/_next/static/chunks/3594.d9a61df1064ed5e2.js",revision:"d9a61df1064ed5e2"},{url:"/_next/static/chunks/3595-89605f6c40acbd86.js",revision:"89605f6c40acbd86"},{url:"/_next/static/chunks/3600.ec3c85bf935e12c4.js",revision:"ec3c85bf935e12c4"},{url:"/_next/static/chunks/3669.d27956efaddfca03.js",revision:"d27956efaddfca03"},{url:"/_next/static/chunks/370.cf2cf3e43cfa8f06.js",revision:"cf2cf3e43cfa8f06"},{url:"/_next/static/chunks/3747.aae41e70ca12459b.js",revision:"aae41e70ca12459b"},{url:"/_next/static/chunks/3883.3a9cfd322a87385a.js",revision:"3a9cfd322a87385a"},{url:"/_next/static/chunks/3942-587a92a53d21baae.js",revision:"587a92a53d21baae"},{url:"/_next/static/chunks/3993.3cb15da78f59ec04.js",revision:"3cb15da78f59ec04"},{url:"/_next/static/chunks/402.61522d7324de5ef7.js",revision:"61522d7324de5ef7"},{url:"/_next/static/chunks/4060-48f8ec1312a222dd.js",revision:"48f8ec1312a222dd"},{url:"/_next/static/chunks/4103.b4b2e36445f4f876.js",revision:"b4b2e36445f4f876"},{url:"/_next/static/chunks/4104-678c4bd5a95c3cbe.js",revision:"678c4bd5a95c3cbe"},{url:"/_next/static/chunks/4143.ae79f7f8111d4763.js",revision:"ae79f7f8111d4763"},{url:"/_next/static/chunks/4144.101c47f20623d09e.js",revision:"101c47f20623d09e"},{url:"/_next/static/chunks/4163.9995900baa935173.js",revision:"9995900baa935173"},{url:"/_next/static/chunks/4212.0b90bc2f8c705b26.js",revision:"0b90bc2f8c705b26"},{url:"/_next/static/chunks/4281-aa5d95d1e3c9b12c.js",revision:"aa5d95d1e3c9b12c"},{url:"/_next/static/chunks/4293.5d96c5ca35f21d26.js",revision:"5d96c5ca35f21d26"},{url:"/_next/static/chunks/4323.380e17f0af11d738.js",revision:"380e17f0af11d738"},{url:"/_next/static/chunks/437.0360229916d42e97.js",revision:"0360229916d42e97"},{url:"/_next/static/chunks/4439.9c3626fbeafc5508.js",revision:"9c3626fbeafc5508"},{url:"/_next/static/chunks/4504.3cebe63784946714.js",revision:"3cebe63784946714"},{url:"/_next/static/chunks/4511.dc0368e4e61dfe89.js",revision:"dc0368e4e61dfe89"},{url:"/_next/static/chunks/4612.7659e623ba25b875.js",revision:"7659e623ba25b875"},{url:"/_next/static/chunks/4680-29fe88394b8c2793.js",revision:"29fe88394b8c2793"},{url:"/_next/static/chunks/4749-04a86af9f07fe7b0.js",revision:"04a86af9f07fe7b0"},{url:"/_next/static/chunks/4796.8c85c113f5cec94b.js",revision:"8c85c113f5cec94b"},{url:"/_next/static/chunks/4812.7300e9906a79288e.js",revision:"7300e9906a79288e"},{url:"/_next/static/chunks/4829.557ba6bf0dc3bb69.js",revision:"557ba6bf0dc3bb69"},{url:"/_next/static/chunks/4879.4fe33ca790d5f5f4.js",revision:"4fe33ca790d5f5f4"},{url:"/_next/static/chunks/4927.3e4e60c29d15821c.js",revision:"3e4e60c29d15821c"},{url:"/_next/static/chunks/4938-95ec47ba4886e645.js",revision:"95ec47ba4886e645"},{url:"/_next/static/chunks/4ad82c5e-0d9ecd20e8a3929e.js",revision:"0d9ecd20e8a3929e"},{url:"/_next/static/chunks/500.2072ebc587fca26a.js",revision:"2072ebc587fca26a"},{url:"/_next/static/chunks/5056-cc27c2164a5390ee.js",revision:"cc27c2164a5390ee"},{url:"/_next/static/chunks/5134.3996724b737c5a1e.js",revision:"3996724b737c5a1e"},{url:"/_next/static/chunks/520.dc96249db8eef735.js",revision:"dc96249db8eef735"},{url:"/_next/static/chunks/5213-0ca3b7b288d9b011.js",revision:"0ca3b7b288d9b011"},{url:"/_next/static/chunks/5258.01e7692fca489702.js",revision:"01e7692fca489702"},{url:"/_next/static/chunks/5283-e3572ab77e131e1d.js",revision:"e3572ab77e131e1d"},{url:"/_next/static/chunks/5308.d5749e7f7d3fd080.js",revision:"d5749e7f7d3fd080"},{url:"/_next/static/chunks/531.f0e0ac971cded446.js",revision:"f0e0ac971cded446"},{url:"/_next/static/chunks/5372.d617a9a09e3e3463.js",revision:"d617a9a09e3e3463"},{url:"/_next/static/chunks/5412.ad50a8ae6c482a24.js",revision:"ad50a8ae6c482a24"},{url:"/_next/static/chunks/5485.6af0162098d42dbd.js",revision:"6af0162098d42dbd"},{url:"/_next/static/chunks/5560-35b78231d547de53.js",revision:"35b78231d547de53"},{url:"/_next/static/chunks/5578-6adacda54ebac917.js",revision:"6adacda54ebac917"},{url:"/_next/static/chunks/5584.bfa0544b6d5b4e90.js",revision:"bfa0544b6d5b4e90"},{url:"/_next/static/chunks/5596-06d38cc42e83b9af.js",revision:"06d38cc42e83b9af"},{url:"/_next/static/chunks/5648.517b7d5b08dc25e0.js",revision:"517b7d5b08dc25e0"},{url:"/_next/static/chunks/5672.3817585c090a478c.js",revision:"3817585c090a478c"},{url:"/_next/static/chunks/5753.1abb868bf4fee535.js",revision:"1abb868bf4fee535"},{url:"/_next/static/chunks/5815.8f26effbcccf2ac2.js",revision:"8f26effbcccf2ac2"},{url:"/_next/static/chunks/5819.9315470fccff3fc0.js",revision:"9315470fccff3fc0"},{url:"/_next/static/chunks/5849.d5c776368637d8b2.js",revision:"d5c776368637d8b2"},{url:"/_next/static/chunks/5879.1c65db83444b442d.js",revision:"1c65db83444b442d"},{url:"/_next/static/chunks/5888-895853768f3bc068.js",revision:"895853768f3bc068"},{url:"/_next/static/chunks/5891-1a20795d592d3cb6.js",revision:"1a20795d592d3cb6"},{url:"/_next/static/chunks/5903.d5339d6a33a83b02.js",revision:"d5339d6a33a83b02"},{url:"/_next/static/chunks/5938-3457bd1d8b965c41.js",revision:"3457bd1d8b965c41"},{url:"/_next/static/chunks/6017-e81b9b33221b8ee4.js",revision:"e81b9b33221b8ee4"},{url:"/_next/static/chunks/6062.cf6cad1c0a014758.js",revision:"cf6cad1c0a014758"},{url:"/_next/static/chunks/6092.4f2068c2591cdce7.js",revision:"4f2068c2591cdce7"},{url:"/_next/static/chunks/6108-151e9039d7ad6833.js",revision:"151e9039d7ad6833"},{url:"/_next/static/chunks/6121.83e10deb964140ba.js",revision:"83e10deb964140ba"},{url:"/_next/static/chunks/6133.f71e361719f9eac3.js",revision:"f71e361719f9eac3"},{url:"/_next/static/chunks/6139.21e70d04ef9d5313.js",revision:"21e70d04ef9d5313"},{url:"/_next/static/chunks/617.31f729d399c43ea0.js",revision:"31f729d399c43ea0"},{url:"/_next/static/chunks/62.2c0add08a26a9813.js",revision:"2c0add08a26a9813"},{url:"/_next/static/chunks/6275.609bb61d3c09a0db.js",revision:"609bb61d3c09a0db"},{url:"/_next/static/chunks/6300-a661756794e0672f.js",revision:"a661756794e0672f"},{url:"/_next/static/chunks/6395.851f6d84ba515ecd.js",revision:"851f6d84ba515ecd"},{url:"/_next/static/chunks/6403.c0997a80e08cb503.js",revision:"c0997a80e08cb503"},{url:"/_next/static/chunks/6443.a1c9257ad6c47d80.js",revision:"a1c9257ad6c47d80"},{url:"/_next/static/chunks/6460.2693f9496eca319d.js",revision:"2693f9496eca319d"},{url:"/_next/static/chunks/6471.2e54d5a75920be49.js",revision:"2e54d5a75920be49"},{url:"/_next/static/chunks/6627-e576bbb42a1a8fb2.js",revision:"e576bbb42a1a8fb2"},{url:"/_next/static/chunks/6665.730b8da895fc8ce0.js",revision:"730b8da895fc8ce0"},{url:"/_next/static/chunks/6692.9c824a01aaf1710a.js",revision:"9c824a01aaf1710a"},{url:"/_next/static/chunks/6697-38593f3fdf0b0cb0.js",revision:"38593f3fdf0b0cb0"},{url:"/_next/static/chunks/673.a54bdea3fc07f826.js",revision:"a54bdea3fc07f826"},{url:"/_next/static/chunks/6732.7b8bfc3df34bd94b.js",revision:"7b8bfc3df34bd94b"},{url:"/_next/static/chunks/6773.4cb391e7524362d5.js",revision:"4cb391e7524362d5"},{url:"/_next/static/chunks/6802.186dae7e02a25c5f.js",revision:"186dae7e02a25c5f"},{url:"/_next/static/chunks/6820.81d20b8ce5fdc057.js",revision:"81d20b8ce5fdc057"},{url:"/_next/static/chunks/686-dc48646df80464d9.js",revision:"dc48646df80464d9"},{url:"/_next/static/chunks/6910.3fa0c079560d2618.js",revision:"3fa0c079560d2618"},{url:"/_next/static/chunks/6991.cefd968bcca6056f.js",revision:"cefd968bcca6056f"},{url:"/_next/static/chunks/7001.a92f5d7de64d8e63.js",revision:"a92f5d7de64d8e63"},{url:"/_next/static/chunks/7061.9ebf2c4d2423f41e.js",revision:"9ebf2c4d2423f41e"},{url:"/_next/static/chunks/7090.2002985355fa22d5.js",revision:"2002985355fa22d5"},{url:"/_next/static/chunks/710.55f4e7c1cabd247b.js",revision:"55f4e7c1cabd247b"},{url:"/_next/static/chunks/7118.ced7233045efae83.js",revision:"ced7233045efae83"},{url:"/_next/static/chunks/7138.70dab546bb59f862.js",revision:"70dab546bb59f862"},{url:"/_next/static/chunks/7213.a0c056179cbf676e.js",revision:"a0c056179cbf676e"},{url:"/_next/static/chunks/7230.cd957a76bc572acb.js",revision:"cd957a76bc572acb"},{url:"/_next/static/chunks/7268.7eb166dfc8f0a8a8.js",revision:"7eb166dfc8f0a8a8"},{url:"/_next/static/chunks/7282.2d7bc8029ab7d752.js",revision:"2d7bc8029ab7d752"},{url:"/_next/static/chunks/7315.5bcf4c36658eeeb2.js",revision:"5bcf4c36658eeeb2"},{url:"/_next/static/chunks/7365.52d4de8b6e7f137f.js",revision:"52d4de8b6e7f137f"},{url:"/_next/static/chunks/7370.e0f70eba949ac283.js",revision:"e0f70eba949ac283"},{url:"/_next/static/chunks/7421.0b232c39b25839b3.js",revision:"0b232c39b25839b3"},{url:"/_next/static/chunks/7423-c6f25a931b3f60c2.js",revision:"c6f25a931b3f60c2"},{url:"/_next/static/chunks/7434.3e928a9dda886ea4.js",revision:"3e928a9dda886ea4"},{url:"/_next/static/chunks/7475.0017763814cf5003.js",revision:"0017763814cf5003"},{url:"/_next/static/chunks/7525.d834c0eea80f1efd.js",revision:"d834c0eea80f1efd"},{url:"/_next/static/chunks/758.fbf4bee4c1495898.js",revision:"fbf4bee4c1495898"},{url:"/_next/static/chunks/7590.22be7fc35dacf287.js",revision:"22be7fc35dacf287"},{url:"/_next/static/chunks/75fc9c18.02b28d24f737c2ca.js",revision:"02b28d24f737c2ca"},{url:"/_next/static/chunks/7601.1bdb63794564ce90.js",revision:"1bdb63794564ce90"},{url:"/_next/static/chunks/7663.c23ee86976b12467.js",revision:"c23ee86976b12467"},{url:"/_next/static/chunks/7689-f7162e51b78802c3.js",revision:"f7162e51b78802c3"},{url:"/_next/static/chunks/7719.f157d8ea06138f9e.js",revision:"f157d8ea06138f9e"},{url:"/_next/static/chunks/7741.5ffe9b39b864cd4e.js",revision:"5ffe9b39b864cd4e"},{url:"/_next/static/chunks/775.bb16cc9d54e47f32.js",revision:"bb16cc9d54e47f32"},{url:"/_next/static/chunks/7752-628b362a6c1ddbb0.js",revision:"628b362a6c1ddbb0"},{url:"/_next/static/chunks/7762.9dceead3a553e5ba.js",revision:"9dceead3a553e5ba"},{url:"/_next/static/chunks/7917.c52cfb4bf4c1bfdb.js",revision:"c52cfb4bf4c1bfdb"},{url:"/_next/static/chunks/7949.f402379d22254570.js",revision:"f402379d22254570"},{url:"/_next/static/chunks/7988.13fe4c7c2a5bab0a.js",revision:"13fe4c7c2a5bab0a"},{url:"/_next/static/chunks/8007.8e932e959267a2ed.js",revision:"8e932e959267a2ed"},{url:"/_next/static/chunks/8029.d86f52f4f9e84955.js",revision:"d86f52f4f9e84955"},{url:"/_next/static/chunks/8091-43a0ed011dc2fc18.js",revision:"43a0ed011dc2fc18"},{url:"/_next/static/chunks/8142.d8e6c66ac26970a0.js",revision:"d8e6c66ac26970a0"},{url:"/_next/static/chunks/8171.da41f4d3690366fc.js",revision:"da41f4d3690366fc"},{url:"/_next/static/chunks/8187-d8ae119ca4227e47.js",revision:"d8ae119ca4227e47"},{url:"/_next/static/chunks/8215-014d3da9490bc851.js",revision:"014d3da9490bc851"},{url:"/_next/static/chunks/8244.fc930f9390a48016.js",revision:"fc930f9390a48016"},{url:"/_next/static/chunks/8283.61e2e4291f12cd43.js",revision:"61e2e4291f12cd43"},{url:"/_next/static/chunks/8393.4cd47b5c292b3306.js",revision:"4cd47b5c292b3306"},{url:"/_next/static/chunks/8465-e17f8b707f214eba.js",revision:"e17f8b707f214eba"},{url:"/_next/static/chunks/8469-a8270c4d343dc1dc.js",revision:"a8270c4d343dc1dc"},{url:"/_next/static/chunks/8531-c8466e27933b8398.js",revision:"c8466e27933b8398"},{url:"/_next/static/chunks/856.f490d14c07329a6e.js",revision:"f490d14c07329a6e"},{url:"/_next/static/chunks/8561.a5e78f554ef16609.js",revision:"a5e78f554ef16609"},{url:"/_next/static/chunks/863.cec6ad1b80e1177c.js",revision:"cec6ad1b80e1177c"},{url:"/_next/static/chunks/8695.96bc32813b75535b.js",revision:"96bc32813b75535b"},{url:"/_next/static/chunks/870.2b08a3301938c260.js",revision:"2b08a3301938c260"},{url:"/_next/static/chunks/8707.1df0ca41c60c4421.js",revision:"1df0ca41c60c4421"},{url:"/_next/static/chunks/8725.3abbc7b48f297c63.js",revision:"3abbc7b48f297c63"},{url:"/_next/static/chunks/8770.032740cb80b8658f.js",revision:"032740cb80b8658f"},{url:"/_next/static/chunks/8813.7f0b07103ba45de1.js",revision:"7f0b07103ba45de1"},{url:"/_next/static/chunks/8864.d99ee2c3b98e1b71.js",revision:"d99ee2c3b98e1b71"},{url:"/_next/static/chunks/889.83b2df009c584718.js",revision:"83b2df009c584718"},{url:"/_next/static/chunks/8910.f930c94c889fcb73.js",revision:"f930c94c889fcb73"},{url:"/_next/static/chunks/8915.0760d90df7bb3494.js",revision:"0760d90df7bb3494"},{url:"/_next/static/chunks/8966-c76fcd096d283abb.js",revision:"c76fcd096d283abb"},{url:"/_next/static/chunks/9069.a1e9a4856d13dae1.js",revision:"a1e9a4856d13dae1"},{url:"/_next/static/chunks/9071.8c9b70f05e2417d6.js",revision:"8c9b70f05e2417d6"},{url:"/_next/static/chunks/9073.24354886e5265040.js",revision:"24354886e5265040"},{url:"/_next/static/chunks/9095.a4e464d2da9e31ea.js",revision:"a4e464d2da9e31ea"},{url:"/_next/static/chunks/9121.b49c2c698eb6b977.js",revision:"b49c2c698eb6b977"},{url:"/_next/static/chunks/9155.ccba876423e94fb5.js",revision:"ccba876423e94fb5"},{url:"/_next/static/chunks/9208.dbfebbeaa1064e03.js",revision:"dbfebbeaa1064e03"},{url:"/_next/static/chunks/9219.0d2c09a296af0749.js",revision:"0d2c09a296af0749"},{url:"/_next/static/chunks/9232.0d9a4d05da3768b6.js",revision:"0d9a4d05da3768b6"},{url:"/_next/static/chunks/9296.129b6d78c6e95b28.js",revision:"129b6d78c6e95b28"},{url:"/_next/static/chunks/9403-e7dc8d1a451928b7.js",revision:"e7dc8d1a451928b7"},{url:"/_next/static/chunks/9558.5ddc305104aaa88f.js",revision:"5ddc305104aaa88f"},{url:"/_next/static/chunks/9607.0227d3c81a09ea72.js",revision:"0227d3c81a09ea72"},{url:"/_next/static/chunks/971-148b30cbaa71d733.js",revision:"148b30cbaa71d733"},{url:"/_next/static/chunks/9713.91696ae88d1c3616.js",revision:"91696ae88d1c3616"},{url:"/_next/static/chunks/9781.4a58eecfa22e4aea.js",revision:"4a58eecfa22e4aea"},{url:"/_next/static/chunks/9790.7c8f59364d900bd0.js",revision:"7c8f59364d900bd0"},{url:"/_next/static/chunks/9798.66a6d1388b530f0c.js",revision:"66a6d1388b530f0c"},{url:"/_next/static/chunks/9831.09e47246f981b3c2.js",revision:"09e47246f981b3c2"},{url:"/_next/static/chunks/9876.1b83419678bdca71.js",revision:"1b83419678bdca71"},{url:"/_next/static/chunks/9972.7850d5926d4ad9ac.js",revision:"7850d5926d4ad9ac"},{url:"/_next/static/chunks/cff3e69d-06cd4c67f2c69874.js",revision:"06cd4c67f2c69874"},{url:"/_next/static/chunks/d6e1aeb5-637b2047bd8f86f4.js",revision:"637b2047bd8f86f4"},{url:"/_next/static/chunks/ee8b1517-cd03b7ddf64b017a.js",revision:"cd03b7ddf64b017a"},{url:"/_next/static/chunks/framework-ca706bf673a13738.js",revision:"ca706bf673a13738"},{url:"/_next/static/chunks/main-ab0ed12b20fa62d2.js",revision:"ab0ed12b20fa62d2"},{url:"/_next/static/chunks/pages/_app-748fc6eb99dd4fb9.js",revision:"748fc6eb99dd4fb9"},{url:"/_next/static/chunks/pages/_error-e4216aab802f5810.js",revision:"e4216aab802f5810"},{url:"/_next/static/chunks/pages/embed/chat/readonly-a80d48c47915a84b.js",revision:"a80d48c47915a84b"},{url:"/_next/static/chunks/pages/embed/chat/readwrite-d6faafe380e9e9ee.js",revision:"d6faafe380e9e9ee"},{url:"/_next/static/chunks/pages/embed/video-ebb430a812392b96.js",revision:"ebb430a812392b96"},{url:"/_next/static/chunks/pages/index-44679335565322b4.js",revision:"44679335565322b4"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-4074785822b93f29.js",revision:"4074785822b93f29"},{url:"/_next/static/css/0e2be447772fbc9c.css",revision:"0e2be447772fbc9c"},{url:"/_next/static/css/226396fd7a605c95.css",revision:"226396fd7a605c95"},{url:"/_next/static/css/22f76f542c0c1295.css",revision:"22f76f542c0c1295"},{url:"/_next/static/css/25dc33a258f29aa7.css",revision:"25dc33a258f29aa7"},{url:"/_next/static/css/36c06a6d1e31f589.css",revision:"36c06a6d1e31f589"},{url:"/_next/static/css/4b852c938abbe548.css",revision:"4b852c938abbe548"},{url:"/_next/static/css/5d8ffa50cac5a262.css",revision:"5d8ffa50cac5a262"},{url:"/_next/static/css/79a332200ba0e826.css",revision:"79a332200ba0e826"},{url:"/_next/static/css/7e0fea9a6c3abdcb.css",revision:"7e0fea9a6c3abdcb"},{url:"/_next/static/css/8841579222b5034b.css",revision:"8841579222b5034b"},{url:"/_next/static/css/91dee75f0f5d528b.css",revision:"91dee75f0f5d528b"},{url:"/_next/static/css/9ca4489da31a01c6.css",revision:"9ca4489da31a01c6"},{url:"/_next/static/css/a92aaa9cb5a9add1.css",revision:"a92aaa9cb5a9add1"},{url:"/_next/static/css/c1478bc9943d52ed.css",revision:"c1478bc9943d52ed"},{url:"/_next/static/css/c14fe3388348ec80.css",revision:"c14fe3388348ec80"},{url:"/_next/static/css/d14f51de0d46d6eb.css",revision:"d14f51de0d46d6eb"},{url:"/_next/static/css/d29c5cd9368918c4.css",revision:"d29c5cd9368918c4"},{url:"/_next/static/css/ef3f4486f04adedc.css",revision:"ef3f4486f04adedc"},{url:"/_next/static/media/airplay.c25573d0.svg",revision:"c25573d0"},{url:"/_next/static/media/inter-cyrillic-300-normal.298e718b.woff",revision:"298e718b"},{url:"/_next/static/media/inter-cyrillic-300-normal.2d6195a9.woff2",revision:"2d6195a9"},{url:"/_next/static/media/inter-cyrillic-400-normal.5122dff0.woff2",revision:"5122dff0"},{url:"/_next/static/media/inter-cyrillic-400-normal.8cbf7092.woff",revision:"8cbf7092"},{url:"/_next/static/media/inter-cyrillic-600-normal.20cfdfd2.woff",revision:"20cfdfd2"},{url:"/_next/static/media/inter-cyrillic-600-normal.9f2082d5.woff2",revision:"9f2082d5"},{url:"/_next/static/media/inter-cyrillic-800-normal.c9f7c98d.woff",revision:"c9f7c98d"},{url:"/_next/static/media/inter-cyrillic-800-normal.f0070c7d.woff2",revision:"f0070c7d"},{url:"/_next/static/media/inter-cyrillic-ext-300-normal.65fcfcbf.woff2",revision:"65fcfcbf"},{url:"/_next/static/media/inter-cyrillic-ext-300-normal.6e17c5ce.woff",revision:"6e17c5ce"},{url:"/_next/static/media/inter-cyrillic-ext-400-normal.06b6faa3.woff2",revision:"06b6faa3"},{url:"/_next/static/media/inter-cyrillic-ext-400-normal.0c785d16.woff",revision:"0c785d16"},{url:"/_next/static/media/inter-cyrillic-ext-600-normal.4eb7a897.woff2",revision:"4eb7a897"},{url:"/_next/static/media/inter-cyrillic-ext-600-normal.d0ef086c.woff",revision:"d0ef086c"},{url:"/_next/static/media/inter-cyrillic-ext-800-normal.4dbf28ad.woff",revision:"4dbf28ad"},{url:"/_next/static/media/inter-cyrillic-ext-800-normal.f40e584a.woff2",revision:"f40e584a"},{url:"/_next/static/media/inter-greek-300-normal.162ae994.woff",revision:"162ae994"},{url:"/_next/static/media/inter-greek-300-normal.2bd8943a.woff2",revision:"2bd8943a"},{url:"/_next/static/media/inter-greek-400-normal.21a04137.woff",revision:"21a04137"},{url:"/_next/static/media/inter-greek-400-normal.d1deb2fe.woff2",revision:"d1deb2fe"},{url:"/_next/static/media/inter-greek-600-normal.11cc40f0.woff",revision:"11cc40f0"},{url:"/_next/static/media/inter-greek-600-normal.eff3b663.woff2",revision:"eff3b663"},{url:"/_next/static/media/inter-greek-800-normal.c17e275b.woff",revision:"c17e275b"},{url:"/_next/static/media/inter-greek-800-normal.fd6e481c.woff2",revision:"fd6e481c"},{url:"/_next/static/media/inter-greek-ext-300-normal.1040b196.woff2",revision:"1040b196"},{url:"/_next/static/media/inter-greek-ext-300-normal.e76c0ea8.woff",revision:"e76c0ea8"},{url:"/_next/static/media/inter-greek-ext-400-normal.2271c2a1.woff2",revision:"2271c2a1"},{url:"/_next/static/media/inter-greek-ext-400-normal.9ad92a78.woff",revision:"9ad92a78"},{url:"/_next/static/media/inter-greek-ext-600-normal.04ef07b9.woff2",revision:"04ef07b9"},{url:"/_next/static/media/inter-greek-ext-600-normal.249a715f.woff",revision:"249a715f"},{url:"/_next/static/media/inter-greek-ext-800-normal.0344056d.woff",revision:"0344056d"},{url:"/_next/static/media/inter-greek-ext-800-normal.c7813f38.woff2",revision:"c7813f38"},{url:"/_next/static/media/inter-latin-300-normal.7886bf65.woff",revision:"7886bf65"},{url:"/_next/static/media/inter-latin-300-normal.9c0edf75.woff2",revision:"9c0edf75"},{url:"/_next/static/media/inter-latin-400-normal.493934f7.woff2",revision:"493934f7"},{url:"/_next/static/media/inter-latin-400-normal.5a243e9a.woff",revision:"5a243e9a"},{url:"/_next/static/media/inter-latin-600-normal.4a896454.woff",revision:"4a896454"},{url:"/_next/static/media/inter-latin-600-normal.a3e93aa0.woff2",revision:"a3e93aa0"},{url:"/_next/static/media/inter-latin-800-normal.1c3ff413.woff2",revision:"1c3ff413"},{url:"/_next/static/media/inter-latin-800-normal.4ec1c074.woff",revision:"4ec1c074"},{url:"/_next/static/media/inter-latin-ext-300-normal.72d8b28f.woff",revision:"72d8b28f"},{url:"/_next/static/media/inter-latin-ext-300-normal.e5c2b506.woff2",revision:"e5c2b506"},{url:"/_next/static/media/inter-latin-ext-400-normal.261aa6d4.woff2",revision:"261aa6d4"},{url:"/_next/static/media/inter-latin-ext-400-normal.97c153a0.woff",revision:"97c153a0"},{url:"/_next/static/media/inter-latin-ext-600-normal.0a04c3cd.woff2",revision:"0a04c3cd"},{url:"/_next/static/media/inter-latin-ext-600-normal.fd851100.woff",revision:"fd851100"},{url:"/_next/static/media/inter-latin-ext-800-normal.8bb395b7.woff2",revision:"8bb395b7"},{url:"/_next/static/media/inter-latin-ext-800-normal.94943489.woff",revision:"94943489"},{url:"/_next/static/media/inter-vietnamese-300-normal.67c85413.woff",revision:"67c85413"},{url:"/_next/static/media/inter-vietnamese-300-normal.e33128e3.woff2",revision:"e33128e3"},{url:"/_next/static/media/inter-vietnamese-400-normal.668d9df6.woff",revision:"668d9df6"},{url:"/_next/static/media/inter-vietnamese-400-normal.ebde713a.woff2",revision:"ebde713a"},{url:"/_next/static/media/inter-vietnamese-600-normal.df39f196.woff",revision:"df39f196"},{url:"/_next/static/media/inter-vietnamese-600-normal.eb82de1d.woff2",revision:"eb82de1d"},{url:"/_next/static/media/inter-vietnamese-800-normal.1925759d.woff2",revision:"1925759d"},{url:"/_next/static/media/inter-vietnamese-800-normal.f2b1a298.woff",revision:"f2b1a298"},{url:"/_next/static/media/poppins-devanagari-400-normal.87c72f23.woff2",revision:"87c72f23"},{url:"/_next/static/media/poppins-devanagari-400-normal.f2c29400.woff",revision:"f2c29400"},{url:"/_next/static/media/poppins-devanagari-600-normal.3828f203.woff2",revision:"3828f203"},{url:"/_next/static/media/poppins-devanagari-600-normal.6def6ad7.woff",revision:"6def6ad7"},{url:"/_next/static/media/poppins-latin-400-normal.74033fb9.woff",revision:"74033fb9"},{url:"/_next/static/media/poppins-latin-400-normal.916d3686.woff2",revision:"916d3686"},{url:"/_next/static/media/poppins-latin-600-normal.94625d71.woff",revision:"94625d71"},{url:"/_next/static/media/poppins-latin-600-normal.d8692086.woff2",revision:"d8692086"},{url:"/_next/static/media/poppins-latin-ext-400-normal.591327bf.woff2",revision:"591327bf"},{url:"/_next/static/media/poppins-latin-ext-400-normal.687cae43.woff",revision:"687cae43"},{url:"/_next/static/media/poppins-latin-ext-600-normal.10939fee.woff2",revision:"10939fee"},{url:"/_next/static/media/poppins-latin-ext-600-normal.22fff013.woff",revision:"22fff013"},{url:"/favicon.ico",revision:"2f3f8d056ba7cca2dafbdeb51b2d793c"},{url:"/fediverse-white.png",revision:"203a177d28810e5d9e35dd3478bd5d17"},{url:"/fonts/inter/Inter-Black.woff",revision:"d0b121f3a9d3d88afdfd6902d31ee9a0"},{url:"/fonts/inter/Inter-Black.woff2",revision:"661569afe57a38e1529a775a465da20b"},{url:"/fonts/inter/Inter-BlackItalic.woff",revision:"e3329b2b90e1f9bcafd4a36604215dc1"},{url:"/fonts/inter/Inter-BlackItalic.woff2",revision:"a3cc36c89047d530522fc999a22cce54"},{url:"/fonts/inter/Inter-Bold.woff",revision:"99a0d9a7e4c99c17bfdd94a22a5cf94e"},{url:"/fonts/inter/Inter-Bold.woff2",revision:"444a7284663a3bc886683eb81450b294"},{url:"/fonts/inter/Inter-BoldItalic.woff",revision:"3aa31f7356ea9db132b3b2bd8a65df44"},{url:"/fonts/inter/Inter-BoldItalic.woff2",revision:"96284e2a02af46d9ffa2d189eaad5483"},{url:"/fonts/inter/Inter-ExtraBold.woff",revision:"ab70688a1c9d6525584b123575f6c0a5"},{url:"/fonts/inter/Inter-ExtraBold.woff2",revision:"37da9eecf61ebced804b266b14eef98e"},{url:"/fonts/inter/Inter-ExtraBoldItalic.woff",revision:"728a4c7df3ed1b2bc077010063f9ef1c"},{url:"/fonts/inter/Inter-ExtraBoldItalic.woff2",revision:"fcc7d60ef790b43eb520fdc5c7348799"},{url:"/fonts/inter/Inter-ExtraLight.woff",revision:"dd19efda9c6e88ad83a5b052915899f7"},{url:"/fonts/inter/Inter-ExtraLight.woff2",revision:"b3b2ed6a20c538e9c809f4df5c04ac2a"},{url:"/fonts/inter/Inter-ExtraLightItalic.woff",revision:"a6566ae6fa3c58b48f888d7c9c234d52"},{url:"/fonts/inter/Inter-ExtraLightItalic.woff2",revision:"079cd1e71cd4f73bef86f72deced6d03"},{url:"/fonts/inter/Inter-Italic.woff",revision:"f137a90d649b6ab032563856df323f40"},{url:"/fonts/inter/Inter-Italic.woff2",revision:"fd26ff23f831db9ae85a805386529385"},{url:"/fonts/inter/Inter-Light.woff",revision:"5d3776eb78374b0ebbce639adadf73d1"},{url:"/fonts/inter/Inter-Light.woff2",revision:"780dd2adb71f18d7a357ab7f65e881d6"},{url:"/fonts/inter/Inter-LightItalic.woff",revision:"d0fa7cbcf9ca5edb6ebe41fd8d49e1fb"},{url:"/fonts/inter/Inter-LightItalic.woff2",revision:"df29c53403b2e13dc56df3e291c32f09"},{url:"/fonts/inter/Inter-Medium.woff",revision:"c0638bea87a05fdfa2bb3bba2efe54e4"},{url:"/fonts/inter/Inter-Medium.woff2",revision:"75db5319e7e87c587019a5df08d7272c"},{url:"/fonts/inter/Inter-MediumItalic.woff",revision:"a1b588627dd12c556a7e3cd81e400ecf"},{url:"/fonts/inter/Inter-MediumItalic.woff2",revision:"f1e11535e56c67698e263673f625103e"},{url:"/fonts/inter/Inter-Regular.woff",revision:"3ac83020fe53b617b79b5e2ad66764af"},{url:"/fonts/inter/Inter-Regular.woff2",revision:"dc131113894217b5031000575d9de002"},{url:"/fonts/inter/Inter-SemiBold.woff",revision:"66a68ffab2bf40553e847e8f025f75be"},{url:"/fonts/inter/Inter-SemiBold.woff2",revision:"007ad31a53f4ab3f58ee74f2308482ce"},{url:"/fonts/inter/Inter-SemiBoldItalic.woff",revision:"6cd13dbd150ac0c7f337a2939a3d50a8"},{url:"/fonts/inter/Inter-SemiBoldItalic.woff2",revision:"3031b683bafcd9ded070c00d784f4626"},{url:"/fonts/inter/Inter-Thin.woff",revision:"b068b7189120a6626e3cfe2a8b917d0f"},{url:"/fonts/inter/Inter-Thin.woff2",revision:"d52e5e38715502616522eb3e9963b69b"},{url:"/fonts/inter/Inter-ThinItalic.woff",revision:"97bec98832c92f799aeebf670b83ff6c"},{url:"/fonts/inter/Inter-ThinItalic.woff2",revision:"a9780071b7f498c1523602910a5ef242"},{url:"/fonts/inter/Inter-italic.var.woff2",revision:"1f7ca6383ea7c74a7f5ddd76c3d3cef2"},{url:"/fonts/inter/Inter-roman.var.woff2",revision:"66c6e40883646a7ad993108b2ce2da32"},{url:"/fonts/inter/Inter.var.woff2",revision:"8dd26c3dd0125fb16ce19b8f5e8273fb"},{url:"/fonts/inter/inter.css",revision:"178297900cc42c19e1e47fbc2487abe5"},{url:"/img/favicon/android-icon-144x144.png",revision:"3de56fea2ea05c5cb8e42a21d63de48e"},{url:"/img/favicon/android-icon-192x192.png",revision:"dd8a4c74ec2be516a57d40df25540ab8"},{url:"/img/favicon/android-icon-36x36.png",revision:"77887a8a93baed7eaeb316be4b31a7f9"},{url:"/img/favicon/android-icon-48x48.png",revision:"d1ff9fb0528cb9100ad5ee5fd7ece71f"},{url:"/img/favicon/android-icon-72x72.png",revision:"9505e8ef62d1b2d0783adb8d958e8007"},{url:"/img/favicon/android-icon-96x96.png",revision:"8f17da2436060c779c27f3ffb5eac999"},{url:"/img/favicon/apple-icon-114x114.png",revision:"efd8a26a33f16975715ce8c56169d730"},{url:"/img/favicon/apple-icon-120x120.png",revision:"56dcc09f7674f293595117b3181dcf88"},{url:"/img/favicon/apple-icon-144x144.png",revision:"3de56fea2ea05c5cb8e42a21d63de48e"},{url:"/img/favicon/apple-icon-152x152.png",revision:"368ae8346bc9bb8d3f89ef48acb094f9"},{url:"/img/favicon/apple-icon-180x180.png",revision:"c691e02bc0b7df6cb31da017b420cba5"},{url:"/img/favicon/apple-icon-57x57.png",revision:"90555efc26d3a34a3979c133868f9d34"},{url:"/img/favicon/apple-icon-60x60.png",revision:"06dda52763aee5612d79999966488f79"},{url:"/img/favicon/apple-icon-72x72.png",revision:"9505e8ef62d1b2d0783adb8d958e8007"},{url:"/img/favicon/apple-icon-76x76.png",revision:"fedee38a4cf4d5918f8dbd1657c709c9"},{url:"/img/favicon/apple-icon-precomposed.png",revision:"8ad8bbee4eb631f76e89807878622aed"},{url:"/img/favicon/apple-icon.png",revision:"fb7eaf4e8ef1e852bd28b08f46ae6309"},{url:"/img/favicon/browserconfig.xml",revision:"653d077300a12f09a69caeea7a8947f8"},{url:"/img/favicon/favicon-16x16.png",revision:"3dba5d08ad8a2a4de265448afa2fd03c"},{url:"/img/favicon/favicon-32x32.png",revision:"0ae932cc803789d645a2409cb67db049"},{url:"/img/favicon/favicon-96x96.png",revision:"8f17da2436060c779c27f3ffb5eac999"},{url:"/img/favicon/ms-icon-144x144.png",revision:"3de56fea2ea05c5cb8e42a21d63de48e"},{url:"/img/favicon/ms-icon-150x150.png",revision:"6224c535c86d618e36a97da48e52056b"},{url:"/img/favicon/ms-icon-310x310.png",revision:"c391dc97d4c01177bd07291c1f694063"},{url:"/img/favicon/ms-icon-70x70.png",revision:"4cb3f77034cab3de7b60cd7d954042d1"},{url:"/img/fediverse-black.png",revision:"b5ede08246f4a691dff8dcefe39c984d"},{url:"/img/fediverse-color.png",revision:"6264c2ac70632db6e3447581da838d1b"},{url:"/img/follow.svg",revision:"8f185615cd7242792c8bd73b359b2498"},{url:"/img/indieauth.png",revision:"7fbf89da18a721dc25a16393b8a62e82"},{url:"/img/like.svg",revision:"2af8fcf2ffc5a028b9b300538a5e766e"},{url:"/img/repost.svg",revision:"12830cd3f1099b40670e8a69b40efa27"},{url:"/manifest.json",revision:"3ebf89ccef77c69bcd65ed8757086c99"},{url:"/serviceWorker.js",revision:"0fefbecf45aefe5354045cbf926e6a25"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:i,event:c,state:s})=>i&&"opaqueredirect"===i.type?new Response(i.body,{status:200,statusText:"OK",headers:i.headers}):i}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const i=e.pathname;return!i.startsWith("/api/auth/")&&!!i.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET"),e.registerRoute(/\.(?:ts|m3u8)$/i,new e.NetworkOnly,"GET"),e.registerRoute(/^\/admin\/.*$/,new e.NetworkOnly,"GET"),e.registerRoute(/^\/api\/.*$/,new e.NetworkOnly,"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));
