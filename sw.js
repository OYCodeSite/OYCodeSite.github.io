"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.core.setCacheNameDetails({prefix:"OYBlogs"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"2102aa48305d566a5869861f2fbf2f8c",url:"./404.html"},{revision:"f5aed8ca01b2acb565a8900e1f0e664d",url:"./aboout/index.html"},{revision:"3bae83ae4b5b92b418a586b7ba2e38d2",url:"./archives/2020/07/index.html"},{revision:"1c37273908e036d537fb54d877d33357",url:"./archives/2020/07/page/2/index.html"},{revision:"f4803e82b57436d72fd906662b61f6aa",url:"./archives/2020/08/index.html"},{revision:"094163998e789d663759b261885a323c",url:"./archives/2020/09/index.html"},{revision:"f61de5d8842f12615fd2aff33624180c",url:"./archives/2020/10/index.html"},{revision:"95e4a90bfdf87ea9d31adb9aef003218",url:"./archives/2020/11/index.html"},{revision:"67b769bb7857a88d9121d98c5fa2c9eb",url:"./archives/2020/12/index.html"},{revision:"605ef2f093fa227e147c718dbbe83d94",url:"./archives/2020/index.html"},{revision:"a565710d0f110cb5c2e14fecd0e2b112",url:"./archives/2020/page/2/index.html"},{revision:"59b4447b0833046978d0b64d5ee75a32",url:"./archives/2020/page/3/index.html"},{revision:"fbaadb8a83eb3ea70f649681f2984479",url:"./archives/2021/01/index.html"},{revision:"d1a393106a2ad33467bd40e7ac0d3fb5",url:"./archives/2021/02/index.html"},{revision:"0dd4bd084bc57532ce7eec6cf3934ef4",url:"./archives/2021/03/index.html"},{revision:"4568d8f19e2b98a80246f4013a816ac0",url:"./archives/2021/04/index.html"},{revision:"bff5354cbe2891d2cac57e568276b144",url:"./archives/2021/05/index.html"},{revision:"f19d5c8eac8abb0008cde8be38556a6c",url:"./archives/2021/06/index.html"},{revision:"59ffdd43a356504f8dd8d8fdccb81c83",url:"./archives/2021/08/index.html"},{revision:"e5f96f40032e37f37e41a8da7eb05646",url:"./archives/2021/10/index.html"},{revision:"827c265597dc933cc782ac604203bc03",url:"./archives/2021/11/index.html"},{revision:"677bbf8db4ee649f4f2c2650bab0ec17",url:"./archives/2021/12/index.html"},{revision:"c7d370105143b1729213b163a5af9060",url:"./archives/2021/index.html"},{revision:"4821d185ebe1e42b30751803a0dc3d9e",url:"./archives/2021/page/2/index.html"},{revision:"0bc7c49b7238f67940e228be062b3300",url:"./archives/index.html"},{revision:"c2c087040fb9d41e8947979043c12b80",url:"./archives/page/2/index.html"},{revision:"b979c10c30d8326f50fcf8d5f636b1cd",url:"./archives/page/3/index.html"},{revision:"939205d7b1294cd581b095e3019c155f",url:"./archives/page/4/index.html"},{revision:"7eec1ce8c100afe10a264fd68dd1d51f",url:"./artitalk/index.html"},{revision:"01bf81e131e22115ae7f9b8d859a9bdb",url:"./baidu_verify_code-47ttT2zdt4.html"},{revision:"e0e52e5caeaf64694893aabd81abf4e0",url:"./bb/index.html"},{revision:"6f72911c87b48ff444ade0d667f796b6",url:"./categories/CentOS-7/index.html"},{revision:"8a0a5630394a9b76d345aecbff0eed61",url:"./categories/CentOS/index.html"},{revision:"208c879fe16c3685696516705f6df6f6",url:"./categories/GitHub/index.html"},{revision:"0a52ac056ea838ffe4fd12a2a7cf6ec5",url:"./categories/Git工具/index.html"},{revision:"7605a5138723f7492411bf00fb7bcf32",url:"./categories/index.html"},{revision:"d379a5ddb4b977fa4fee65853510b037",url:"./categories/Java/index.html"},{revision:"a3d2ef5c6c9bde8eecdd39bcd8b0f6eb",url:"./categories/JavaEE框架/index.html"},{revision:"9d71b0624aeef7ca3140a4124bb68eb9",url:"./categories/JavaEE框架/page/2/index.html"},{revision:"158823982ed7632a06bb44a2ab33e2bb",url:"./categories/JavaScript/index.html"},{revision:"e0bd2c5b3f7956f94cf1339d96ae34a5",url:"./categories/Java算法/index.html"},{revision:"575329404ede0afe928028e73087b1fb",url:"./categories/Java设计模式/index.html"},{revision:"134c50922fb749be443afa61ab0b129e",url:"./categories/JDBC/index.html"},{revision:"dee2fccb2e796d74b120eefa8e9799c4",url:"./categories/Linux/index.html"},{revision:"2ad7885151a80169686d318eaea4df2c",url:"./categories/Linux语言/index.html"},{revision:"aae7979723129b47d049e598855127fc",url:"./categories/MySQL/index.html"},{revision:"a066634bcbd3e3c0286d664fc6791fe8",url:"./categories/Redis/index.html"},{revision:"81647f50a8a48d9423bee2e28a39be36",url:"./categories/Web前端/index.html"},{revision:"e67b2ed14240f91d743fe7899197cd66",url:"./categories/中间件/index.html"},{revision:"dc4087e57aa2a3aafd54a7a0a8e0808a",url:"./categories/工具/index.html"},{revision:"09c17cf4b9359682ff16ec2a4613f37e",url:"./categories/数据库/index.html"},{revision:"39d55e388e16e1f1581631fef33f8cb6",url:"./categories/项目Bug/index.html"},{revision:"09710575e44f076e70c9077c47fbbbf4",url:"./categories/项目实战/index.html"},{revision:"44882c2034729f54697e36de7d486ebc",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"c634fd2f8cb29d8e4ec29752547231b4",url:"./images/manifest.json"},{revision:"676031bd577daa40ab16ef421ab041a9",url:"./images/pwaicons/browserconfig.xml"},{revision:"26c519dd3e5cf25565b511080338a5dd",url:"./index.html"},{revision:"f468f3bc967338f2dd7a6e06c2eef692",url:"./js/main.js"},{revision:"533d980c0d50a0d0d7fe34c41a3e2100",url:"./js/search/algolia.js"},{revision:"acb62dcdf7e90930da3f6bf07349fc21",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"4cfc631de0e5f6ff12b2833cac848f27",url:"./js/utils.js"},{revision:"0c8dee274e1c53847e4aa0fb707fb3d4",url:"./link/index.html"},{revision:"49cc63fbaaeccea9dc27fdd8726eccda",url:"./logs/index.html"},{revision:"e07bc04d50aa4732258cbb9cf959f599",url:"./messageboard/index.html"},{revision:"2aa15066cc9e35c5aee8f326e68a198a",url:"./music/index.html"},{revision:"7bcd34bf409a79639ff7221e4f933523",url:"./page/10/index.html"},{revision:"8504e067717966f610449a8da45d3722",url:"./page/11/index.html"},{revision:"1eb808b271cdd4066e9c4b9dffd8bb29",url:"./page/2/index.html"},{revision:"a550b16322298f169c49fa0340986fc5",url:"./page/3/index.html"},{revision:"b0842efacc50e3d07b1d74408a134608",url:"./page/4/index.html"},{revision:"bcad1a207d634eaaf1d1a7e6c1d0f22b",url:"./page/5/index.html"},{revision:"e10e5e5fd1ca9ab9adfc254ce03fe429",url:"./page/6/index.html"},{revision:"ed2a7056de4a8bd4c945873a0e40b006",url:"./page/7/index.html"},{revision:"33c8e716305bccfdd5b7d329c3102208",url:"./page/8/index.html"},{revision:"b4615c23957de8943a4b0ecdda995de9",url:"./page/9/index.html"},{revision:"665e2ec2374de9520f0096fa72e9d4ef",url:"./posts/1005838445/index.html"},{revision:"cff8dee1de1714e27b9c32241b9e10ad",url:"./posts/1104683778/index.html"},{revision:"3d9a708754e665d3f8835e9d79763839",url:"./posts/1175849155/index.html"},{revision:"679c615c3df0b2462856aeb189a128fc",url:"./posts/13005592/index.html"},{revision:"61900b53ae1ca79344d9f3fe3077566d",url:"./posts/1330258666/index.html"},{revision:"4a7c4a3dcb56d796a8c53fe68f356ab2",url:"./posts/1339733598/index.html"},{revision:"68bb7dc92417e983ea791fa3ae3ed71b",url:"./posts/1393401608/index.html"},{revision:"8d69bac17d067a2a5142048012b93a05",url:"./posts/1519064184/index.html"},{revision:"acbe57ef2582f7de6547a231a84e015c",url:"./posts/1520998390/index.html"},{revision:"0b93790c527019dba852e8f015ce31f5",url:"./posts/1550900565/index.html"},{revision:"59791f4e437d32af613fe759e3b336d3",url:"./posts/1566646582/index.html"},{revision:"7083320920b4eb65fdd8cf76272680c4",url:"./posts/1574967654/index.html"},{revision:"fc540ac2e154cdc1bc07474adb3cedc2",url:"./posts/15f4985b/index.html"},{revision:"c4f19a7b66a08168843cf6724067846d",url:"./posts/1634411798/index.html"},{revision:"ab81d35651eee82a64118cbbe2630385",url:"./posts/1677637013/index.html"},{revision:"bfd5f809e52b12d077875a7d870a4679",url:"./posts/1738458658/index.html"},{revision:"f02d50b9e291b45ac656cd5d5645e74c",url:"./posts/1762820479/index.html"},{revision:"3c123ce56fa1802befede80ae05c9760",url:"./posts/1872245415/index.html"},{revision:"ba293b05e81cbcaa0e74a353960180f2",url:"./posts/1905208898/index.html"},{revision:"81bc6a1512198eda25d8f1f8a2dabb47",url:"./posts/1b6f740d/index.html"},{revision:"462b42c66389fd62e42e860f87566897",url:"./posts/1c9cc24c/index.html"},{revision:"f5286cda38d794a98d5cfb7b4af375fe",url:"./posts/1dfa6edf/index.html"},{revision:"231d00f6b0f2ff8fd9134fa87c41cf47",url:"./posts/2068565369/index.html"},{revision:"f22b7f231fb59d65fe5c37b1d43d9029",url:"./posts/2068909584/index.html"},{revision:"51b93fd74665c6bae501e409619220a0",url:"./posts/2086819267/index.html"},{revision:"cadf575388c4a06e515fcf131ac5e10c",url:"./posts/2120368839/index.html"},{revision:"93a82bf3b126454937ff64f200004e4a",url:"./posts/2130149512/index.html"},{revision:"d3871b06619bc0fc7dfabf926d4174dc",url:"./posts/2164673978/index.html"},{revision:"80cda9332ac1cb5b72a5d7ef3638c046",url:"./posts/2187905911/index.html"},{revision:"e70fdc30efecb97cb5982fcb656c214c",url:"./posts/2243339053/index.html"},{revision:"793dd8d736929b4d467a1b076c7ec06d",url:"./posts/272460835/index.html"},{revision:"39bbcff8f40850080fff62e5b7ae5e02",url:"./posts/2761314235/index.html"},{revision:"508ad595b1caa31a2b10394a473372ce",url:"./posts/2781775372/index.html"},{revision:"4e7c9de3d36d6043b35f47b59b518948",url:"./posts/2817363972/index.html"},{revision:"9d47df76ec59c14a93090a2c202ae083",url:"./posts/2909614374/index.html"},{revision:"d219c78204272b48c629cf9626525d24",url:"./posts/2922948377/index.html"},{revision:"a5ece721db4a63b5e606283ece6853d4",url:"./posts/2968822672/index.html"},{revision:"a24227cec74344b9d106d8c510a51ca0",url:"./posts/2dd14627/index.html"},{revision:"7ebfc50b0285775f7f888cf3386d64d2",url:"./posts/315616543/index.html"},{revision:"62a127bb45a04b961a6bcbe4b0d5317b",url:"./posts/325844318/index.html"},{revision:"2729ad051b4efafa0dcfd2a244335c0b",url:"./posts/328351179/index.html"},{revision:"b4ecf7b6e05e86077027692b2e14c3cc",url:"./posts/3305917059/index.html"},{revision:"11bfd8d62674388ce48c2fd8dbd2a6d7",url:"./posts/3528046541/index.html"},{revision:"bac4b8f4c451e6b35c89beff84d55973",url:"./posts/3554798849/index.html"},{revision:"b09f107a62090aad080d789b3b68aa10",url:"./posts/3556927238/index.html"},{revision:"e43a9f09c6395e3289cbf2bf06bf4b2f",url:"./posts/3661501281/index.html"},{revision:"d3f208aeab29b94d2b28d72eb7be1986",url:"./posts/368886813/index.html"},{revision:"48fc554710a2fdc422245164e4075ac6",url:"./posts/3830795892/index.html"},{revision:"85924d7d304d985159ce6016a7569597",url:"./posts/3862476156/index.html"},{revision:"a88d9d38842b23e8194ede63d1a87148",url:"./posts/3895825257/index.html"},{revision:"d129dbfafc6afbbe5288d8ea821ce438",url:"./posts/3956353174/index.html"},{revision:"a7fa81379f7ef9da37315413fb669094",url:"./posts/3979597380/index.html"},{revision:"7fbcfd72dc3ca6b8adba1edbd2e9e945",url:"./posts/3991296734/index.html"},{revision:"19019465f857c450adc10d429ffa407f",url:"./posts/3994269159/index.html"},{revision:"de8dad0d22840958523a09ed1b9bede8",url:"./posts/3b74a348/index.html"},{revision:"55260ca22ed4cc5f501a228213fb8592",url:"./posts/3d7d679f/index.html"},{revision:"bb288318d7a564a1bbdc62639529a0b0",url:"./posts/4004677012/index.html"},{revision:"0383f43a5b954950742ba3046cefb72d",url:"./posts/4019007238/index.html"},{revision:"f4f205cdb2abd61b44aa5b1eddb0fd00",url:"./posts/4146242720/index.html"},{revision:"c67a01bc19905f24f7fe01d5f2f4d633",url:"./posts/41be370a/index.html"},{revision:"1a09ef003e879cf1389ccc4341c0afea",url:"./posts/4226784210/index.html"},{revision:"08a285969525a1ab70e05100071dd3bd",url:"./posts/427140827/index.html"},{revision:"e72536ae811f3fc7bc30f8fd2b8048e5",url:"./posts/50bb6649/index.html"},{revision:"05d3b230fd71094bb093f0214d878137",url:"./posts/518000799/index.html"},{revision:"4728c82cad7f917e4baf9c53782a23b6",url:"./posts/5d2bcff8/index.html"},{revision:"e20d25a586918c7b3d8d3f853b94a82c",url:"./posts/658751968/index.html"},{revision:"463fd680eaade284b567d5131f2e98d9",url:"./posts/6b30c31b/index.html"},{revision:"93a3a2d57a1dbda29fd59b78a42a2255",url:"./posts/71d58e27/index.html"},{revision:"5f4bd301436dfd449dd66179bd29980e",url:"./posts/726828229/index.html"},{revision:"00f699e84f1ccf7a5f11c7164fa21335",url:"./posts/72f33496/index.html"},{revision:"fed78f9d6ef0a6a5f77bbac707ffbaa3",url:"./posts/771027640/index.html"},{revision:"5e1d2f8108722706a2922142036a71b2",url:"./posts/7d1c5899/index.html"},{revision:"a419fc7ec0eab001fbb431b6661295e4",url:"./posts/80f09d1c/index.html"},{revision:"7eaa4102e469661e74b590f7dec39745",url:"./posts/816104377/index.html"},{revision:"5ead81461392da7f2e4368ddebfe3e6f",url:"./posts/838d68a0/index.html"},{revision:"3bab15601eb960f39437eb3809d6ba9d",url:"./posts/850137752/index.html"},{revision:"e90f875e633de2ab2c45f48bea767eb0",url:"./posts/864013447/index.html"},{revision:"c81fc56db358155617e2a85ffb316af2",url:"./posts/865268903/index.html"},{revision:"9864fc1fb848a8965e05ccccb14c9e9e",url:"./posts/872766944/index.html"},{revision:"a0bfea219e120df8a9511eb5d9a589ea",url:"./posts/9103988a/index.html"},{revision:"baa8cbead9a4db25aa9df3a59610279f",url:"./posts/91ec6c75/index.html"},{revision:"f782e0e4ed6469f6cf7dbae9678fd66b",url:"./posts/949df4a0/index.html"},{revision:"eb83e14b9087c8d7e6a2ba260246ba6a",url:"./posts/96e5960a/index.html"},{revision:"9a381a1246eae0f94aea63e8512347c8",url:"./posts/a2af08b2/index.html"},{revision:"60eaefe20a30f453915b5c3eb555682a",url:"./posts/a868dd1/index.html"},{revision:"65465442264c6dfe47aeddce1966d513",url:"./posts/a8da4fb0/index.html"},{revision:"49c9e7ec2382aae8d6176e5605f090b4",url:"./posts/abb0658c/index.html"},{revision:"bebb2a0aa8761501e87f7494bf7560ce",url:"./posts/b41f8f0d/index.html"},{revision:"c35be080e03496d64b7fcf28f0df8b13",url:"./posts/b543ced0/index.html"},{revision:"c072c55e593f1022ff30f5ddf4e5a69c",url:"./posts/b95a7f8d/index.html"},{revision:"63a74aef46fd656a7294e7d8fadb1507",url:"./posts/bff0911c/index.html"},{revision:"b1cd9eb438eed696cc044d787a11887a",url:"./posts/c8221b76/index.html"},{revision:"d92d90791f439d61fec694a78ea96a3a",url:"./posts/c84e54f/index.html"},{revision:"bc0102243572c7326416f14f435bd819",url:"./posts/caa6f64f/index.html"},{revision:"8be2ee7f2a6c7d1a99f970df198f66fd",url:"./posts/d461a50b/index.html"},{revision:"183ec1df40c15e00df4cf141685fd2f9",url:"./posts/de6b4930/index.html"},{revision:"2517d6f93f001721d738f7e47ea72c8d",url:"./posts/df2899b1/index.html"},{revision:"f29789bff17ae399e29a4b4eb8a4589c",url:"./posts/dfb9e877/index.html"},{revision:"112d188fa145aa2d63b04b633dc06c0b",url:"./posts/e403c9e7/index.html"},{revision:"be3afc7fc12110d29ef337e198a26e97",url:"./posts/e63bc92f/index.html"},{revision:"67d2a8a389b916aeb80ba0abedf1b881",url:"./posts/ed909786/index.html"},{revision:"a5e78ae61b4ba32e459d2ff0791c2675",url:"./posts/f1d1d958/index.html"},{revision:"01829698697c217291b0c5f4fb84d182",url:"./posts/f1fcc865/index.html"},{revision:"2cb14bb13d1db6593b71f731db529294",url:"./posts/f347fc6a/index.html"},{revision:"393a8510e719e0fc8e49aacd3cd8304f",url:"./posts/f5810d24/index.html"},{revision:"13a0e742ea2799353adbd8b555c58718",url:"./posts/fcc1ff03/index.html"},{revision:"4e0f89d2587b8084c1af16fa6b821584",url:"./tags/Bug/index.html"},{revision:"af9bc59d6b073f607a7b1af957113ebe",url:"./tags/Canal/index.html"},{revision:"2390d1018c2fb403c77842675011e030",url:"./tags/CentOS-7/index.html"},{revision:"536c9e166df7d5e8a29363c3d15dd86e",url:"./tags/Docker/index.html"},{revision:"ae41c026852121ab521821f8ef4a9826",url:"./tags/GitHub/index.html"},{revision:"346d3fe57404f2069609eefd6932eabd",url:"./tags/index.html"},{revision:"adcbc43ff5d8bd146484fbc024af15c6",url:"./tags/Java/index.html"},{revision:"ece1c49b1c17a4bf197586e54e79ce88",url:"./tags/Java/page/2/index.html"},{revision:"8860e67220dabbd19abf8c5cae4210f2",url:"./tags/javascript基础/index.html"},{revision:"3a2a095bad8262ff0839b8cfc96fb5d0",url:"./tags/javaScript基础/index.html"},{revision:"73caca6b80c2f887ee6150e18ec0e5c6",url:"./tags/JavaScript高级/index.html"},{revision:"76ba967b58b5681ee5e864128a2a5675",url:"./tags/Java算法/index.html"},{revision:"34a4a59923c0fd05e033f0ecfeeccf55",url:"./tags/Java设计模式/index.html"},{revision:"648c787d772d3e871a52b43bfaf670c8",url:"./tags/java项目/index.html"},{revision:"f7233ed86b37e79121cfd34d31bb6c62",url:"./tags/Java项目/index.html"},{revision:"a171476644b202d6c362b0ec01ea0fe7",url:"./tags/JDBC数据连接池/index.html"},{revision:"8c812a3aff07e69b5cf798282d31ec65",url:"./tags/Jenkins/index.html"},{revision:"1a3a50f3038709671acba9bbe8282849",url:"./tags/jQuery/index.html"},{revision:"33843ced9a1fb1652304c9cbae3169dc",url:"./tags/layui/index.html"},{revision:"7e7d5f46c05ed548e003ddb192c32a1e",url:"./tags/Maven/index.html"},{revision:"549f7fd601389a17fa43234a96899d39",url:"./tags/Mybatis/index.html"},{revision:"26c14394621fd168f58b684309343bef",url:"./tags/MySQL/index.html"},{revision:"f11e4c353ad9d6d7bd90aba780f1e638",url:"./tags/Node/index.html"},{revision:"20acc234c981d62084fedfaf41eec719",url:"./tags/OSS/index.html"},{revision:"e62d94822e50506e7c8d861972de4699",url:"./tags/Other/index.html"},{revision:"018aeb00fd7e184cb63f7e342431358b",url:"./tags/Redis/index.html"},{revision:"d35ee9fcafadf9bb4792201c9a459b44",url:"./tags/Spring/index.html"},{revision:"c3459d26370b1bea091a01ff14034c36",url:"./tags/SpringBoot/index.html"},{revision:"4d0264d1fccf6a36620d1c68613122e3",url:"./tags/SpringCloud/index.html"},{revision:"f044284cf3403ed9c96ecc80454daef1",url:"./tags/SpringMVC/index.html"},{revision:"a66ec63ec2906a50d508a23b76757a85",url:"./tags/VPS/index.html"},{revision:"c27007b2ea13d015d96399e13d531672",url:"./tags/Vue/index.html"},{revision:"f9550a0a38e07975fb9b54c0df370ce8",url:"./tools/css/bb.css"},{revision:"69e24ad38457a2ced31cbde19a566bd2",url:"./tools/css/commentsbar.css"},{revision:"c0035e83d22e8ab118b1bdd21c182e1e",url:"./tools/css/friend.min.css"},{revision:"f7f5815747f181f33d671fabb84a191d",url:"./tools/css/icofont.css"},{revision:"4b8c0ea28cb2ecd76d9183a7389bbcb6",url:"./tools/css/notetag.css"},{revision:"9bba4037d37319dc47488db38b2ecc80",url:"./tools/css/oy.css"},{revision:"c2beb79e7f957c7002a926e620fcde38",url:"./tools/css/oyindex.css"},{revision:"725ffb89cdfee2ac582076db960e2dcc",url:"./tools/js/index.js"},{revision:"381f04c09d79a84b20e89afeb18e1b93",url:"./tools/js/oy.js"},{revision:"2f6ed1d4f664e913afb75553dee28fe2",url:"./tools/js/wow_init.js"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();