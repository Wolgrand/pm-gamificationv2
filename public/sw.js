if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return c[e]||(i=new Promise((async i=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]}))},i=(i,c)=>{Promise.all(i.map(e)).then((e=>c(1===e.length?e[0]:e)))},c={require:Promise.resolve(i)};self.define=(i,s,r)=>{c[i]||(c[i]=Promise.resolve().then((()=>{let c={};const a={uri:location.origin+i.slice(1)};return Promise.all(s.map((i=>{switch(i){case"exports":return c;case"module":return a;default:return e(i)}}))).then((e=>{const i=r(...e);return c.default||(c.default=i),c}))})))}}define("./sw.js",["./workbox-a8b10d99"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/5LC9uSiMMeqKN_rjo_bKH/_buildManifest.js",revision:"5LC9uSiMMeqKN_rjo_bKH"},{url:"/_next/static/5LC9uSiMMeqKN_rjo_bKH/_ssgManifest.js",revision:"5LC9uSiMMeqKN_rjo_bKH"},{url:"/_next/static/chunks/1bfc9850.e2330b94b1b0c354495e.js",revision:"5LC9uSiMMeqKN_rjo_bKH"},{url:"/_next/static/chunks/36694f1291f694a95764ede3e2c8d79edc54c3d5.885ef02616d4ab813c6a.js",revision:"5LC9uSiMMeqKN_rjo_bKH"},{url:"/_next/static/chunks/49600ec68c77c77dc0757584a8bdb0897ad615f8.d92dc0bea85426252f9d.js",revision:"5LC9uSiMMeqKN_rjo_bKH"},{url:"/_next/static/chunks/6d6ea0607dd76b1a68302439919b713b65d1980b.ea3ad7bb471831c72a60.js",revision:"5LC9uSiMMeqKN_rjo_bKH"},{url:"/_next/static/chunks/71247caf95475e3ea7f9a0f8a30beb258b23d005.691e411547d7876a65b3.js",revision:"5LC9uSiMMeqKN_rjo_bKH"},{url:"/_next/static/chunks/95a2f6612c78b3eb07aac7fd2de0e70216f24ee4.5831725a626e837d7792.js",revision:"5LC9uSiMMeqKN_rjo_bKH"},{url:"/_next/static/chunks/9ee4bd148709cb9cc2a67016d1c150d5c9e065d1.3a2d44fd16bf6a799d8b.js",revision:"5LC9uSiMMeqKN_rjo_bKH"},{url:"/_next/static/chunks/c9d4b570c9b900dd3b9f3913fa955af54def3be1.572212f3e5675b7d530c.js",revision:"5LC9uSiMMeqKN_rjo_bKH"},{url:"/_next/static/chunks/commons.93f1427300809a225451.js",revision:"5LC9uSiMMeqKN_rjo_bKH"},{url:"/_next/static/chunks/f3ae99533f9ca48a57e6a070415a5e58eabb340b.c090881ce9beea3b976a.js",revision:"5LC9uSiMMeqKN_rjo_bKH"},{url:"/_next/static/chunks/framework.490e6e89fb7343c23de5.js",revision:"5LC9uSiMMeqKN_rjo_bKH"},{url:"/_next/static/chunks/main-73376d4f9c830ac0af64.js",revision:"5LC9uSiMMeqKN_rjo_bKH"},{url:"/_next/static/chunks/pages/_app-49837fce90de46de62d0.js",revision:"5LC9uSiMMeqKN_rjo_bKH"},{url:"/_next/static/chunks/pages/_error-381872f37733b35d88e6.js",revision:"5LC9uSiMMeqKN_rjo_bKH"},{url:"/_next/static/chunks/pages/admin/achievements-c8925c895bda187ce95f.js",revision:"5LC9uSiMMeqKN_rjo_bKH"},{url:"/_next/static/chunks/pages/admin/criterias-7809e09a984b38709606.js",revision:"5LC9uSiMMeqKN_rjo_bKH"},{url:"/_next/static/chunks/pages/admin/rewards-24e3a98a5cfc5f7cb95f.js",revision:"5LC9uSiMMeqKN_rjo_bKH"},{url:"/_next/static/chunks/pages/admin/users-78195a53e9a98537f78a.js",revision:"5LC9uSiMMeqKN_rjo_bKH"},{url:"/_next/static/chunks/pages/home-c8200fa47e4241ba5c19.js",revision:"5LC9uSiMMeqKN_rjo_bKH"},{url:"/_next/static/chunks/pages/index-34c596f0af5afd397b29.js",revision:"5LC9uSiMMeqKN_rjo_bKH"},{url:"/_next/static/chunks/pages/informations-af705ff5105dedfb4896.js",revision:"5LC9uSiMMeqKN_rjo_bKH"},{url:"/_next/static/chunks/pages/profile-162a77add4ea8e76c9f3.js",revision:"5LC9uSiMMeqKN_rjo_bKH"},{url:"/_next/static/chunks/pages/user/%5BuserId%5D-523df155d04902c3bbdb.js",revision:"5LC9uSiMMeqKN_rjo_bKH"},{url:"/_next/static/chunks/pages/user/new-score/%5BuserId%5D-b5b22f097e6275cf5b5b.js",revision:"5LC9uSiMMeqKN_rjo_bKH"},{url:"/_next/static/chunks/polyfills-1f8e22dc7857e48a2d36.js",revision:"5LC9uSiMMeqKN_rjo_bKH"},{url:"/_next/static/chunks/webpack-e067438c4cf4ef2ef178.js",revision:"5LC9uSiMMeqKN_rjo_bKH"},{url:"/_next/static/css/3d6819eeb6027d18702e.css",revision:"5LC9uSiMMeqKN_rjo_bKH"},{url:"/achievements/aprendiz.png",revision:"ca5cdcc09c57c4f0171f62a4e8721076"},{url:"/achievements/arqueiro.png",revision:"5b33e58d83fc6b0f1127a045da9c7b45"},{url:"/achievements/atirador.png",revision:"4166fca4ac83ac134f7c9f3c9215f654"},{url:"/achievements/comunicador.png",revision:"0cc76d2282e300b30ca52830b8cc77e3"},{url:"/achievements/doutor.png",revision:"a8970fc79a569a14a4249e8bc863c195"},{url:"/achievements/escritor.png",revision:"d8f9072983ce5db941ad49824c0ba49e"},{url:"/achievements/especialista.png",revision:"9f168511fba2c96c281bcaa3327ee241"},{url:"/achievements/estudante.png",revision:"ba0ff1530bdd7bdf32828d8e966a4b6c"},{url:"/achievements/extrovertido.png",revision:"7d9ee580c013c5f8bb1b27fcabefe5e1"},{url:"/achievements/influencer.png",revision:"8a4841a1d6a7929dda33815c0dfa3ea8"},{url:"/achievements/leitor.png",revision:"21b3e5b8523b9238ca552a7d89134356"},{url:"/achievements/lendário.png",revision:"71ae6d09b09f4f0d77488a2714bed1b1"},{url:"/achievements/mestre.png",revision:"90fce8225b4f5c18358b86e099445ba2"},{url:"/achievements/recruta.png",revision:"c48d856d1a18b020f76cccf20a6b501f"},{url:"/achievements/reporter.png",revision:"2f933447c82e245b4b29e2d6b6be2c20"},{url:"/achievements/samurai.png",revision:"4c7660f8a7f8a5aaeb0503efd981d8c3"},{url:"/achievements/sniper.png",revision:"6ed10978c28dd3faf60dcb6e8441559f"},{url:"/achievements/soldado.png",revision:"6ea24df7a8dd3e1da616cf08fee425d3"},{url:"/android-icon-144x144.png",revision:"2cdfdb07dab86b776dbe091466febd35"},{url:"/android-icon-192x192.png",revision:"ebc7f060a499df0576a9b519d65fa6ee"},{url:"/android-icon-36x36.png",revision:"3ab736585e9fdd2401296a5b27d12af4"},{url:"/android-icon-48x48.png",revision:"4fa66dec600e3baea14e6b908fd5481c"},{url:"/android-icon-72x72.png",revision:"f980f54c408981b95e9641828e7a97ca"},{url:"/android-icon-96x96.png",revision:"143952d422bc2a14a72c932dba30979d"},{url:"/apple-icon-114x114.png",revision:"4f22df91152de29eb06dafa4ed1a86be"},{url:"/apple-icon-120x120.png",revision:"95d8227274dc016ccb09b6facef2b80e"},{url:"/apple-icon-144x144.png",revision:"2cdfdb07dab86b776dbe091466febd35"},{url:"/apple-icon-152x152.png",revision:"b842ac3a138adc4eb95368939f4d914a"},{url:"/apple-icon-180x180.png",revision:"d7e159bc97d46e8cf7362303bb1a0e5c"},{url:"/apple-icon-57x57.png",revision:"3860d39fe24dd48d490436d824aa9728"},{url:"/apple-icon-60x60.png",revision:"f764821cc86342fa9621579be3a9b0d2"},{url:"/apple-icon-72x72.png",revision:"f980f54c408981b95e9641828e7a97ca"},{url:"/apple-icon-76x76.png",revision:"10ea346c7568b1b00d498f6f2322b7d8"},{url:"/apple-icon-precomposed.png",revision:"e2149ec0847d9d0e51699f6e71a78ac9"},{url:"/apple-icon.png",revision:"e2149ec0847d9d0e51699f6e71a78ac9"},{url:"/browserconfig.xml",revision:"653d077300a12f09a69caeea7a8947f8"},{url:"/favicon-16x16.png",revision:"c67497b32d95f07ccd9dbb3c9eb92cd4"},{url:"/favicon-32x32.png",revision:"813ab7882674118b5e1fd7e3202cb633"},{url:"/favicon-96x96.png",revision:"143952d422bc2a14a72c932dba30979d"},{url:"/favicon.ico",revision:"abde9efb755a9cfd69f153494e1674b5"},{url:"/icons/academic-cap.svg",revision:"162ca0467ad21857635477cd42c60134"},{url:"/icons/adjustments.svg",revision:"914090a135646c8bbf9c13bcb585a2c9"},{url:"/icons/annotation.svg",revision:"339e5a5b0dc354dab722f1e837489682"},{url:"/icons/archive.svg",revision:"68a6885e09c0d48c3fbae674da1dc31f"},{url:"/icons/arrow-circle-down.svg",revision:"1811d0842db9857b35bb1cc945d26c6f"},{url:"/icons/arrow-circle-left.svg",revision:"331ba0aee67a58f90df9ec1be14aac75"},{url:"/icons/arrow-circle-right.svg",revision:"6ae43170fa4271454cea75bdf83d7073"},{url:"/icons/arrow-circle-up.svg",revision:"7680025449bca2d14cfbcd55aeef0412"},{url:"/icons/arrow-down.svg",revision:"0a4693c7c312d0f880508bda82c767a4"},{url:"/icons/arrow-left.svg",revision:"45a767454ee2d7d5a557dfd12cff427f"},{url:"/icons/arrow-narrow-down.svg",revision:"17862ee96777de0bf288c28bc5a9feab"},{url:"/icons/arrow-narrow-left.svg",revision:"4e04ab175a250aae21e522e1ba44bf72"},{url:"/icons/arrow-narrow-right.svg",revision:"a97e9bdc4cb23384f5ee8168db942137"},{url:"/icons/arrow-narrow-up.svg",revision:"066e0434431cd6792f252b51e24102e2"},{url:"/icons/arrow-right.svg",revision:"eb1331913d4e0569f9e637e3bc970cc3"},{url:"/icons/arrow-up.svg",revision:"6b80f75afdf74ddca5ed9f2fc16a8f11"},{url:"/icons/arrows-expand.svg",revision:"f12d5dd1063a2ec4e99ae27d5f6029b9"},{url:"/icons/at-symbol.svg",revision:"743a93e5ad71926230c4639c450a451a"},{url:"/icons/backspace.svg",revision:"1e0df8e6ba067a9eaddcbc8d15d01197"},{url:"/icons/badge-check.svg",revision:"e54eb373723bccabfe5b7d13c6a7b4e5"},{url:"/icons/ban.svg",revision:"229756a86945b7a809f7cf04b217b795"},{url:"/icons/beaker.svg",revision:"a9f4ee9ac02aca091f41a38058f1010f"},{url:"/icons/bell.svg",revision:"a27f7ba8d44980a03a8d16f84c1d36f9"},{url:"/icons/book-open.svg",revision:"d3a084b4deee085200d1fe2e37068c5c"},{url:"/icons/bookmark-alt.svg",revision:"2aa0964cddc83b2956c405d93d4ca726"},{url:"/icons/bookmark.svg",revision:"dba6235d82568aacfe823ee30a6e7863"},{url:"/icons/briefcase.svg",revision:"110041e26696c3a738c8a17baf160b1b"},{url:"/icons/cake.svg",revision:"90b071efb70b8d46e283c2ef6261315f"},{url:"/icons/calculator.svg",revision:"e1d74ca2ccbbfd7267d28b2bc4f2c02e"},{url:"/icons/calendar.svg",revision:"d792fd51379a0234eee964aa633f59b8"},{url:"/icons/camera.svg",revision:"9ee819620ed5e1b9302272573805b447"},{url:"/icons/cash.svg",revision:"b21e60bd46694ecabe044fb67f31e1a7"},{url:"/icons/chart-bar.svg",revision:"60f5cb1b4896f78b76a44f77ba69eb26"},{url:"/icons/chart-pie.svg",revision:"175307e76dd82b72e6ff4ba9af1b0129"},{url:"/icons/chart-square-bar.svg",revision:"de62e3db25e76685b30302ea2134ba5f"},{url:"/icons/chat-alt-2.svg",revision:"3cb420988116ec0fa782fc0d9b09bbe4"},{url:"/icons/chat-alt.svg",revision:"08d0e09ba68cdd617fa672e3cd2daff2"},{url:"/icons/chat.svg",revision:"40d480ea5723e9237eae68de284b7fd3"},{url:"/icons/check-circle.svg",revision:"b5e1d618960e6aacd72c82890d251a42"},{url:"/icons/check.svg",revision:"a843ac437cfe2ac1c389d15dcfc122f2"},{url:"/icons/chevron-double-down.svg",revision:"5c65e5ebc7d3301bfb6334a984ec3e6b"},{url:"/icons/chevron-double-left.svg",revision:"e421d52295ff8165c98cda93ad30510d"},{url:"/icons/chevron-double-right.svg",revision:"edbc6f8637c92ce2ee361a222a455cd0"},{url:"/icons/chevron-double-up.svg",revision:"10c70a4991ab0a8a6f19bd436d1f48fc"},{url:"/icons/chevron-down.svg",revision:"d35e377341e52f0cfd5b9de8d82c5cfd"},{url:"/icons/chevron-left.svg",revision:"44f40190de13ed1f2c52431f9a0084e4"},{url:"/icons/chevron-right.svg",revision:"6eff55877382f5a58d1b9cfd1e30579f"},{url:"/icons/chevron-up.svg",revision:"a77aec240c8f74a241fd7990722c4fdf"},{url:"/icons/chip.svg",revision:"7661037103c5eeba1576107656b00a59"},{url:"/icons/clipboard-check.svg",revision:"72cdc3f3fcbe311119719e36805249ea"},{url:"/icons/clipboard-copy.svg",revision:"e95a552ee044dfee50527b649fc7086e"},{url:"/icons/clipboard-list.svg",revision:"302a4bca355ab68db7d747f7596c426f"},{url:"/icons/clipboard.svg",revision:"a035098415e80fd07024d38d4838f4b6"},{url:"/icons/clock.svg",revision:"b4f04b6c47476f5ba0ed39e5316b726b"},{url:"/icons/cloud-download.svg",revision:"de8faee9c9c0a97a352ba25a8f09a455"},{url:"/icons/cloud-upload.svg",revision:"90df5c756df781a69b5e20328728fa0a"},{url:"/icons/cloud.svg",revision:"e391af91f55970f56066bc6545f2646c"},{url:"/icons/code.svg",revision:"9fa080f55a66b24061ba6ba037872074"},{url:"/icons/cog.svg",revision:"3c122bf2905096bcde74fbf574b351ca"},{url:"/icons/collection.svg",revision:"9d2783b977ca786d811114d932479b90"},{url:"/icons/color-swatch.svg",revision:"7d721d815d8cba51d85670b19f045f31"},{url:"/icons/credit-card.svg",revision:"f31dfcbddadd0fced64f6cfcfe6d7055"},{url:"/icons/cube-transparent.svg",revision:"6898d2915bc9d9185dc25f244180a962"},{url:"/icons/cube.svg",revision:"030cb1f28ab353215c0fc52ecd10af66"},{url:"/icons/currency-bangladeshi.svg",revision:"038771bb908d9e331d577d3b553f75fa"},{url:"/icons/currency-dollar.svg",revision:"6c620c8cbcf4527ef302990dd6f3848b"},{url:"/icons/currency-euro.svg",revision:"3e566e43ceeb516892755de376e2e590"},{url:"/icons/currency-pound.svg",revision:"916f02844d4602b2b3a9457105f1851f"},{url:"/icons/currency-rupee.svg",revision:"65e43f0412e991a4d111b563959c6b3f"},{url:"/icons/currency-yen.svg",revision:"2e417e395336a5dfd7992e6a14b17045"},{url:"/icons/cursor-click.svg",revision:"feb2caa3445bcbb256d3cf8139dc43b6"},{url:"/icons/database.svg",revision:"8c6122f80d5da288ec4a32a444e988e9"},{url:"/icons/desktop-computer.svg",revision:"1ed8496ad621136ee1f4570cc1271bc1"},{url:"/icons/device-mobile.svg",revision:"36aeb4bb9f0c20d275673c76bcf2ee6e"},{url:"/icons/device-tablet.svg",revision:"854964ef02514a5bf76216bbe0729afd"},{url:"/icons/document-add.svg",revision:"715264099209260174bd88076a7e3e3c"},{url:"/icons/document-download.svg",revision:"865e8fda3ff5aaebd2b5f5acf44b0d92"},{url:"/icons/document-duplicate.svg",revision:"078913d5aac85e109978cd8d8e96d533"},{url:"/icons/document-remove.svg",revision:"80504489806b0ea35e384f4cbbef4da0"},{url:"/icons/document-report.svg",revision:"754bf021df7ca26ee3b3c295ce53ee45"},{url:"/icons/document-search.svg",revision:"4e09ee3af9ec752521b993085900510c"},{url:"/icons/document-text.svg",revision:"c9178ea37841f4afca652a903b5c86ee"},{url:"/icons/document.svg",revision:"27052c3237426dc96a4e52ad72d85b43"},{url:"/icons/dots-circle-horizontal.svg",revision:"479f7ed9bdb21c486a89812861ce0a06"},{url:"/icons/dots-horizontal.svg",revision:"54925088058c3c0b07c0f1aa1d137faa"},{url:"/icons/dots-vertical.svg",revision:"4ceeea284d5c3bce9fd1a0624e788b3a"},{url:"/icons/download.svg",revision:"ec20f5c10705a4d7f3070390abdf9f14"},{url:"/icons/duplicate.svg",revision:"1eab611d18967bf0954847f3302cdbdc"},{url:"/icons/emoji-happy.svg",revision:"d4ab76e6f9fd8c0ef37765900779f9cd"},{url:"/icons/emoji-sad.svg",revision:"9836ec8cbc649e42455acb8ea30526ae"},{url:"/icons/exclamation-circle.svg",revision:"3c668404e3ff2d347a8e345dc864bace"},{url:"/icons/exclamation.svg",revision:"bd58ac820c50ad1831bd8de659df674b"},{url:"/icons/external-link.svg",revision:"7f328171cfd2948db8be3cd05845f5e9"},{url:"/icons/eye-off.svg",revision:"df0f32c4ce7ac167d46fd18085394f71"},{url:"/icons/eye.svg",revision:"22b64f9996cc8204dddc3fb8e4cd4a31"},{url:"/icons/fast-forward.svg",revision:"382613e1241b3a50534f3b23beefb523"},{url:"/icons/film.svg",revision:"d6765d49e8be3d3b8d343d54033b6681"},{url:"/icons/filter.svg",revision:"b724962a73566bbcc4ed27552fd9cb49"},{url:"/icons/finger-print.svg",revision:"c684b41a7d1406f54ab68eed2b471728"},{url:"/icons/fire.svg",revision:"674d6600c03f38b463052043f8a37883"},{url:"/icons/flag.svg",revision:"413b63aa42f59ea97c20e2b2fcc7e557"},{url:"/icons/folder-add.svg",revision:"63f1f6811527bde93126196972b0a90a"},{url:"/icons/folder-download.svg",revision:"82a4f11e636b222ade2f454173e5a409"},{url:"/icons/folder-open.svg",revision:"6b7bc44283239747d131970030b69604"},{url:"/icons/folder-remove.svg",revision:"7a4249840c926356effe2b02e4327a50"},{url:"/icons/folder.svg",revision:"f5096ef8d0147b0248e712c27d61e06f"},{url:"/icons/gift.svg",revision:"66d9c9970ccd06d0626e95b12db27168"},{url:"/icons/globe-alt.svg",revision:"e7cb84e3cc19c5296dc4c91654a918cf"},{url:"/icons/globe.svg",revision:"f212d867b7f8bf6e1c2e8795232644f2"},{url:"/icons/hand.svg",revision:"6abf2bf926347c0845fb86ac79716991"},{url:"/icons/hashtag.svg",revision:"4d7feaf968409f0e4d6973116d89d3f3"},{url:"/icons/heart.svg",revision:"dbd9bcbf2ae565d66bb5f3a6104c8166"},{url:"/icons/home.svg",revision:"4a571552d528bef2b2a04bc59bce61de"},{url:"/icons/identification.svg",revision:"3c4564bb71ffd5bf896f4427a6223647"},{url:"/icons/inbox-in.svg",revision:"7ac6993c695d3e8ae7418c716c437bb9"},{url:"/icons/inbox.svg",revision:"317c075f7a2309baf3cb6a1e93f700c1"},{url:"/icons/information-circle.svg",revision:"7560f63cf4505a0ef29e205154ce8a46"},{url:"/icons/key.svg",revision:"7fbf50bb419540840f87d1e3e73363ee"},{url:"/icons/library.svg",revision:"ee8ed88aa75eb792e252ce1a5ffb46af"},{url:"/icons/light-bulb.svg",revision:"94a970a4053dea3b2ab23179f522bb20"},{url:"/icons/lightning-bolt.svg",revision:"7eee3f1e1b8c8fa3bfbd58ea704e7815"},{url:"/icons/link.svg",revision:"97e61a9ba6a65c060dd72f34dc604c50"},{url:"/icons/location-marker.svg",revision:"f4ac4f54510a3504b05129df28a4d854"},{url:"/icons/lock-closed.svg",revision:"859c1db18a820139736eb9c54cfa700c"},{url:"/icons/lock-open.svg",revision:"3d3dec11b73dd9496ec4ec0ca4f014b0"},{url:"/icons/login.svg",revision:"ed92f13a4598b7799dc358244ad50f91"},{url:"/icons/logout.svg",revision:"fb9c679859f03bf84c805371b1fed993"},{url:"/icons/mail-open.svg",revision:"bc522c8ba72c212af0468aa820780891"},{url:"/icons/mail.svg",revision:"fa7158d9a1223fb153cbf44bbee4ce98"},{url:"/icons/map.svg",revision:"494ac976c0b293aa14242c660f78d80f"},{url:"/icons/menu-alt-1.svg",revision:"9858497be081fb80763397d74a2afbcb"},{url:"/icons/menu-alt-2.svg",revision:"f79a6915efc77bc000f005a6bfbeac05"},{url:"/icons/menu-alt-3.svg",revision:"bcb1d4c143151dcec1b580547c049e26"},{url:"/icons/menu-alt-4.svg",revision:"e0e219d5092d0fc329c44fb2a8552f40"},{url:"/icons/menu.svg",revision:"cc171ff1e64a6d8ed3195942bf6d77be"},{url:"/icons/microphone.svg",revision:"e659537ebbee65eb60c2b2100bee3ff9"},{url:"/icons/minus-circle.svg",revision:"93cdca5b730bb588df71bcc280963501"},{url:"/icons/minus-sm.svg",revision:"b43691132916b6a28d53a8e573b286db"},{url:"/icons/minus.svg",revision:"f57139a4b382b1e375301faca2552e48"},{url:"/icons/moon.svg",revision:"8313f8ef9061edd4917996b7b45c1f46"},{url:"/icons/music-note.svg",revision:"f18fd0d2e608cde907a02ee776f60c59"},{url:"/icons/newspaper.svg",revision:"bacb965996efef565835ef635059fe04"},{url:"/icons/office-building.svg",revision:"f846426fff53269c389c5ccb3973ab17"},{url:"/icons/paper-airplane.svg",revision:"94b21836f70e4e6cbe50829c6023f388"},{url:"/icons/paper-clip.svg",revision:"b6fcb2e30e595cb5648d3ec2608cc13f"},{url:"/icons/pause.svg",revision:"384475b112d799246aa70c9c1b33a52b"},{url:"/icons/pencil-alt.svg",revision:"67d42606db10190b33f3c8743accf40a"},{url:"/icons/pencil.svg",revision:"099cb3356b0575b35165f8f3178d844b"},{url:"/icons/phone-incoming.svg",revision:"049496425e53e370db2d391517e0b846"},{url:"/icons/phone-missed-call.svg",revision:"a46dfd22755ac53d42f7d1fb26f8a64d"},{url:"/icons/phone-outgoing.svg",revision:"1fe55fe009206e039877622cd2e2789f"},{url:"/icons/phone.svg",revision:"a171b68b472cf7beeda8e30ca8270f56"},{url:"/icons/photograph.svg",revision:"fb6ccf9ea85b08a56a58f105172a7d7c"},{url:"/icons/play.svg",revision:"b04e66db42da2ee0e9175909c1353dad"},{url:"/icons/plus-circle.svg",revision:"44265bae4d47c4f0589aedaa8bb30a73"},{url:"/icons/plus-sm.svg",revision:"674a072adabdf0c21f330ef9585eeb82"},{url:"/icons/plus.svg",revision:"674a072adabdf0c21f330ef9585eeb82"},{url:"/icons/presentation-chart-bar.svg",revision:"2442563fe786e161097f51b28504167f"},{url:"/icons/presentation-chart-line.svg",revision:"cf8647f249163741bf3ade98bd0f7a04"},{url:"/icons/printer.svg",revision:"dd65537f6c17d4af75723410c8b8d4b8"},{url:"/icons/puzzle.svg",revision:"3eb807f15da9b45030e709098e77e86b"},{url:"/icons/qrcode.svg",revision:"25d075d647ea719e545e9673e2975ccc"},{url:"/icons/question-mark-circle.svg",revision:"5e0b6ef667282c0769ba36776b5b388d"},{url:"/icons/receipt-refund.svg",revision:"8a5827f36fef647fe5d44a1a411981d4"},{url:"/icons/receipt-tax.svg",revision:"a23e6da02af7bb0cd6a65f5a57a4e757"},{url:"/icons/refresh.svg",revision:"19aa5e73c8f5247b56082ccadc3ba2dc"},{url:"/icons/reply.svg",revision:"cfbb9f34997bb23fb4d2f91a94239a79"},{url:"/icons/rewind.svg",revision:"a7ccc4ab7dbfca908d5cafeaf46d9a14"},{url:"/icons/rss.svg",revision:"fddcaf8d3cd955bea6648f638505214c"},{url:"/icons/save-as.svg",revision:"cba10b66c5c1765e1ba4cd2bcbcae09f"},{url:"/icons/save.svg",revision:"63ee39336f5844476c8386d77776428c"},{url:"/icons/scale.svg",revision:"c0e9a9a25454bd8a17a3abb3dd03f835"},{url:"/icons/scissors.svg",revision:"2a28dba95a5ccb3b2813626d3f78a917"},{url:"/icons/search-circle.svg",revision:"d40f33e252ce7d652276274ac9260a6d"},{url:"/icons/search.svg",revision:"0ee5a79d6731c7d253d80f4a9d9bae69"},{url:"/icons/selector.svg",revision:"d887761e6ebc77c5bb5a42e038b4950a"},{url:"/icons/server.svg",revision:"28ad30292040fee8485c8b1e8f80dd60"},{url:"/icons/share.svg",revision:"14898222d74b07973c9b1f240fb381ee"},{url:"/icons/shield-check.svg",revision:"873880bddfce2cc2c309b439f37058de"},{url:"/icons/shield-exclamation.svg",revision:"c8a2973cc74b43704ec2635d47fe6689"},{url:"/icons/shopping-bag.svg",revision:"e2cb38952df30fa71b3498d91fcac989"},{url:"/icons/shopping-cart.svg",revision:"64791906b2dce33a650479c132f8ec77"},{url:"/icons/sort-ascending.svg",revision:"d3fd5d0ed22177f2b7e70358bca7abe3"},{url:"/icons/sort-descending.svg",revision:"f9d676aa7d10e5274855bc1e08f1563f"},{url:"/icons/sparkles.svg",revision:"d73fe0f2c6f912d336f670849c4ebcac"},{url:"/icons/speakerphone.svg",revision:"93820654e69b2203ae4811e775b3e826"},{url:"/icons/star.svg",revision:"df5e4d04c582d44d3daa927a3b8a4e78"},{url:"/icons/status-offline.svg",revision:"eaf757e688f2986977e8f72ff859e159"},{url:"/icons/status-online.svg",revision:"e1db5a033eef0e830b2a49fb27890ebd"},{url:"/icons/stop.svg",revision:"293abb90f9e67df8709e93c1556541db"},{url:"/icons/sun.svg",revision:"84c10d38bb37e603f4c8f1abe2cad7b3"},{url:"/icons/support.svg",revision:"cb2ba50b364dace0778dee32b07e9a0c"},{url:"/icons/switch-horizontal.svg",revision:"c49eb94f778b92c75739ad18a57de96a"},{url:"/icons/switch-vertical.svg",revision:"df1d884c22a5997ca3f216298a659db1"},{url:"/icons/table.svg",revision:"5535af0567f098137b6afc0c1655311f"},{url:"/icons/tag.svg",revision:"ab2ee2bd342eff93b635c30da95ca998"},{url:"/icons/template.svg",revision:"1a9a15425f65aa31bb701ab06f8f6827"},{url:"/icons/terminal.svg",revision:"3301beb0f703c073c11b8ed9297831fd"},{url:"/icons/thumb-down.svg",revision:"a344f39ebb11453e114548c76d35023d"},{url:"/icons/thumb-up.svg",revision:"78f2a4c23645f6d79f10cf63e740bc86"},{url:"/icons/ticket.svg",revision:"3c4bf34dd4d8bd29f12cfdecd7caf97f"},{url:"/icons/translate.svg",revision:"a279b0b874a425df7f3bea8746a2449a"},{url:"/icons/trash.svg",revision:"b623d7a8d302c59295bf5bbe2ae13171"},{url:"/icons/trending-down.svg",revision:"83cb6f96bfaef80433574df892f5c086"},{url:"/icons/trending-up.svg",revision:"c203d61880af7ac7f6d4f1e7c335d1e7"},{url:"/icons/truck.svg",revision:"1d35b47afa7da290f419c0a39bca23a1"},{url:"/icons/upload.svg",revision:"3898ceca7965d7d069f2481196a9b6ca"},{url:"/icons/user-add.svg",revision:"af274333b5d9cda3d2d4a0b4db49bcfd"},{url:"/icons/user-circle.svg",revision:"5ef5bebc0cf53adb3075ef50495ac663"},{url:"/icons/user-group.svg",revision:"ad54ca5de41682bdd6ddabf98236b94c"},{url:"/icons/user-remove.svg",revision:"cb5b943bc139e5ff0b229ea234c2c395"},{url:"/icons/user.svg",revision:"f20251571d32e6029df2bca941f94b79"},{url:"/icons/users.svg",revision:"40c20ebfee895030e4b264626c281b92"},{url:"/icons/variable.svg",revision:"17fbd305cd09815260515d00ce0f9913"},{url:"/icons/video-camera.svg",revision:"d5b049441ef0f09aa36870c459729093"},{url:"/icons/view-boards.svg",revision:"52bcc6058c8bde459b1145102f4667f8"},{url:"/icons/view-grid-add.svg",revision:"ade01739c0f24a42fe8e212795400110"},{url:"/icons/view-grid.svg",revision:"e3e0b8fc01f0335743b92de84f1b13a8"},{url:"/icons/view-list.svg",revision:"f217766931ad92d73f3878f890e8fbf6"},{url:"/icons/volume-off.svg",revision:"d5949f073b244b9a12b34b96dbd2ebf4"},{url:"/icons/volume-up.svg",revision:"e72d0bf53bb3de357f4adda3d512589f"},{url:"/icons/wifi.svg",revision:"1316e8bf16cf3b675f1697b4fea1a24a"},{url:"/icons/x-circle.svg",revision:"424df6ccbb85f55b594b986cab9b8bf0"},{url:"/icons/x.svg",revision:"fdadaaac9303f3877e62df984b086e56"},{url:"/icons/zoom-in.svg",revision:"8044312393b52b9373bd46684b12fa0d"},{url:"/icons/zoom-out.svg",revision:"ad7ac90b68117ed7ee29307525abed4a"},{url:"/images/icons/icon-128x128.png",revision:"705f3d4df94c7f222054d49511fc34a3"},{url:"/images/icons/icon-144x144.png",revision:"5ddd1c9876b269c816796f15add65edc"},{url:"/images/icons/icon-152x152.png",revision:"a56893a327b0d7c45660be867f953ad2"},{url:"/images/icons/icon-192x192.png",revision:"f7accee528ff0871bf36b1454d000159"},{url:"/images/icons/icon-384x384.png",revision:"7b60517dd0c15e3c54fcbd1d8331c990"},{url:"/images/icons/icon-512x512.png",revision:"33ba6fb707fbcb2ad5c61c0159046c8a"},{url:"/images/icons/icon-72x72.png",revision:"301190d2d6b39882897cc49fd39eeccb"},{url:"/images/icons/icon-96x96.png",revision:"bc6a273dcfd54baf2b1b7c9b337155df"},{url:"/logo.png",revision:"79285918cd2c1266208a0af6a2e1d334"},{url:"/logo.svg",revision:"f5d68be7975d47aa137589c608243b14"},{url:"/manifest.json",revision:"90b63ea555eeb65d213b651b3fe2d710"},{url:"/ms-icon-144x144.png",revision:"2cdfdb07dab86b776dbe091466febd35"},{url:"/ms-icon-150x150.png",revision:"ba2643b37a07b2a9aa490aaf4eaf6a2b"},{url:"/ms-icon-310x310.png",revision:"289be4f0d6c7292f7eb3353127ca2adc"},{url:"/ms-icon-70x70.png",revision:"88c6fca7c95e15f77b4f37b63e5f76a7"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
