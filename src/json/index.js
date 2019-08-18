const logo = require('responsive-loader?name=./img/[hash].&sizes[]=300!img/logoWhite.png');
const whyUsImage = require('responsive-loader?name=./img/[hash].&sizes[]=700!img/whyUs.jpg');
const beachImage = require('responsive-loader?name=./img/[hash].&sizes[]=1300!img/beach.jpg');
const logoWhite = require('responsive-loader?name=./img/logo-mail.&sizes[]=1300!img/logo-mail.png');

const info = {
  navbar: [
    {
      title: 'Who we are',
      id: 'about',
    },
    {
      title: 'Why Us',
      id: 'whyus',
    },
    {
      title: 'Testimonials',
      id: 'testimonials',
    },
    {
      title: 'Getting Started',
      id: 'gettingStarted',
    },
    {
      title: 'Contact',
      id: 'contact',
    },
    {
      title: 'FAQ',
      id: 'faq',
    },
  ],
  beachImage: () => beachImage.src,
  about: {
    logo,
    getAvatar: `<svg width="74px" height="41px" viewBox="0 0 74 41" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g id="DN---FINAL-002" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="DN---Tablet" transform="translate(-33.000000, -23.000000)" fill="#FEFEFE">
                                <g id="Nav-" transform="translate(2.000000, 0.000000)">
                                    <g id="Logo" transform="translate(31.000000, 23.000000)">
                                        <path d="M13.749059,30.9836374 C13.6532114,30.2172372 13.6052876,28.5079103 13.6052876,25.854204 L13.6052876,7.9117206 C14.6039352,7.84416114 15.5898971,7.81219753 16.5638781,7.81219753 C18.5872495,7.81219753 20.2476686,8.01197011 21.5402019,8.41660039 C22.8341448,8.81832489 24.0132114,9.57673424 25.0752876,10.6940078 C26.1380686,11.809102 26.9562971,13.2590877 27.52504,15.0410591 C28.0937829,16.8230305 28.380621,18.8490877 28.380621,21.1206836 C28.380621,24.0380897 27.8901067,26.4389929 26.9104876,28.3197609 C25.9308686,30.2012554 24.7109257,31.4609123 23.2499543,32.1030903 C21.7903924,32.7423626 19.9270019,33.0634516 17.6597829,33.0634516 C16.1086019,33.0634516 15.0937448,32.9065393 14.6138019,32.5977999 C14.133859,32.2868811 13.8456114,31.7478583 13.749059,30.9836374 M22.0398781,33.7862651 C23.2309257,33.647514 24.4896305,33.2966407 25.8152876,32.736551 C27.1409448,32.174282 28.3052114,31.3563041 29.3123162,30.2804379 C30.319421,29.2031189 31.1087543,27.8504769 31.6845448,26.2203327 C32.2617448,24.5887355 32.5499924,22.7907823 32.5499924,20.8242937 C32.5499924,18.1030279 32.021421,15.7043041 30.9649829,13.6252164 C29.90784,11.5454022 28.2981638,9.89782326 26.1317257,8.68393242 C23.9666971,7.46786225 20.951021,6.86128005 17.0825829,6.86128005 C15.8400876,6.86128005 13.432621,6.95281222 9.85877333,7.13878233 L5.57382095,7.35671605 L5.57382095,8.26767901 L6.34201143,8.26767901 C7.66203048,8.26767901 8.51549714,8.38245744 8.90804952,8.61492008 C9.29989714,8.84375049 9.55361143,9.27380637 9.67624,9.90145549 C9.79957333,10.5276517 9.85877333,11.9122573 9.85877333,14.0509136 L9.85877333,27.0034412 C9.85877333,29.2467057 9.79957333,30.6770773 9.67624,31.290924 C9.55361143,31.9047706 9.28016381,32.3558934 8.85025905,32.6471982 C8.41964952,32.9363236 7.64934476,33.0830656 6.53511619,33.0830656 L5.45824,33.0830656 L5.45824,33.9940286 L17.0057638,33.9940286 C19.1707924,33.9940286 20.8488305,33.9242898 22.0398781,33.7862651" id="Fill-1"></path>
                                        <g id="Group-5" transform="translate(0.000000, 0.150374)">
                                            <path d="M69.1616686,9.18714139 C68.5083543,9.18714139 67.8959162,9.37093216 67.325059,9.74141949 C66.7563162,10.1097275 66.3679924,10.5833701 66.1643162,11.1572622 C65.9592305,11.7318808 65.8577448,12.5658405 65.8577448,13.6627736 L65.8577448,34.2793038 L63.397421,34.2793038 L46.5092114,14.6333051 L46.5092114,26.9712596 C46.5092114,28.9522772 46.8573638,30.2250101 47.5543733,30.7938172 C48.2534971,31.3597184 49.1471352,31.6452116 50.2366971,31.6452116 L50.2366971,33.8434364 L40.457421,33.8434364 L40.457421,31.6452116 C41.2883352,31.6452116 42.0135352,31.4374481 42.6280876,31.0219211 C43.2433448,30.6056677 43.6323733,30.1225813 43.8008114,29.5755676 C43.9657257,29.0271011 44.0495924,28.1655365 44.0495924,26.9916001 L44.0495924,13.2864747 C44.0495924,10.5535858 42.8063924,9.18714139 40.3221067,9.18714139 L40.3221067,6.98891657 L49.1217638,6.98891657 L63.397421,23.4269309 L63.397421,13.583591 C63.397421,10.6523825 62.198621,9.18714139 59.8052495,9.18714139 L59.8052495,6.98891657 L69.1616686,6.98891657 L69.1616686,9.18714139 Z M36.7982971,2.14134412 L36.7982971,39.2285787 L1.40938286,39.2285787 L1.40938286,2.02874503 L36.8201448,2.02874503 C36.8081638,2.06434087 36.7982971,2.1013896 36.7982971,2.14134412 L36.7982971,2.14134412 Z M1.01401143,0.575853541 C0.455135238,0.575853541 -0.000140952381,1.04513749 -0.000140952381,1.62193541 L-0.000140952381,39.6353883 C-0.000140952381,40.2121862 0.455135238,40.6814702 1.01401143,40.6814702 L72.5825829,40.6814702 C73.1421638,40.6814702 73.59744,40.2121862 73.59744,39.6353883 L73.59744,1.62193541 C73.59744,1.04513749 73.1421638,0.575853541 72.5825829,0.575853541 L1.01401143,0.575853541 Z" id="Fill-3"></path>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
        `,
    getAvatarBigger: `<svg width="126px" height="85px" viewBox="0 0 159 85" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <g id="DN---FINAL-002" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="DN---Tablet" transform="translate(-54.000000, -8959.000000)" fill="#FFFFFF">
                                    <g id="Footer---banner" transform="translate(-3.000000, 8718.000000)">
                                        <g id="Group-9" transform="translate(57.000000, 241.000000)">
                                            <g id="Page-1">
                                                <path d="M3.03100775,81.4450371 L155.231547,81.4450371 L155.231547,3.06144068 L3.03100775,3.06144068 L3.03100775,81.4450371 Z M156.080229,84.5064778 L2.18081008,84.5064778 C0.979015504,84.5064778 0,83.5176324 0,82.3022405 L0,2.20270657 C0,0.987314619 0.979015504,0 2.18081008,0 L156.080229,0 C157.283539,0 158.262554,0.987314619 158.262554,2.20270657 L158.262554,82.3022405 C158.262554,83.5176324 157.283539,84.5064778 156.080229,84.5064778 L156.080229,84.5064778 Z" id="Fill-40"></path>
                                                <path d="M29.2566508,15.1394364 L29.2566508,52.9482288 C29.2566508,58.5399502 29.359705,62.1417352 29.5658136,63.7566451 C29.7734376,65.3669629 30.3932787,66.5027574 31.4268523,67.156375 C32.4589105,67.8084619 34.641236,68.1375667 37.9738291,68.1375667 C42.8507205,68.1375667 46.8561973,67.4625191 49.9978368,66.1139544 C53.1379609,64.7623284 55.7597826,62.1080593 57.8678484,58.1434936 C59.9759143,54.178928 61.0291895,49.121428 61.0291895,42.9740551 C61.0291895,38.1874926 60.413895,33.9183136 59.1908833,30.1619258 C57.9663562,26.4070689 56.2068562,23.3517511 53.9214764,21.0036261 C51.637612,18.6493782 49.1006585,17.0513061 46.3212244,16.2032871 C43.5402748,15.3522066 39.9697477,14.9312585 35.618736,14.9312585 C33.5243097,14.9312585 31.4056353,14.9986102 29.2566508,15.1394364 L29.2566508,15.1394364 Z M11.9859686,13.9714968 L21.2002322,13.5122807 C28.8853523,13.1204163 34.0623136,12.9275456 36.7356624,12.9275456 C45.0527477,12.9275456 51.5375888,14.205697 56.1947322,16.7665922 C60.8518756,19.3259566 64.3132864,22.7976303 66.5865422,27.1785519 C68.8582826,31.5610042 69.9949105,36.6139121 69.9949105,42.3479905 C69.9949105,46.4916504 69.3750694,50.281714 68.1338717,53.7197119 C66.895705,57.1546483 65.1983407,60.0048496 63.0326857,62.2749078 C60.8670306,64.5403739 58.3634182,66.263965 55.5127554,67.4487426 C52.6620926,68.6304587 49.9554027,69.3697966 47.3942012,69.6606335 C44.8329996,69.9530011 41.2245849,70.0999502 36.568957,70.0999502 L11.737426,70.0999502 L11.737426,68.1788962 L14.0531159,68.1788962 C16.4491275,68.1788962 18.1055733,67.8712214 19.0315461,67.2619947 C19.9560035,66.6481758 20.5425035,65.6960678 20.8077167,64.4026091 C21.0729298,63.1091504 21.2002322,60.0966928 21.2002322,55.3682977 L21.2002322,28.0770847 C21.2002322,23.5691133 21.0729298,20.6530911 20.8077167,19.3336102 C20.5425035,18.0110678 19.9984376,17.1048814 19.1543019,16.6211737 C18.3116818,16.1328739 16.4764066,15.8910201 13.6393833,15.8910201 L11.9859686,15.8910201 L11.9859686,13.9714968 Z" id="Fill-42"></path>
                                                <path d="M148.723973,18.1440874 C147.319101,18.1440874 146.000612,18.5328904 144.77457,19.3135577 C143.551558,20.0896329 142.716516,21.0861319 142.278535,22.2969317 C141.836008,23.5062007 141.617775,25.2634677 141.617775,27.5763861 L141.617775,71.0182293 L136.328667,71.0182293 L100.011132,29.6214285 L100.011132,55.6191827 C100.011132,59.7919264 100.761306,62.4752791 102.26014,63.6723024 C103.763519,64.8662643 105.685178,65.4678374 108.026632,65.4678374 L108.026632,70.0997971 L86.9990155,70.0997971 L86.9990155,65.4678374 C88.7873101,65.4678374 90.3452481,65.0285207 91.6667674,64.1529486 C92.9898023,63.2758459 93.8263605,62.2579168 94.1870504,61.1068151 C94.5416783,59.9511213 94.7235388,58.1341563 94.7235388,55.6605122 L94.7235388,26.783473 C94.7235388,21.0233724 92.0501899,18.1440874 86.7080388,18.1440874 L86.7080388,13.5121276 L105.63062,13.5121276 L136.328667,48.1492675 L136.328667,27.4080069 C136.328667,21.233081 133.750795,18.1440874 128.604143,18.1440874 L128.604143,13.5121276 L148.723973,13.5121276 L148.723973,18.1440874 Z M156.080229,2.6256446 L79.7973411,2.6256446 C79.4290736,2.6256446 79.1305194,2.9271965 79.1305194,3.29763083 L79.1305194,82.3026997 C79.1305194,82.6746647 79.4290736,82.9762166 79.7973411,82.9762166 L156.080229,82.9762166 C156.450012,82.9762166 156.74705,82.6746647 156.74705,82.3026997 L156.74705,3.29763083 C156.74705,2.9271965 156.450012,2.6256446 156.080229,2.6256446 L156.080229,2.6256446 Z" id="Fill-43"></path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
        `,
    name: 'Divorce Negotiations',
    nameHTML: 'Divorce <br />Negotiations',
    description: `Divorce Negotiations aims to provide couples who have decided to split with an affordable, valuable and sensible methodology to settle property and financial matters without undertaking expensive and lengthy legal engagements.  Discussions can also extend to custody matters.
        <br /><br />The legal profession has created an entire industry out of divorce.  When considering divorces which fall into the ‘Simple profile’, the legal profession knows all the answers (i.e.: what the split should be??) but no one will tell you until the very end and of course by this time you have spent over $150K each.
        <br /><br />It seems to be a process where everyone (lawyers & mediators etc.) take your money along the journey while ‘trying to help you settle’ however when you ask a direct question about the percentage split the common answer is:-“….only the judge can tell you.”  Of course by the time you get to the judge you have spent 4+ years in the system and spent over $150k each with the lawyers and mediators all taking their piece.
        <br /><br />Divorce Negotiations concentrates on cases that fall into the ‘Simple profile’ and by doing this we believe we can help free up the lawyers to focus on the cases that need their skills; namely cases which fall into the Complicated and/or Volatile profiles.
        <br /><br />Having spoken to many people who have divorced using lawyers and attended court they were very disappointment with their decision to engaged lawyers and/or proceed to court.  None of them believe it was value for money and all of them were highly critical of the process.
        <br /><br />We have more than 20 years’ negotiating experience and truly understand the emotional drain divorce can place on individuals.  We will take time to outline the alternative paths and we believe once people understand what the lawyer/court process involves they will be very eager to reach an agreement.
        <br /><br />It is very important to understand that we are not lawyers and do not offer any legal advice but that is our competitive advantage because we are focused on getting an immediate result rather than dragging the process out for years.
        <br /><br />Think of Divorce Negotiations as the Uber of the divorce industry.  For 40 years the legal profession has controlled all the answers and the process.  Divorce Negotiations is empowering people to arrive at a successful outcome without the expense and the pain that has been felt by people who proceed to court.
        <br /><br />Put simply, we help people understand the opportunity cost of delay. We believe a high percentages of <b>divorces fall into the following profiles:</b> `,
    profiles: [
      {
        title: 'Simple',
        description:
          'Mum, dad, kids, cars, property and superannuation (non-complicated asset portfolio)',
        icon: `<svg width="42px" height="42px" viewBox="0 0 42 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g id="DN---FINAL-002" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="DN---Tablet" transform="translate(-234.000000, -2633.000000)">
                                <g id="Divorce-profiles" transform="translate(0.000000, 2500.000000)">
                                    <g id="Simple" transform="translate(235.000000, 114.000000)">
                                        <g id="Number" transform="translate(0.000000, 20.000000)">
                                            <circle id="Oval" stroke="#FCC60A" stroke-width="2" cx="20" cy="20" r="20"></circle>
                                            <g id="Group-4" transform="translate(19.598868, 19.797174) rotate(37.000000) translate(-19.598868, -19.797174) translate(12.098868, 5.297174)" fill="#FCC60A">
                                                <polygon id="Rectangle-12" points="0.641514722 22.5212591 14.2176824 23.0799775 14.2176824 28.0799775 0.641514722 27.5212591"></polygon>
                                                <polygon id="Rectangle-12" transform="translate(11.688710, 13.631934) rotate(-90.000000) translate(-11.688710, -13.631934) " points="-1.81071304 10.9614266 25.188134 11.302441 25.188134 16.302441 -1.81071304 15.9614266"></polygon>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>`,
      },
      {
        title: 'Volatile',
        description: 'Where there is domestic violence or child abuse',
        icon: `<svg width="42px" height="42px" viewBox="0 0 42 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g id="DN---FINAL-002" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="DN---Desktop-" transform="translate(-590.000000, -2614.000000)">
                            <g id="Divorce-Profiles" transform="translate(-11.000000, 2481.000000)">
                                <g id="Group-4">
                                    <g id="2" transform="translate(602.000000, 134.000000)">
                                        <g id="noun_2318_cc">
                                            <g id="icon">
                                                <path d="M16.1297388,3 C16.1297388,3 21.3573513,6.69273241 16.1297388,14.2793948 C11.4056488,21.1352626 8.58571204,28.41361 13.8009919,33.8491148 C15.3119114,35.4241638 17.1036618,36.2257827 18.9341718,36.415 C15.9743481,35.5513657 13.7692795,32.5989416 16.339393,27.3181228 C17.9200798,24.0700687 21.8566453,20.2452013 20.5458663,15.7399268 C20.5458663,15.7399268 24.0895504,20.2039752 21.676237,27.0073414 C20.5800452,30.0975382 25.4109003,30.4350991 24.1022354,27.0616048 C23.3108349,25.0232024 27.8379557,31.1126873 25.3999771,34.6310015 C27.7005353,33.0411534 28.9457754,30.4245283 29.8590924,27.6303138 C32.4499952,19.7078524 29.0405602,6.92881359 16.1297388,3 Z" id="Shape" fill="#6A89A7" fill-rule="nonzero"></path>
                                                <path d="M6.5,33.5 L34.0045451,5.99545492" id="Line" stroke="#D0011B" stroke-width="2" stroke-linecap="square"></path>
                                                <g id="Number" stroke-width="2" stroke="#D0011B">
                                                    <circle id="Oval" cx="20" cy="20" r="20"></circle>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>`,
      },
      {
        title: 'Complicated',
        description: 'Families who have operating companies and/or a complicated asset portfolio.',
        icon: `<svg width="42px" height="42px" viewBox="0 0 42 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g id="DN---FINAL-002" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="DN---Desktop-" transform="translate(-928.000000, -2614.000000)">
                            <g id="Divorce-Profiles" transform="translate(-11.000000, 2481.000000)">
                                <g id="Group-4">
                                    <g id="3" transform="translate(940.000000, 134.000000)">
                                        <g id="Group-11">
                                            <path d="M19.5136685,19.1184065 C19.4144826,19.1184065 19.2694584,19.1138238 19.160675,19.2231696 C19.0391285,19.3452652 18.9949271,19.5024243 18.996442,19.5911487 C19.0041337,20.094038 18.965333,20.6799305 18.965333,21.2816293 L18.965333,21.7549905 C18.965333,21.8966633 19.174481,22.0976644 19.3175993,22.0976644 L19.6463274,22.0976644 C20.2093317,22.0976644 20.7724627,22.0562269 21.3353997,22.0581186 C22.2118695,22.0607826 23.0843258,22.0419854 23.9657928,22.0381423 C23.9605939,22.480477 23.9611866,22.8934706 23.9617793,23.3220101 C23.9619743,23.5226188 23.9621693,23.6962967 23.9617793,23.8961264 L16.9448391,23.8961264 L16.9448391,21.8831343 C16.9448391,21.7416552 16.8680138,21.7646156 16.7248955,21.7646156 L12.0283047,21.7646156 L12.0283047,12.3726501 L16.7248955,12.3726501 C16.8680138,12.3726501 16.9448391,12.1519721 16.9448391,12.0104266 L16.9448391,9.57445685 C16.9448391,9.43271811 16.8680138,9.24199465 16.7248955,9.24199465 L9.33522853,9.24199465 C9.19211023,9.24199465 9.06491349,9.43271811 9.06491349,9.57445685 L9.06491349,31.5635276 C9.06491349,31.7052004 9.19211023,31.8892883 9.33522853,31.8892883 L19.3175993,31.8892883 C19.4608531,31.8892883 19.5041314,31.7052004 19.5041314,31.5635276 L19.5041314,29.2557357 C19.5041314,29.1141901 19.4608531,28.9584619 19.3175993,28.9584619 L12.0283047,28.9584619 L12.0283047,24.4956134 L13.9814484,24.4956134 L13.9814484,26.6913281 C13.9814484,26.8328737 14.1183841,26.8269518 14.2616978,26.8269518 L26.7720569,26.8269518 C26.9153701,26.8269518 27.0473086,26.8328737 27.0473086,26.6913281 L27.0473086,19.3580142 C27.0473086,19.2191664 26.9278036,19.099349 26.7871829,19.0955454 L19.5136685,19.1184065 Z" id="Shape" fill="#6A89A7" fill-rule="nonzero"></path>
                                            <path d="M28.6001667,12.3726501 L28.7984039,12.3726501 L28.7984039,28.9584616 L21.8457835,28.9584616 C21.7024693,28.9584616 21.7266753,29.1141899 21.7266753,29.2557354 L21.7266753,31.5635274 C21.7266753,31.7052002 21.7024693,31.8892881 21.8457835,31.8892881 L31.5687559,31.8892881 C31.7120711,31.8892881 31.9638441,31.7052002 31.9638441,31.5635274 L31.9638441,9.57445685 C31.9638441,9.43271811 31.7120711,9.24199465 31.5687559,9.24199465 L19.3175993,9.24199465 C19.174481,9.24199465 18.9653331,9.43271811 18.9653331,9.57445685 L18.9653331,9.78625573 C18.9653331,10.4285464 19.0065046,11.1191956 19.0011097,11.7870175 C18.9953239,12.5485394 19.0128149,13.3332881 19.0141349,14.0732818 C19.0064374,14.0730822 19.0105786,14.0939311 19.0026919,14.0939311 C17.9041093,14.0840461 16.8092849,14.1045016 15.7700302,14.1045016 L14.2616979,14.1045016 C14.1183841,14.1045016 13.9814484,14.1767067 13.9814484,14.3184123 L13.9814484,19.3187944 C13.9814484,19.4605 14.1183841,19.3666675 14.2616979,19.3666675 L16.7248955,19.3666675 C16.8680138,19.3666675 16.9448391,19.4605 16.9448391,19.3187944 L16.9448391,17.0353281 L26.7720569,17.0353281 C26.9153702,17.0353281 27.0473087,17.0243377 27.0473087,16.8825926 L27.0473087,14.3184123 C27.0473087,14.1767067 26.9153702,14.1045016 26.7720569,14.1045016 L26.4196483,14.1045016 C25.0635809,14.1045016 23.6852066,14.0849852 22.3520915,14.0897346 L21.9788392,14.1622323 C21.986335,13.51025 22.0315873,12.772308 22.0213912,12.3726501 L28.6001667,12.3726501 L28.6001667,12.3726501 Z" id="Shape" fill="#6A89A7" fill-rule="nonzero"></path>
                                            <g id="Group-10">
                                                <g id="noun_2318_cc" transform="translate(6.000000, 5.000000)"></g>
                                                <circle id="Oval" stroke="#D0011B" stroke-width="2" cx="20" cy="20" r="20"></circle>
                                                <path d="M6.5,33.5 L34.0045451,5.99545492" id="Line" stroke="#D0011B" stroke-width="2" stroke-linecap="square"></path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>`,
      },
    ],
  },
  carousel: {
    items: [
      {
        image: 'carousel1.jpg',
      },
      {
        image: 'carousel2.jpg',
      },
      {
        image: 'carousel3.jpg',
      },
    ],
    description: '"Sometimes when things are falling apart they may actually fall into place"',
  },
  whyUs: {
    getImage: () => {
      const a = whyUsImage;
      delete a.toString;
      delete a.images;
      return a;
    },
    description:
      'The traditional method for trying to settle a divorce is to engage lawyers and go through mediation.  Lawyers by nature are not negotiators but most of us think they are.  Lawyers send letters to each other outlining a position and their instructions.  It’s not until you get into the process that you truly understand how expensive this is.  The person who is sending the letter needs to discuss the contents with their lawyer and this time is chargeable and then you are charged by the page to have the letter typed and sent.  At the receiving end the other person is charged per page to have the letter read and then the same process is followed to have the reply drafted and sent back.  This process is followed back and forth for months and in a lot of cases years.  Then comes mediation. <br/><br/>At some point the lawyers will suggest you attend mediation (I hear you say you thought this was what you paid the lawyer for).  In order to attend mediation the mediator needs an outline of the situation:- assets, liabilities and desired outcomes etc.  This is prepared by the lawyers and at this point you need to start thinking of the time you spend agreeing on the contents and the costs of typing this up in the mediators desired format (no kidding this will be the same information you have already supplied in some form but it now needs to be typed up in a different format – think more money). <br/><br/>Mediators will sit both parties down and talk through what each party wants (having received letters outlining this previously you sit there wondering why you are there because you already know what the other party wants).  The most frustrating part of this is mediators will not make recommendations or tell you the probable outcome of court but will repeat (over and over) what the other party wants as if you are not in the room when they state it).   The mediator can cost in excess of $5,000 and by the time you have paid your individual lawyers to prepare the necessary documents the whole exercise can cost $10K.  The crazy part of this is that if you end up starting court proceedings you will be required to attend mediation numerous times. <br/><br/>The difference we offer is that we are negotiators.  We will identify the gaps and try to close them by making both parties understand the cost of not agreeing.  Often people may only be 5%-10% apart but once you understand the cost of not agreeing this percentage becomes insignificant.<br/><br/>In other words, we help people understand the opportunity costs of delay.',
  },
  testimonials: [
    {
      name: '<br/>Melissa from Castle Hill',
      description:
        'I used a lawyer for 4 years. It was a complete waste of time and money. I wish I had of known about Divorce Negotiations.',
    },
    {
      name: 'Brendan from Pymble',
      description:
        'I had no idea how little power my lawyer had.  No one can make the other person do anything except the Judge at the end.  A complete waste of time.',
    },
    {
      name: 'Casey from Sydney',
      description:
        'I thought my lawyer was on my side.  They were always telling me to fight on right up until the time I told them I had no more money at which point they completely dropped me.  I had to settle for about half of what I was originally offered. A complete waste of money and time.',
    },
    {
      name: 'Kate from Bondi',
      description:
        'My lawyer kept telling me I had a really strong case.  It dragged on for three and half years, cost so much money and when we got to the court day the Barrister (who I had paid up front) told me I needed to settle.   I felt so used.  I wished I had of used Divorce Negotiations.',
    },
  ],
  gettingStarted: {
    description:
      'Firstly, contact our office for an initial discussion which is free.  The aim of the initial call is to determine if we can help you (i.e.: if your desire for a successful outcome outweighs your negative feelings towards your ex-partner then there is a high degree chance of a successful outcome).  If we don’t believe we can help you we have no interest in wasting your time or money and we will explain why. <br/><br/>One of the most common reason why we may not be able to help you is if one of the parties has no interest in settling or they want their day in court.  Don’t despair because in some of these cases it may be an option to come back to us later once some of the emotions have settled down (or when the bank balance has received a significant battering). <br/><br/>If we believe we can help you the next step is to complete a quick form outlining the assets, liabilities and your desired outcome.  One of our team will then have a call with both parties individually and then we can make a decision whether to proceed with a formal negotiation session.  If we decide to proceed an appointment is set and at this point payment will be due. ',
  },
  contact: {
    phone: '+61491061288‬',
    phoneBeautified: '+61 491 061 288‬',
  },
  FAQ: [
    {
      question: 'What is the difference between mediators and Divorce Negotiations?',
      answer:
        'Mediators spend their time repeating nearly verbatim what each party has said to the other party even though everyone was in the same room and heard firsthand what the other person said.  Mediators will not suggest what is or isn’t a good outcome.  Divorce Negotiations will identify the differences and try to bring the parties to a point of agreement.',
    },
    {
      question: 'Why should I use Divorce Negotiations and not a lawyer?',
      answer:
        'The most misunderstood belief in the divorce process is the power of lawyers.  They are not negotiators, they communicate to each other via expensive letters back and forth and they are powerless to get one party to agree with the other.   This does not mean there is not a place for lawyers in the divorce process but if you have a relatively straightforward asset pool then spending money on lawyers is not necessary.  Unlike lawyers we won’t accept every client.  After our initial call, if we believe we can’t help you, we will tell you.',
    },
    {
      question: 'When should I use a lawyer?',
      answer:
        'If you have complicated financial assets, issues of violence or child abuse Divorce Negotiations is not for you.  If you decide to consult a lawyer our advice is to use a Family Court Specialists (lawyers who only work on family court matters).',
    },
  ],
};

// Let webpack compile all carousel images
// and then substitute each avatar on each carousel
// with the hash of the new compiled image
info.carousel.items.map((item, index) => {
  if (item.image) {
    const carouselAvatar = require(`responsive-loader?placeholder=true&name=./img/carousel/[hash].&sizes[]=1200&!img/carousel/${
      item.image
    }`);
    item.image = carouselAvatar;
    info.carousel.items[index] = item;
  }
});

export default info;
