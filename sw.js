"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.core.setCacheNameDetails({prefix:"OYBlogs"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"2e8b5d2969455916408724c36ce237ad",url:"./404.html"},{revision:"7f5ef583518234c8bd0be877c225e214",url:"./aboout/index.html"},{revision:"9dc642a2d631140ede0f2ac3253f8ab1",url:"./archives/2020/07/index.html"},{revision:"39f0ad86769b3a8ed8d60d17d0314c57",url:"./archives/2020/07/page/2/index.html"},{revision:"8307f0d7514bc9ff8c836e3a1c159202",url:"./archives/2020/08/index.html"},{revision:"83da1cff2de15120891f79e37e95007d",url:"./archives/2020/09/index.html"},{revision:"eed7dd30431de10ee6b1c3ff9851c394",url:"./archives/2020/10/index.html"},{revision:"9c6851676bfd6b32b3f3e6a34d855b8e",url:"./archives/2020/11/index.html"},{revision:"9f9c166234f2687101629a95abece4e6",url:"./archives/2020/12/index.html"},{revision:"94c1aa367072ac7786b82732ec79546e",url:"./archives/2020/index.html"},{revision:"df05b110809f46ca415cce2d19daeb9f",url:"./archives/2020/page/2/index.html"},{revision:"e0e36e616d8be6cbd27b093ebee7a727",url:"./archives/2020/page/3/index.html"},{revision:"e89cefc84c30cfb8ab329d71e91cdef1",url:"./archives/2021/01/index.html"},{revision:"262c1bb458ad0765db7fb946254e8351",url:"./archives/2021/02/index.html"},{revision:"61a67d7f51785def345498b813a6448d",url:"./archives/2021/03/index.html"},{revision:"527ed8f3bf88c9cc04d932a42823567f",url:"./archives/2021/04/index.html"},{revision:"6f5ed60da707aace719dcc45d8274ca1",url:"./archives/2021/05/index.html"},{revision:"46d996af19f947375e2d617a14f4767f",url:"./archives/2021/06/index.html"},{revision:"9256b3602726d9d5b570b2e97432e6fa",url:"./archives/2021/08/index.html"},{revision:"2ee140963027f221b7a8a4305fc992ae",url:"./archives/2021/10/index.html"},{revision:"900e3365860bc6113057d8042b9138f4",url:"./archives/2021/11/index.html"},{revision:"027a8865a95d4a442b91c412138e5243",url:"./archives/2021/12/index.html"},{revision:"5ba409067db3ce884169b27800d8476d",url:"./archives/2021/index.html"},{revision:"841645265f0bb818578865bc03a48ad7",url:"./archives/2021/page/2/index.html"},{revision:"79a2386611d83f8de8db0d5e8273922c",url:"./archives/2022/03/index.html"},{revision:"3acf2fafc6e104691e5d9cc08c958931",url:"./archives/2022/04/index.html"},{revision:"02dda222891dcff01eba5a050370e92d",url:"./archives/2022/index.html"},{revision:"f2ff812e5cca29da44e967b302fcb977",url:"./archives/index.html"},{revision:"e09987f82747300047d33eaef4b61fb4",url:"./archives/page/2/index.html"},{revision:"e907f7421d7021979600dee5ff387fd9",url:"./archives/page/3/index.html"},{revision:"13c2bba2a5a5ce8332fa6c90b6ad7a80",url:"./archives/page/4/index.html"},{revision:"4f7198bdf82ee1738e3c765f607169fd",url:"./artitalk/index.html"},{revision:"01bf81e131e22115ae7f9b8d859a9bdb",url:"./baidu_verify_code-47ttT2zdt4.html"},{revision:"c10061a883836ba56d5416a32d9b02c8",url:"./bb/index.html"},{revision:"1f3e69eac683d41011fd0bc0aa5e65bc",url:"./categories/CentOS-7/index.html"},{revision:"c4678b9de8017cd6c7c1ef156741707c",url:"./categories/CentOS/index.html"},{revision:"8c2cfbb4087c7d3e697ef4951975ecc9",url:"./categories/GitHub/index.html"},{revision:"63e15a36133da6a79a66c83ec4f02b3d",url:"./categories/Git工具/index.html"},{revision:"31b4fe0df1c1a40e0efd7a45271624f1",url:"./categories/index.html"},{revision:"32aa4ec1d0688888f1653ab6f83735f6",url:"./categories/Java/index.html"},{revision:"dd87fa5a8f84c29718d82e9b75cf154a",url:"./categories/JavaEE框架/index.html"},{revision:"bc6d3c1ae35038001d4baa84a44fdb9c",url:"./categories/JavaEE框架/page/2/index.html"},{revision:"70f9cd115d393038bee60717ab6ee132",url:"./categories/JavaScript/index.html"},{revision:"8fc8264d9fb1abba13564a3964df66ef",url:"./categories/Java算法/index.html"},{revision:"760fa5d792548c447c77ec23e0e81950",url:"./categories/Java设计模式/index.html"},{revision:"335bfc9b3034053553dae19125554f4f",url:"./categories/JDBC/index.html"},{revision:"7bdd2247ff54d61f1572232d323461b0",url:"./categories/Linux/index.html"},{revision:"e5cdc7a25d19668ffe5939d90d6e9717",url:"./categories/Linux语言/index.html"},{revision:"1195699b30e91012ebc0b53af35a5441",url:"./categories/MySQL/index.html"},{revision:"bc7d97e85557105ecae30966b2027f04",url:"./categories/Redis/index.html"},{revision:"f0579ce9724a4ebb90520337817cfeab",url:"./categories/Web前端/index.html"},{revision:"ae58236195f16a0392e752b244aba269",url:"./categories/中间件/index.html"},{revision:"158a523c47eee52c9c4066603d3ffecf",url:"./categories/工具/index.html"},{revision:"fee13712b1eb892df0e3d7a2e0090891",url:"./categories/数据库/index.html"},{revision:"f91658d19e0408ae68ba7d6a0333a98e",url:"./categories/项目Bug/index.html"},{revision:"95ef9dd617fbb4d5d834944884b0b6b0",url:"./categories/项目实战/index.html"},{revision:"e1c62bb493225968c63dea25cc836c6d",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"c634fd2f8cb29d8e4ec29752547231b4",url:"./images/manifest.json"},{revision:"676031bd577daa40ab16ef421ab041a9",url:"./images/pwaicons/browserconfig.xml"},{revision:"4a3261dffbcbf57f766c5a9fce345c13",url:"./index.html"},{revision:"f468f3bc967338f2dd7a6e06c2eef692",url:"./js/main.js"},{revision:"533d980c0d50a0d0d7fe34c41a3e2100",url:"./js/search/algolia.js"},{revision:"acb62dcdf7e90930da3f6bf07349fc21",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"4cfc631de0e5f6ff12b2833cac848f27",url:"./js/utils.js"},{revision:"bce39d706b16ead2fa7d2778f3b04122",url:"./link/index.html"},{revision:"9bd4c03376c184fde740d28144aac3f1",url:"./logs/index.html"},{revision:"a6b8b3fb4f552c2bdc9626dba7b79d5e",url:"./messageboard/index.html"},{revision:"c1b023882f442a458c46a05968ff40c2",url:"./music/index.html"},{revision:"04caac8b63be3dc9d132fbc38a1069cc",url:"./page/10/index.html"},{revision:"008c23b4472898064713035b89439b41",url:"./page/11/index.html"},{revision:"298932289e836ef34430cedb1df3009f",url:"./page/12/index.html"},{revision:"93b9aeac67768b5d5be4851129041686",url:"./page/2/index.html"},{revision:"ff24d1a30920b199a94673bf3c7de07a",url:"./page/3/index.html"},{revision:"5e00741c30ffd27be58a6f88219472ec",url:"./page/4/index.html"},{revision:"f5847b4469bc8f727e5b3bc288e532f6",url:"./page/5/index.html"},{revision:"fa60203d525c06f3b0f133241d8ea4e5",url:"./page/6/index.html"},{revision:"aa2820d0e997822fbc2bcf2102323874",url:"./page/7/index.html"},{revision:"91670de09dc898cc0dbd0d28953eefd4",url:"./page/8/index.html"},{revision:"997550370f1cc425c332be68455e0390",url:"./page/9/index.html"},{revision:"92be32f25b12342efada6ba000f1e578",url:"./posts/1005838445/index.html"},{revision:"1df4e95d3560c1bc778a4cb649ee183b",url:"./posts/1104683778/index.html"},{revision:"59236a5bd6c20a10da15cfa7c6560918",url:"./posts/1175849155/index.html"},{revision:"bf681ed733b3a09ff4dd3280c8543d69",url:"./posts/13005592/index.html"},{revision:"2a36ac6e12e51b4111235eeae36d9692",url:"./posts/1330258666/index.html"},{revision:"0c04e02689ec2473eea1d708097d8573",url:"./posts/1339733598/index.html"},{revision:"44cfda3d1706d734602a6c3b29ea1fb6",url:"./posts/1393401608/index.html"},{revision:"2d8df421bab4b31840eed7131a989cdb",url:"./posts/1519064184/index.html"},{revision:"66896a27b8cf8a00af17c7d5d2356e21",url:"./posts/1520998390/index.html"},{revision:"d047559324cb5d35e23a80d04e6d90ee",url:"./posts/1550900565/index.html"},{revision:"6562270e3474bdd46fb1c35631151299",url:"./posts/1566646582/index.html"},{revision:"b60685873dbda8c3b5dd232b60466ed1",url:"./posts/1574967654/index.html"},{revision:"334614d43625b1419ef4ec991f258183",url:"./posts/15f4985b/index.html"},{revision:"adbc4343375a17ac0b14957e14798a97",url:"./posts/1634411798/index.html"},{revision:"8de1381b1bd0508d812944276348e267",url:"./posts/1677637013/index.html"},{revision:"3ea1822241f1b7c15f9d400a85000c0f",url:"./posts/1738458658/index.html"},{revision:"387533038aca247dee57e5f446747974",url:"./posts/1762820479/index.html"},{revision:"7b90bd7e5b5350dfdf6bbddab082b688",url:"./posts/1872245415/index.html"},{revision:"c15344450cb154c23a917896382572a3",url:"./posts/1905208898/index.html"},{revision:"1c3662eda1bcecc8b744ddd1fa4c78a8",url:"./posts/1b6f740d/index.html"},{revision:"d34c231b80c6761b6fd68803ac9bd64d",url:"./posts/1c9cc24c/index.html"},{revision:"f10acc5e48307c00cbae7b22e5d324fc",url:"./posts/1dfa6edf/index.html"},{revision:"328f54de9cad83cdf33fd37f9233fb26",url:"./posts/2068565369/index.html"},{revision:"1b039d0b3fba8a3be13e936d44e10c9d",url:"./posts/2068909584/index.html"},{revision:"df1f396ec7221cf88e66c0baec273b05",url:"./posts/2086819267/index.html"},{revision:"bfcbedfd9c22332193d9dba686249f09",url:"./posts/2120368839/index.html"},{revision:"d89dc512ae211382fa6116ebc90980fd",url:"./posts/2130149512/index.html"},{revision:"e8a4be002dcfe6d3a82a52f86e68ff2b",url:"./posts/2164673978/index.html"},{revision:"76dfc86455591aad4801c0545272285b",url:"./posts/2187905911/index.html"},{revision:"9add19105d59b18b29269b52e8024d75",url:"./posts/2243339053/index.html"},{revision:"781b278ed3ca0f09a0d25eabd460c2fb",url:"./posts/272460835/index.html"},{revision:"c391a761fb2631c59f3d4722848f9fe9",url:"./posts/2761314235/index.html"},{revision:"b4dbb6663eabd944cfd363dbfda9de1d",url:"./posts/2781775372/index.html"},{revision:"5b0fe716db0a88574e3edad2de38a7b7",url:"./posts/2817363972/index.html"},{revision:"88c0db3d227fc3ed58fec9e6037e5d74",url:"./posts/2909614374/index.html"},{revision:"846660a76d34ad53a996bcfafc83d473",url:"./posts/2922948377/index.html"},{revision:"2edc795c1fb73bddb067de8f4a48def5",url:"./posts/2968822672/index.html"},{revision:"1f56862ac7902bd82ae7f50c0dcd3c48",url:"./posts/2dd14627/index.html"},{revision:"384f17f2a45853afc6bb1095ebf77386",url:"./posts/315616543/index.html"},{revision:"09da55bc31ea38a3cf155bd0d835a3c4",url:"./posts/325844318/index.html"},{revision:"4ea134008d4828628a36956f5ba4aa78",url:"./posts/328351179/index.html"},{revision:"3afe8b48df425bb5f70ef7ea5f73ed2d",url:"./posts/3305917059/index.html"},{revision:"f1afa7267caed6dcda7a6909a06768b3",url:"./posts/3528046541/index.html"},{revision:"3afb8ee29494f5488abdd47e30091086",url:"./posts/3554798849/index.html"},{revision:"7e169f9d37b9fccf9197f136bfdf625f",url:"./posts/3556927238/index.html"},{revision:"a035e70dcaaa52a5e771d8f11cce55cf",url:"./posts/3661501281/index.html"},{revision:"43481e95307c76ba18e6c1bc76371f78",url:"./posts/368886813/index.html"},{revision:"3971f5f6a31ffb7ac8afab446521a527",url:"./posts/3830795892/index.html"},{revision:"72ad0ba82063421c014bb89189fa5b1c",url:"./posts/3862476156/index.html"},{revision:"3ffedfa914fc01f02f69953e9501d6cf",url:"./posts/3895825257/index.html"},{revision:"ab8deb97451493876d830cb3b03227f4",url:"./posts/3956353174/index.html"},{revision:"94158332d3410de9370a6b7677fa52e6",url:"./posts/3979597380/index.html"},{revision:"9786975cbce642078806c3530409aa29",url:"./posts/3991296734/index.html"},{revision:"0968be173c5b9ea10b77abbaf45c7152",url:"./posts/3994269159/index.html"},{revision:"0d4ba7a08c6a620579a140fc927316c5",url:"./posts/3b74a348/index.html"},{revision:"403a7a42656e531cae864245d1708473",url:"./posts/3d7d679f/index.html"},{revision:"35aa784b5fadfaf3c63c9394a40cb5be",url:"./posts/4004677012/index.html"},{revision:"9b011995e28f0d7269076fecb5186baa",url:"./posts/4019007238/index.html"},{revision:"85e9aff7224115300e22de479059db95",url:"./posts/4146242720/index.html"},{revision:"b00aad4249803d8cb52f3ad56fc0acc8",url:"./posts/41be370a/index.html"},{revision:"e2b18b00038d376c3aa08a45598cc3be",url:"./posts/4226784210/index.html"},{revision:"5ea3ec110bb1d4e9ff91e9194280b7f8",url:"./posts/427140827/index.html"},{revision:"5fdd895d7ecd4a800a374d99301491f9",url:"./posts/4754ce91/index.html"},{revision:"5b0826e797964653d937c01972bacbbb",url:"./posts/50bb6649/index.html"},{revision:"b6a897499c0d8e45d4d196752ead6b8e",url:"./posts/518000799/index.html"},{revision:"8369a5b4606f2e1e0ff972412a448835",url:"./posts/5d2bcff8/index.html"},{revision:"41cd0eded892bc2440664b665786dc53",url:"./posts/5f5e4ccc/index.html"},{revision:"95b18e61567576b82aa3ae8fcca38264",url:"./posts/6082eda2/index.html"},{revision:"0b206b29daf794dc7c12df42a9c411b6",url:"./posts/622eb062/index.html"},{revision:"970dfe3e87863dce3805c7fa945ae845",url:"./posts/658751968/index.html"},{revision:"639592500deab27105c09a08e6641f15",url:"./posts/6b30c31b/index.html"},{revision:"6a5842cb69f592d2c8514bb9e9d49507",url:"./posts/71d58e27/index.html"},{revision:"24b5e289a6a3bf003337162b94eb5ed7",url:"./posts/726828229/index.html"},{revision:"3ca6fd5cc398840e1c587d46ebffbb52",url:"./posts/72f33496/index.html"},{revision:"684747a72b49b0e17f8fcc7200ee4cb4",url:"./posts/764a0b3/index.html"},{revision:"8aac693aedc1168d0264b6e07882a46e",url:"./posts/771027640/index.html"},{revision:"821488e73fedcf70765aeac390b768fe",url:"./posts/7a197d31/index.html"},{revision:"4e0943267f59a34af2cebbd78bb37fd4",url:"./posts/7d1c5899/index.html"},{revision:"b060d198d2a514bdf8c3763526f31666",url:"./posts/80f09d1c/index.html"},{revision:"c39dfe98342c38364809c9892f8ef316",url:"./posts/816104377/index.html"},{revision:"45556d7fa377577fb13e9b785cd8a4a2",url:"./posts/838d68a0/index.html"},{revision:"d51798a8f88d8164798d615f6f58afd1",url:"./posts/84460557/index.html"},{revision:"3b5a4ad3d4eb70ab97a45257837bc386",url:"./posts/850137752/index.html"},{revision:"3883e720303b171cc330cc2169cc1de0",url:"./posts/864013447/index.html"},{revision:"5292c764d3ffb426b128d0be298c3596",url:"./posts/865268903/index.html"},{revision:"091d715dffadd214c5dd280d03b719e0",url:"./posts/872766944/index.html"},{revision:"723c2ffd7ba89cb108baf95bd32092bd",url:"./posts/8bf03f92/index.html"},{revision:"79baae029a34be1476287e8e746c4ff0",url:"./posts/9103988a/index.html"},{revision:"2aa06201c8dca7de56250e0907b51515",url:"./posts/91ec6c75/index.html"},{revision:"62243066c61102512efc26c47119b2ae",url:"./posts/949df4a0/index.html"},{revision:"9cba6926edbbde94810e72735f105acc",url:"./posts/96e5960a/index.html"},{revision:"02e7988fc353278c0c83afb82e221137",url:"./posts/a2af08b2/index.html"},{revision:"5d469ef5ec5f4d776aaa4b799b2c33fd",url:"./posts/a66c836/index.html"},{revision:"cb4d34c458fe09652c9113bc51ae4548",url:"./posts/a868dd1/index.html"},{revision:"9c1a89a45a67a83a85eb4d1985d0ca79",url:"./posts/a8da4fb0/index.html"},{revision:"7484dbcd9dcfdeec159d910e89053c55",url:"./posts/abb0658c/index.html"},{revision:"d0556ab8da96e1aab19eececd44cd5b1",url:"./posts/b41f8f0d/index.html"},{revision:"735c1da5853b5fa08e015bc4eaa5c1a0",url:"./posts/b543ced0/index.html"},{revision:"f2068bff4bd5d83d498f65199fdcbe18",url:"./posts/b700ce00/index.html"},{revision:"d7f83f071e393269e8de446a1903eea1",url:"./posts/b95a7f8d/index.html"},{revision:"a8fb6524946cb594dec4202b47634029",url:"./posts/bff0911c/index.html"},{revision:"8e56e1f9ede4673032ae7bf029f80968",url:"./posts/c069b45e/index.html"},{revision:"aedc9db46486995f63390f510274028b",url:"./posts/c8221b76/index.html"},{revision:"e12dc83f8635c6e68fdd227e68ded172",url:"./posts/c84e54f/index.html"},{revision:"92d6bf32443ee217a5e9936fb780732b",url:"./posts/caa6f64f/index.html"},{revision:"2c887c8f4aa92cb84b22737f9f77d410",url:"./posts/d461a50b/index.html"},{revision:"fc5c8b6902adc5569f6f0340b835a93a",url:"./posts/de6b4930/index.html"},{revision:"f20ea74d9904742d3335c7050abe87b2",url:"./posts/df2899b1/index.html"},{revision:"df16750ffaf9b472630dc3a8d3dfbb8a",url:"./posts/dfb9e877/index.html"},{revision:"b6bab695489aad6f46a9921c2746f850",url:"./posts/e403c9e7/index.html"},{revision:"76d50876e2b8c91f225c8d8a167f6b41",url:"./posts/e63bc92f/index.html"},{revision:"0d6f180f9e2d7c8f6d5b35e2eb94e18e",url:"./posts/ed909786/index.html"},{revision:"9aced0b52fdc7858600b367959872fef",url:"./posts/f1d1d958/index.html"},{revision:"2f2aa3fc94a08f41819a9cd8d8006179",url:"./posts/f1fcc865/index.html"},{revision:"8d9f0abaa88405f84a967fce7376e252",url:"./posts/f347fc6a/index.html"},{revision:"b28560f3a2e9ea30aa274cec8094870e",url:"./posts/f5810d24/index.html"},{revision:"4347844f44f45a6aefa276aaeb549f32",url:"./posts/fcc1ff03/index.html"},{revision:"b97d2e606f79b246c292be34951d58e5",url:"./posts/fe52487d/index.html"},{revision:"57c3476b17436bc97df5949b580b5b60",url:"./tags/Bug/index.html"},{revision:"d96295fb4b4fac1db0bed7e9d5ad11f4",url:"./tags/Canal/index.html"},{revision:"a1142649eb88b148db176a0532eb8146",url:"./tags/CentOS-7/index.html"},{revision:"eb647dd51203815b1104ecbf9226b8f8",url:"./tags/Docker/index.html"},{revision:"85dfefcfafb104a25cc2678af09ca59b",url:"./tags/GitHub/index.html"},{revision:"3f9d6710d8afa6a3d9af603ad850483a",url:"./tags/index.html"},{revision:"42db196a765685e52ba4f3701057ff86",url:"./tags/Java/index.html"},{revision:"6a8b52d13bd6534706d6aa92d559f6fd",url:"./tags/Java/page/2/index.html"},{revision:"0ecdb3201609ee53d25fb1a9b6a2443d",url:"./tags/javascript基础/index.html"},{revision:"3e9cce6242d9ab216bdc2a4de386d1c2",url:"./tags/javaScript基础/index.html"},{revision:"e9db63b5a1e50f6650dafb764cda088b",url:"./tags/JavaScript高级/index.html"},{revision:"e41a95cb588b1020a2b43248a659540a",url:"./tags/Java算法/index.html"},{revision:"cacd9fb035d2dd53ea90637d4bd12169",url:"./tags/Java设计模式/index.html"},{revision:"618e407ef244f7b0281a45f15825881e",url:"./tags/java项目/index.html"},{revision:"6340ac5915cd41e1970b34c6e4ca7120",url:"./tags/Java项目/index.html"},{revision:"9d1e47b5fe82b8f2a1f440753d552811",url:"./tags/JDBC数据连接池/index.html"},{revision:"317cd4fb86e248e7971401b0f8d58381",url:"./tags/Jenkins/index.html"},{revision:"f26c29465508a6df4f3265b2da6586b5",url:"./tags/jQuery/index.html"},{revision:"014dbde81bf3a667feb2fdb5699e0c53",url:"./tags/layui/index.html"},{revision:"03999047872ebc18a99c98b4e66ed8d2",url:"./tags/Maven/index.html"},{revision:"bf33d3ea09b21de379925c76dd34d91e",url:"./tags/Mybatis/index.html"},{revision:"016688af0402cc96a058b2480c474d76",url:"./tags/MySQL/index.html"},{revision:"09d904e3c4bc93c0965e70f994bcfe85",url:"./tags/Node/index.html"},{revision:"faef8518d5cd489c5b811fe84d5902df",url:"./tags/OSS/index.html"},{revision:"389c56e67dbfba523a83485a1e348abc",url:"./tags/Other/index.html"},{revision:"e44351c1124dd9f294200c1dde96cb0b",url:"./tags/Redis/index.html"},{revision:"a925e555be83384b4d0aae47c323304d",url:"./tags/Spring/index.html"},{revision:"c11129ba56dc708de71c972d612b3a92",url:"./tags/SpringBoot/index.html"},{revision:"a8405f9a2c2ede52369177bdbdd46dc1",url:"./tags/SpringCloud/index.html"},{revision:"7ea2a5981aa0684085b32ffa5ed042e4",url:"./tags/SpringMVC/index.html"},{revision:"1ba0b402691c1b4e3a28c19138105e9d",url:"./tags/VerCel/index.html"},{revision:"7621cb77faf33a2c09fe43bf3a819c30",url:"./tags/VPS/index.html"},{revision:"3f267a46b5f6706b1d605a138d49ba35",url:"./tags/VsCode/index.html"},{revision:"f5d9ad0b86d05134af0ca1bd4127afe9",url:"./tags/Vue/index.html"},{revision:"b0b733359aa3376522ebdd2cf9083ca1",url:"./tags/阿里云/index.html"},{revision:"f9550a0a38e07975fb9b54c0df370ce8",url:"./tools/css/bb.css"},{revision:"69e24ad38457a2ced31cbde19a566bd2",url:"./tools/css/commentsbar.css"},{revision:"c0035e83d22e8ab118b1bdd21c182e1e",url:"./tools/css/friend.min.css"},{revision:"f7f5815747f181f33d671fabb84a191d",url:"./tools/css/icofont.css"},{revision:"4b8c0ea28cb2ecd76d9183a7389bbcb6",url:"./tools/css/notetag.css"},{revision:"9bba4037d37319dc47488db38b2ecc80",url:"./tools/css/oy.css"},{revision:"c2beb79e7f957c7002a926e620fcde38",url:"./tools/css/oyindex.css"},{revision:"725ffb89cdfee2ac582076db960e2dcc",url:"./tools/js/index.js"},{revision:"dc5e7f18c8d36ac1d3d4753a87c98d0a",url:"./tools/js/jquery.min.js"},{revision:"967f97416bf8e4ae0c2711a7a66af737",url:"./tools/js/jsdelivr-auto-fallback.js"},{revision:"dd038ad08596036a528554ad75689061",url:"./tools/js/oy.js"},{revision:"2f6ed1d4f664e913afb75553dee28fe2",url:"./tools/js/wow_init.js"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();