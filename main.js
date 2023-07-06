
let logo = document.getElementById('logoSvg');


const aboutSection = document.getElementsByClassName('about')[0];
  
if (window.innerWidth > 900) {
  aboutSection.style.bottom = logo.clientHeight / 2 + 5 +'px';
}

window.addEventListener('resize', () => {
  logo = document.getElementById('logoSvg');
  
  if (window.innerWidth > 900) {
    aboutSection.style.bottom = (logo.clientHeight / 2 + 5) + 'px';
  } else {
    aboutSection.style.bottom = 'auto'; 
  }
});

let languagesButtons = document.getElementsByClassName('language');
let activeLanguage = document.getElementsByClassName('activeLanguage');



let dateText = document.getElementsByClassName('date')[0];
let aboutText = document.getElementById('aboutText');
let creditsText = document.getElementsByClassName('credits-table')[0];
let logoBlock = document.getElementsByClassName('logo')[0];

let pageText = {
  date: {
    'eng': 'october 16 –<br>november 14',
    'ukr': '16 жовтня –<br>14 листопада'
  },
  about: {
    'eng': "<p class='english-text'>The fifth edition of Kyiv Biennial will be international and will take place in Kyiv, Ivano-Frankivsk, Uzhhorod, Vienna, Warsaw and Berlin.<br><br>In view of the brutal Russian attack on Ukraine, a comprehensive biennial project in Kyiv long seemed deeply uncertain, if not impossible. But, with a cascade of openings – starting in Kyiv and Vienna in October 2023, finishing in Berlin in 2024 – the fifth Kyiv Biennial will take place. This Biennial edition is conceived as a European event, with dispersed exhibitions and public programs in a number of Ukrainian and EU cities, and realized in partnership with leading European institutions in the field of contemporary art.<br><br>Instead of abandoning the project and thus submitting to the logic of war that attacks everything civil, the 2023 Biennial draws upon its founding idea: that of being a multi-centric initiative in a European, interconnected and solidary form. Art institutions in Ukraine (in Kyiv, Ivano-Frankivsk and Uzhhorod) organize presentations and events in their endangered yet working infrastructures. Despite the late start of planning due to the war, museums and exhibition halls in Vienna (the main exhibition spot), Warsaw and Berlin, together with venues in other European cities, have freed up their spaces and platforms for exhibitions and events with Ukrainian and international artists as well as for discursive, performative and educational activities. Together, the institutions have formed a curatorial consortium to jointly create a conceptual framework within which they develop their respective Kyiv Biennial programs.<br><br>How can a country at war address political, social, cultural and societal issues? Today, the experience of artists and cultural workers in Ukraine is profoundly marked by war trauma, displacement, lack of access to basic resources and, in many cases, direct involvement in armed resistance or the experience of life under military occupation. This poses existential challenges for the future of art and cultural production in Ukraine. The upcoming Biennial aims at reintegrating the Ukrainian artistic community, divided and scattered throughout Europe by the war, in order to empower its actors to work and reflect collectively and together with international colleagues on cultural, social and environmental challenges Ukraine is currently facing and to imagine scenarios for an emancipatory future within a global context.<br><br>The Kyiv Biennial strategy, developed in the course of its four previous editions, merges artistic production, critical knowledge and social engagement in the times of emergency, where curatorship goes far beyond its contemporary meaning of an artistic and organizational practice and becomes resignified with its original sense of restoration, rehabilitation and relief, thus suggesting not a biennial, but a perennial long-run international project, a “Kyiv Perennial.”<br><br>Kyiv Biennial 2023 is conceived and organized by the Visual Culture Research Center (Kyiv) together with tranzit.at (Vienna), tranzit.org (Bratislava, Budapest, Bucharest, Cluj, Iași, Prague and Vienna), Museum of Modern Art in Warsaw, Museum Crisis Center (Lviv), Other Edges, Dovzhenko Centre (Kyiv), Asortymentna Kimnata (Ivano-Frankivsk) and Sorry, No Rooms Available (Uzhhorod).</p>",
    'укр': "<p class='ukrainian-text'>П’ята Київська бієнале буде міжнародною і пройде у Києві, Івано-Франківську, Ужгороді, Відні, Варшаві та Берліні.<br><br> В умовах нищівної війни Росії проти України перспектива комплексного втілення бієнале у Києві довго виглядала дуже непевно – чи й зовсім нереалістично. Однак п’ята Київська бієнале відбудеться – її відкриття пройде у низці міст, починаючи з Києва у жовтні 2023-го й закінчуючи Берліном у 2024 році. Цей випуск Київської бієнале задумано як пан’європейську подію з виставками і публічною програмою у містах України та ЄС і реалізовано у партнерстві з провідними інституціями у сфері сучасного мистецтва.<br><br> Як країна у стані війни може вирішувати політичні, соціальні й культурні проблеми? Сьогодні життя митців і працівників культури в Україні позначене травмою війни, переміщенням, відсутністю доступу до базових ресурсів, а часто й прямою участю в збройному опорі чи досвідом життя під військовою окупацією. Як наслідок, мистецьке й культурне виробництво в Україні постало перед екзистенційним викликом. Реінтегрувати українську мистецьку спільноту, розділену та розпорошену по всій Європі через війну та створення для її учасників та учасниць сприятливих умов для колективної міжнародної роботи й осмислення культурних, соціальних, політичних та екологічних проблем, з якими зараз стикається Україна, є метою цьогорічної Бієнале.<br><br> Українські інституції в Києві, Івано-Франківську й Ужгороді та виставкові зали Відня, Варшави й Берліна надали платформи для виставок і подій за участю українських митців та їхніх колег з інших країн, а ще – для дискусій, перформансів і освітніх заходів. Разом ці інституції складають кураторський консорціум, що спільно творить концептуальну основу, у межах якої формуються локальні програми Київської бієнале.<br><br>Стратегія Київської бієнале, розроблена під час чотирьох попередніх випусків проєкту, об’єднує художню діяльність, критичне знання й суспільну заангажованість у часи надзвичайного стану. В такому контексті «кураторство» виходить далеко за межі свого сучасного значення мистецько-організаційної практики й набуває нового cенсу, який водночас повертає нас до початкового смислу кураторства як відновлення та зцілення.<br><br> Задум та організація Київської бієнале 2023: Центр візуальної культури (Київ) спільно з tranzit.at (Відень), tranzit.org (Братислава, Будапешт, Бухарест, Клуж, Ясси, Прага та Відень), Музеєм сучасного мистецтва у Варшаві, Музейним кризовим центром (Львів), проєктом «Other Edges», Довженко-Центром (Київ), галереєю «Асортиментна кімната» (Івано-Франківськ) та резиденцією «Sorry, No Rooms Available» (Ужгород).</p>",
    'de': "<p class='german-text'>Die fünfte Ausgabe der Kyiv-Biennale wird international sein und in Kiew, Iwano-Frankiwsk, Uschhorod, Berlin, Wien und Warschau stattfinden.<br><br>Angesichts des brutalen russischen Angriffs auf die Ukraine schien die Möglichkeit eines umfassenden Biennale-Projekts in Kiew lange Zeit mehr als ungewiss, wenn nicht gar undenkbar. Doch die Kyiv-Biennale 2023 wird stattfinden. Im Oktober startet mit Auftakt in Kiew und Wien eine Serie von Eröffnungen, die 2024 in Berlin endet. Konzipiert ist die Biennale als europäisches Ereignis, das in Zusammenarbeit mit führenden europäischen Institutionen im Bereich der zeitgenössischen Kunst, mit Ausstellungen, Diskursveranstaltungen und öffentlichen Programmen in einer Reihe von ukrainischen und Städten in der EU realisiert wird.<br><br>Anstatt das Projekt aufzugeben und sich damit der Logik des Krieges zu unterwerfen, die alles Zivile angreift, erneuert die Kyiv Biennale ihre Gründungsidee eine multizentrische Initiative in einer europäischen, vernetzten und solidarischen Form zu sein. Kunstinstitutionen in der Ukraine, in Kiew, Iwano-Frankiwsk und Uschhorod organisieren Präsentationen und Veranstaltungen in ihren gefährdeten, aber funktionierenden Infrastrukturen. Museen und Ausstellungshallen in Berlin, Warschau und Wien – als Hauptausstellungsort – sowie in anderen europäischen Städten haben trotz des kriegsbedingten späten Planungsbeginns ihre Räume und Plattformen für Ausstellungen und Veranstaltungen mit ukrainischen und internationalen Künstler*innen sowie für diskursive, performative und pädagogische Aktivitäten freigemacht. Diese Institutionen bilden ein kuratorisches Konsortium, um einen gemeinsamen konzeptionellen Rahmen zu schaffen, innerhalb dessen sie autonom ihre jeweiligen Projekte für die Kiew-Biennale entwickeln. <br><br>Wie kann ein Land im Krieg politische, soziale, kulturelle und gesellschaftliche Themen aufgreifen, und wie in Form einer Kunstbiennale? Die Erfahrungen von Künstler*innen und des kulturellen Feldes in der Ukraine sind heute zutiefst geprägt von den Traumata des Krieges, von Vertreibung, vom fehlenden Zugang zu grundlegenden Ressourcen – und in vielen Fällen von einem Leben unter militärischer Besatzung oder der direkten Beteiligung am bewaffneten Widerstand. All dies sind existenzielle Herausforderungen für die Gegenwart, aber auch für die Zukunft der Kunst- und Kulturproduktion in der Ukraine.<br></br>Die Kyiv-Biennale 2023 ist sich dieser Herausforderungen bewusst. Ihre Intention ist es, die ukrainische Künstler*innengemeinschaft, die durch den Krieg geteilt und über ganz Europa verstreut ist, wieder zu integrieren und ihre Akteur*innen zu befähigen, gemeinsam mit internationalen Kolleg*innen über die kulturellen, sozialen und ökologischen Herausforderungen, denen sich die Ukraine derzeit gegenübersieht, zu arbeiten und zu reflektieren, gleichzeitig aber schon jetzt Bilder und Szenarien für deren offene und emanzipatorische Zukunft in einem globalen Kontext zu entwerfen.<br><br>Die in den vier vorangegangenen Ausgaben entwickelte Strategie der Kyiv-Biennale integriert künstlerische Produktion, kritisches Wissen und soziales Engagement. Dies erscheint umso wichtiger in einer Zeit des Notstands, in welcher „Kuratieren“ über seine zeitgenössische Bedeutung als eine künstlerische und organisatorische Praxis hinausgehen und sich wieder seiner ursprünglichen Bedeutung der Hilfe, der Wiederherstellung und Rehabilitation bewusst sein muss. Daher soll diese in europäischer Solidarität veranstaltete Kyiv-Biennale 2023 nicht nur ein zeitlich begrenztes Event sein, sondern vielmehr der Auftakt eines mehrjährigen internationalen Langzeitprojektes, einer \"Kyiv-Perenniale\".<br><br>Die Kyiv-Biennale 2023 wird vom Visual Culture Research Center Kyiv in Zusammenarbeit mit tranzit.at (Wien), tranzit.org (Bratislava, Budapest Bukarest, Cluj, Iasi, Prag und Wien), dem Museum für Moderne Kunst in Warschau, dem Museum Crisis Center (Lviv), Other Edges, Dovzhenko Center (Kyiv), Asortymentna Kimnata (Ivano Frankivsk) und Sorry, No Rooms Available (Uzhgorod) in einem kuratorischen Konsortium konzipiert und organisiert.</p>"
  },
 logo: { 
  'eng': '<svg id="logoSvg" width="560" height="181" viewBox="0 0 560 181" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M7.85068 90.6033H15.7014L11.4831 105.719V112.984C11.4831 114.39 11.6003 116.85 11.7174 119.428H0C0.117174 116.03 0.234348 115.093 0.234348 112.866V105.719L7.85068 90.6033Z" fill="black" /> <path d="M82.6729 179.304H22.3281C22.3281 157.51 30.0616 146.027 48.1064 136.77L56.0743 132.669C66.1513 127.513 69.5493 122.475 69.5493 114.976C69.5493 104.664 62.8704 98.454 53.4965 98.454C42.3649 98.454 35.686 105.836 33.8112 118.96H22.0938C23.2655 108.062 26.7807 100.329 32.8738 95.4075C38.0295 91.1892 45.1771 89.0801 54.4339 89.0801C70.9554 89.0801 81.7355 98.9227 81.7355 114.624C81.7355 126.459 76.4626 133.723 63.3391 140.52L56.3086 144.152C41.4275 151.768 35.686 158.564 33.5768 169.579H49.3954C56.7773 169.579 64.0421 169.462 82.6729 168.993V179.304Z" fill="black" /> <path d="M118.055 180.828C98.0181 180.828 87.3553 170.516 85.3633 150.714H96.9635C98.0181 164.306 105.4 171.454 117.821 171.454C129.538 171.454 136.217 164.189 136.217 153.526C136.217 145.675 131.764 139.582 124.968 137.122C122.508 136.184 119.813 135.833 114.657 135.833H108.915V126.459H114.188C118.992 126.459 122.156 126.107 124.734 125.053C130.124 122.943 133.053 118.725 133.053 112.866C133.053 103.961 126.843 98.3368 117.352 98.3368C106.337 98.3368 99.307 104.664 98.3696 115.679H86.7694C88.2926 99.3914 99.307 89.0801 117.118 89.0801C136.1 89.0801 144.888 99.5086 144.888 110.992C144.888 120.014 140.084 127.748 128.366 130.443V131.028C141.607 133.489 148.052 142.16 148.052 154.581C148.052 168.993 136.686 180.828 118.055 180.828Z" fill="black" /> <path d="M224.253 24.7833L199.586 48.5244L225.411 86.7417V87.6682H213.251L191.479 55.1256L184.183 62.5374V64.8536C184.183 72.4971 184.299 80.0247 184.53 87.6682H172.949C173.181 80.0247 173.297 72.4971 173.297 64.8536V23.9727C173.297 16.3292 173.181 7.64346 172.949 0H184.53C184.299 7.64346 184.183 16.3292 184.183 23.9727V49.5667H184.878L210.703 23.9727H224.253V24.7833Z" fill="black" /> <path d="M251.417 107.703H239.952V106.777L248.753 85.8152L223.507 24.7833V23.9727H235.783L244.468 46.0924C248.059 55.1256 251.185 63.5797 253.965 71.918H254.544L270.757 23.9727H282.107V24.8992L251.417 107.703Z" fill="black" /> <path d="M297.736 14.7079H286.039C286.039 12.0442 286.155 11.1178 286.155 8.91737V7.29603C286.155 5.90631 286.155 4.97983 286.039 2.54782H297.736C297.62 4.97983 297.62 5.90631 297.62 7.29603V8.91737C297.62 11.1178 297.736 12.0442 297.736 14.7079ZM297.736 87.6682H286.039C286.155 81.2986 286.386 72.4971 286.386 64.8536V46.7872C286.386 39.1438 286.155 30.458 286.039 23.9727H297.736C297.62 30.458 297.388 39.1438 297.388 46.7872V64.8536C297.388 72.4971 297.62 81.2986 297.736 87.6682Z" fill="black" /> <path d="M336.972 87.6682H324.696L301.65 23.9727H313.115C315.663 31.6161 318.327 38.5647 320.874 46.2082L327.36 65.5485C328.865 70.0651 329.676 74.2342 330.603 77.1295H331.066C331.992 74.2342 332.687 70.0651 334.308 65.5485L341.141 46.2082C343.805 38.5647 346.353 31.6161 348.901 23.9727H360.018L336.972 87.6682Z" fill="black" /> <path d="M204.218 180.586C192.869 180.586 186.846 175.722 183.72 169.352H183.256C183.488 172.711 183.72 175.606 183.835 179.08H172.949C173.065 173.869 173.297 169.236 173.297 164.604V115.385C173.297 107.741 173.181 99.0556 172.949 91.4121H184.414C184.183 99.0556 184.067 107.741 184.067 115.385V124.071H184.53C185.457 122.333 186.731 121.059 188.468 119.438C191.826 116.543 197.038 113.879 204.45 113.879C222.168 113.879 232.591 127.661 232.591 147.117V147.348C232.591 166.804 222.168 180.586 204.218 180.586ZM201.902 172.363C214.178 172.363 221.242 161.709 221.242 147.233C221.242 132.756 214.293 122.102 202.018 122.102C195.069 122.102 189.857 125.576 186.846 131.598C184.993 135.536 184.067 140.863 184.067 147.233C184.067 153.602 184.993 158.929 186.846 162.867C189.857 168.889 194.953 172.363 201.902 172.363Z" fill="black" /> <path d="M253.462 179.08H241.765C241.881 172.711 242.112 163.909 242.112 156.266V138.199C242.112 130.556 241.881 121.87 241.765 115.385H253.462C253.346 121.87 253.114 130.556 253.114 138.199V156.266C253.114 163.909 253.346 172.711 253.462 179.08Z" fill="black" /> <path d="M311.923 157.655H323.388C320.956 171.089 310.417 180.702 293.74 180.702C273.358 180.702 262.587 165.762 262.587 147.348C262.587 128.819 273.242 113.879 293.509 113.879C312.154 113.879 323.272 126.387 323.156 148.159H273.705C273.937 161.13 280.77 172.595 293.856 172.595C303.584 172.595 310.185 166.225 311.923 157.655ZM294.088 121.87C284.244 121.87 276.253 128.008 274.168 140.516H312.038C310.764 128.124 303.237 121.87 294.088 121.87Z" fill="black" /> <path d="M342.694 179.08H330.765C330.997 171.437 331.113 164.141 331.113 156.497V125.576C331.113 123.376 331.113 120.712 330.881 115.385H342.231C342.115 121.059 341.883 123.376 341.883 125.576V126.618H342.231C346.863 118.396 354.043 114.111 363.54 114.111C373.499 114.111 380.911 119.091 383.112 127.776C383.691 130.093 384.154 135.999 384.154 143.411V156.497C384.154 164.141 384.385 171.437 384.617 179.08H372.573C372.804 171.437 373.152 164.141 373.152 156.497V137.736C373.152 134.725 372.804 131.946 371.994 129.745C370.141 124.881 366.667 122.797 361.455 122.797C354.391 122.797 349.527 128.008 345.821 132.872C342.925 136.694 342.115 139.242 342.115 144.106V158.814C342.115 164.141 342.462 171.437 342.694 179.08Z" fill="black" /> <path d="M407.873 179.08H395.944C396.176 171.437 396.292 164.141 396.292 156.497V125.576C396.292 123.376 396.292 120.712 396.06 115.385H407.409C407.294 121.059 407.062 123.376 407.062 125.576V126.618H407.409C412.042 118.396 419.222 114.111 428.718 114.111C438.678 114.111 446.09 119.091 448.29 127.776C448.869 130.093 449.333 135.999 449.333 143.411V156.497C449.333 164.141 449.564 171.437 449.796 179.08H437.752C437.983 171.437 438.331 164.141 438.331 156.497V137.736C438.331 134.725 437.983 131.946 437.173 129.745C435.32 124.881 431.845 122.797 426.634 122.797C419.57 122.797 414.705 128.008 411 132.872C408.104 136.694 407.294 139.242 407.294 144.106V158.814C407.294 164.141 407.641 171.437 407.873 179.08Z" fill="black" /> <path d="M472.82 106.12H461.123C461.123 103.456 461.239 102.53 461.239 100.329V98.7081C461.239 97.3184 461.239 96.3919 461.123 93.9599H472.82C472.704 96.3919 472.704 97.3184 472.704 98.7081V100.329C472.704 102.53 472.82 103.456 472.82 106.12ZM472.82 179.08H461.123C461.239 172.711 461.471 163.909 461.471 156.266V138.199C461.471 130.556 461.239 121.87 461.123 115.385H472.82C472.704 121.87 472.472 130.556 472.472 138.199V156.266C472.472 163.909 472.704 172.711 472.82 179.08Z" fill="black" /> <path d="M481.83 161.477C481.83 150.475 487.041 145.38 502.328 142.832L513.909 140.863C522.479 139.357 524.448 138.894 525.953 138.199V134.378C525.953 125.46 520.163 121.754 510.898 121.754C502.444 121.754 496.769 126.039 495.959 133.451H484.146C485.767 120.596 495.264 113.879 511.94 113.879C525.606 113.879 535.681 118.975 536.029 133.683L536.492 156.497C536.724 167.268 536.724 173.174 536.955 179.08H526.185L526.88 169.121H526.069C522.827 176.417 515.299 180.47 504.529 180.47C491.905 180.47 481.83 172.479 481.83 161.477ZM493.295 161.593C493.295 169.005 499.085 172.132 505.108 172.132C515.646 172.132 525.722 167.383 525.953 151.981L526.069 144.916C524.332 146.306 523.406 147.001 518.773 148.043L503.255 151.518C496.19 153.139 493.295 155.339 493.295 161.593Z" fill="black" /> <path d="M559.877 179.08H548.296C548.528 171.437 548.644 163.909 548.644 156.266V115.385C548.644 107.741 548.528 99.0556 548.296 91.4121H559.877C559.645 99.0556 559.53 107.741 559.53 115.385V156.266C559.53 163.909 559.645 171.437 559.877 179.08Z" fill="black" /> </svg>',
  'укр': '<svg class="logoukr" id="logoSvg" width="635" height="195" viewBox="0 0 635 195" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M7.85068 104.523H15.7014L11.4831 119.639V126.904C11.4831 128.31 11.6003 130.77 11.7174 133.348H0C0.117174 129.95 0.234348 129.013 0.234348 126.786V119.639L7.85068 104.523Z" fill="black"/> <path d="M82.6729 193.224H22.3281C22.3281 171.43 30.0616 159.947 48.1064 150.69L56.0743 146.589C66.1513 141.433 69.5493 136.395 69.5493 128.896C69.5493 118.584 62.8704 112.374 53.4965 112.374C42.3649 112.374 35.686 119.756 33.8112 132.879H22.0938C23.2655 121.982 26.7807 114.249 32.8738 109.327C38.0295 105.109 45.1771 103 54.4339 103C70.9554 103 81.7355 112.843 81.7355 128.544C81.7355 140.379 76.4626 147.643 63.3391 154.44L56.3086 158.072C41.4275 165.688 35.686 172.484 33.5768 183.499H49.3954C56.7773 183.499 64.0421 183.382 82.6729 182.913V193.224Z" fill="black"/> <path d="M118.055 194.747C98.0181 194.747 87.3553 184.436 85.3633 164.634H96.9635C98.0181 178.226 105.4 185.374 117.821 185.374C129.538 185.374 136.217 178.109 136.217 167.446C136.217 159.595 131.764 153.502 124.968 151.041C122.508 150.104 119.813 149.753 114.657 149.753H108.915V140.379H114.188C118.992 140.379 122.156 140.027 124.734 138.973C130.124 136.863 133.053 132.645 133.053 126.786C133.053 117.881 126.843 112.257 117.352 112.257C106.337 112.257 99.307 118.584 98.3696 129.599H86.7694C88.2926 113.311 99.307 103 117.118 103C136.1 103 144.888 113.429 144.888 124.912C144.888 133.934 140.084 141.668 128.366 144.363V144.948C141.607 147.409 148.052 156.08 148.052 168.5C148.052 182.913 136.686 194.747 118.055 194.747Z" fill="black"/> <path d="M232.821 32.3744L207.512 56.3951L234.345 95.0626V96H221.807L200.247 63.3084L192.514 70.5732V72.9167C192.514 80.6502 192.748 89.5554 192.865 96H181.03C181.148 89.5554 181.382 80.6502 181.382 72.9167V54.6375C181.382 46.904 181.148 38.1159 181.03 31.5541H192.865C192.748 38.1159 192.514 46.904 192.514 54.6375V57.9184H193.099L219.229 31.5541H232.821V32.3744ZM254.544 96H240.015C240.132 89.4382 240.366 80.6502 240.366 72.9167V54.6375C240.366 46.904 240.132 37.9987 240.015 31.5541H251.381C251.264 37.9987 251.029 46.904 251.029 54.6375L251.146 72.9167C251.146 77.2521 250.912 81.8219 250.561 84.9856H250.912L279.385 31.5541H293.915C293.798 38.1159 293.564 46.904 293.564 54.6375V72.9167C293.564 80.6502 293.798 89.5554 293.915 96H282.549C282.666 89.5554 282.901 80.6502 282.901 72.9167V54.6375C282.901 50.302 283.018 45.7322 283.369 42.8029H283.018L254.544 96ZM311.574 22.1802H301.965C301.965 19.4852 302.082 18.5478 302.082 16.3215V14.6811C302.082 13.275 302.082 12.3376 301.965 9.87691H311.574C311.456 12.3376 311.456 13.275 311.456 14.6811V16.3215C311.456 18.5478 311.574 19.4852 311.574 22.1802ZM325.283 22.1802H315.675C315.675 19.4852 315.792 18.5478 315.792 16.3215V14.6811C315.792 13.275 315.792 12.3376 315.675 9.87691H325.283C325.166 12.3376 325.166 13.275 325.166 14.6811V16.3215C325.166 18.5478 325.283 19.4852 325.283 22.1802ZM319.541 96H307.707C307.824 89.5554 308.058 80.6502 308.058 72.9167V54.6375C308.058 46.904 307.824 38.1159 307.707 31.5541H319.541C319.424 38.1159 319.19 46.904 319.19 54.6375V72.9167C319.19 80.6502 319.424 89.5554 319.541 96ZM357.237 96H332.396C332.865 72.7995 332.747 77.3693 332.747 72.9167V54.6375C332.747 50.1849 332.865 57.2153 332.396 31.5541H362.51C373.993 31.5541 384.304 33.5461 384.304 46.5525C384.304 54.0516 379.383 58.6214 372.469 60.9649V61.3164C381.492 63.1912 386.413 68.6984 386.413 77.0178C386.413 85.4543 381.961 91.313 373.524 94.2424C369.892 95.5313 365.205 96 357.237 96ZM343.41 39.522V57.3325H359.346C368.485 57.3325 372.938 54.6375 372.938 47.8414C372.938 44.7948 371.649 42.0998 368.72 40.8109C366.494 39.7563 363.447 39.522 359.346 39.522H343.41ZM343.41 64.3629V87.915H360.635C370.126 87.915 374.579 83.8139 374.579 76.5491C374.579 71.6278 372.235 67.9953 368.251 66.1206C365.673 64.9488 361.689 64.3629 356.065 64.3629H343.41ZM424.09 97.6404C403.468 97.6404 392.805 82.525 392.805 63.8942C392.805 45.1464 403.468 30.0309 423.856 30.0309C440.026 30.0309 450.806 39.522 451.978 52.6455H440.612C439.792 44.209 433.933 38.4674 424.793 38.4674C410.498 38.4674 404.405 50.6536 404.405 63.7771C404.405 77.0178 410.498 89.2039 424.09 89.2039C434.636 89.2039 440.729 82.2906 441.315 72.6823H453.032C452.212 87.0948 441.198 97.6404 424.09 97.6404ZM500.238 57.5668C507.62 60.2618 512.19 66.7064 512.19 75.3773C512.19 84.8684 507.737 91.313 500.238 94.1252C496.371 95.6485 492.036 96 486.997 96H459.813C459.93 89.5554 460.164 80.6502 460.164 72.9167V54.6375C460.164 46.904 459.93 38.1159 459.813 31.5541H471.647C471.53 38.1159 471.296 46.904 471.296 54.6375V56.2779H490.512C494.028 56.2779 497.191 56.5123 500.238 57.5668ZM494.731 86.6261C498.246 84.8684 500.121 81.4704 500.121 76.3147C500.121 71.3934 498.246 67.6438 494.496 65.8862C492.622 65.066 490.395 64.8316 487.7 64.8316H471.296V72.9167C471.296 77.838 471.413 83.1108 471.53 88.0321H486.529C489.809 88.0321 492.622 87.6806 494.731 86.6261ZM571.029 32.3744L545.72 56.3951L572.553 95.0626V96H560.015L538.455 63.3084L530.722 70.5732V72.9167C530.722 80.6502 530.956 89.5554 531.073 96H519.238C519.356 89.5554 519.59 80.6502 519.59 72.9167V54.6375C519.59 46.904 519.356 38.1159 519.238 31.5541H531.073C530.956 38.1159 530.722 46.904 530.722 54.6375V57.9184H531.307L557.437 31.5541H571.029V32.3744ZM571.863 78.1895C571.863 67.058 577.136 61.9023 592.603 59.3245L604.321 57.3325C612.992 55.8092 614.984 55.3405 616.507 54.6375V50.7707C616.507 41.7483 610.648 37.9987 601.274 37.9987C592.72 37.9987 586.979 42.3342 586.159 49.8333H574.207C575.847 36.827 585.456 30.0309 602.329 30.0309C616.155 30.0309 626.349 35.1865 626.701 50.0677L627.17 73.151C627.404 84.0482 627.404 90.0241 627.638 96H616.741L617.444 85.923H616.624C613.343 93.305 605.727 97.4061 594.83 97.4061C582.058 97.4061 571.863 89.3211 571.863 78.1895ZM583.464 78.3067C583.464 85.8058 589.322 88.9695 595.415 88.9695C606.078 88.9695 616.272 84.1654 616.507 68.5812L616.624 61.4336C614.866 62.8397 613.929 63.5427 609.242 64.5973L593.541 68.1125C586.393 69.753 583.464 71.9793 583.464 78.3067Z" fill="black"/> <path d="M202.316 129.609C219.892 129.609 230.438 142.849 230.438 161.949V162.183C230.438 181.048 218.955 194.406 199.973 194.406C180.99 194.406 169.507 180.931 169.507 159.723V153.395C169.507 124.922 180.522 114.845 206.183 108.635L224.462 104.182V114.376L206.769 118.36C193.762 121.289 182.162 125.976 179.701 141.326C184.505 134.061 192.239 129.609 202.316 129.609ZM199.973 186.204C211.456 186.204 218.838 176.83 218.838 162.066C218.838 147.185 211.573 137.928 199.973 137.928C188.372 137.928 180.99 147.185 180.99 162.066C180.99 176.83 188.489 186.204 199.973 186.204ZM251.325 119.18H239.49C239.49 116.485 239.608 115.548 239.608 113.321V111.681C239.608 110.275 239.608 109.338 239.49 106.877H251.325C251.208 109.338 251.208 110.275 251.208 111.681V113.321C251.208 115.548 251.325 116.485 251.325 119.18ZM251.325 193H239.49C239.608 186.555 239.842 177.65 239.842 169.917V151.637C239.842 143.904 239.608 135.116 239.49 128.554H251.325C251.208 135.116 250.974 143.904 250.974 151.637V169.917C250.974 177.65 251.208 186.555 251.325 193ZM309.174 169.682H320.892C320.072 184.095 309.057 194.64 291.715 194.64C270.741 194.64 260.078 179.525 260.078 160.894C260.078 142.146 270.741 127.031 291.247 127.031C307.651 127.031 318.431 136.522 319.603 149.646H308.12C307.3 141.209 301.441 135.467 292.184 135.467C279.529 135.467 273.788 143.67 272.03 153.981C281.404 153.981 291.833 153.864 301.558 153.747V162.769C291.715 162.652 281.053 162.535 271.561 162.535C272.03 175.072 277.537 186.204 291.715 186.204C302.378 186.204 308.471 179.291 309.174 169.682ZM380.035 151.637V169.917C380.035 177.65 380.27 186.555 380.387 193H368.552C368.67 186.555 368.904 177.65 368.904 169.917V161.949H339.376V169.917C339.376 177.65 339.61 186.555 339.728 193H327.893C328.01 186.555 328.244 177.65 328.244 169.917V151.637C328.244 143.904 328.01 135.116 327.893 128.554H339.728C339.61 135.116 339.376 143.904 339.376 151.637V153.512H368.904V151.637C368.904 143.904 368.67 135.116 368.552 128.554H380.387C380.27 135.116 380.035 143.904 380.035 151.637ZM389.1 175.19C389.1 164.058 394.373 158.902 409.84 156.324L421.557 154.332C430.228 152.809 432.22 152.341 433.743 151.637V147.771C433.743 138.748 427.885 134.999 418.511 134.999C409.957 134.999 404.215 139.334 403.395 146.833H391.443C393.084 133.827 402.692 127.031 419.565 127.031C433.392 127.031 443.586 132.187 443.938 147.068L444.406 170.151C444.641 181.048 444.641 187.024 444.875 193H433.978L434.681 182.923H433.861C430.58 190.305 422.963 194.406 412.066 194.406C399.294 194.406 389.1 186.321 389.1 175.19ZM400.7 175.307C400.7 182.806 406.559 185.97 412.652 185.97C423.315 185.97 433.509 181.165 433.743 165.581L433.861 158.434C432.103 159.84 431.166 160.543 426.479 161.597L410.777 165.113C403.63 166.753 400.7 168.979 400.7 175.307ZM505.828 151.637V169.917C505.828 177.65 506.063 186.555 506.18 193H494.345C494.463 186.555 494.697 177.65 494.697 169.917V151.637C494.697 146.951 494.58 141.795 494.463 136.991H471.262V153.044C471.262 175.307 465.521 188.547 461.185 193H448.647V192.18C453.452 186.907 460.131 174.955 460.131 153.044V128.554H506.18C506.063 135.116 505.828 143.904 505.828 151.637ZM564.019 169.682H575.737C574.916 184.095 563.902 194.64 546.56 194.64C525.586 194.64 514.923 179.525 514.923 160.894C514.923 142.146 525.586 127.031 546.092 127.031C562.496 127.031 573.276 136.522 574.448 149.646H562.965C562.144 141.209 556.286 135.467 547.029 135.467C534.374 135.467 528.633 143.67 526.875 153.981C536.249 153.981 546.677 153.864 556.403 153.747V162.769C546.56 162.652 535.897 162.535 526.406 162.535C526.875 175.072 532.382 186.204 546.56 186.204C557.223 186.204 563.316 179.291 564.019 169.682Z" fill="black"/> </svg>',
  'de': '<svg id="logoSvg" width="560" height="181" viewBox="0 0 560 181" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M7.85068 90.6033H15.7014L11.4831 105.719V112.984C11.4831 114.39 11.6003 116.85 11.7174 119.428H0C0.117174 116.03 0.234348 115.093 0.234348 112.866V105.719L7.85068 90.6033Z" fill="black" /> <path d="M82.6729 179.304H22.3281C22.3281 157.51 30.0616 146.027 48.1064 136.77L56.0743 132.669C66.1513 127.513 69.5493 122.475 69.5493 114.976C69.5493 104.664 62.8704 98.454 53.4965 98.454C42.3649 98.454 35.686 105.836 33.8112 118.96H22.0938C23.2655 108.062 26.7807 100.329 32.8738 95.4075C38.0295 91.1892 45.1771 89.0801 54.4339 89.0801C70.9554 89.0801 81.7355 98.9227 81.7355 114.624C81.7355 126.459 76.4626 133.723 63.3391 140.52L56.3086 144.152C41.4275 151.768 35.686 158.564 33.5768 169.579H49.3954C56.7773 169.579 64.0421 169.462 82.6729 168.993V179.304Z" fill="black" /> <path d="M118.055 180.828C98.0181 180.828 87.3553 170.516 85.3633 150.714H96.9635C98.0181 164.306 105.4 171.454 117.821 171.454C129.538 171.454 136.217 164.189 136.217 153.526C136.217 145.675 131.764 139.582 124.968 137.122C122.508 136.184 119.813 135.833 114.657 135.833H108.915V126.459H114.188C118.992 126.459 122.156 126.107 124.734 125.053C130.124 122.943 133.053 118.725 133.053 112.866C133.053 103.961 126.843 98.3368 117.352 98.3368C106.337 98.3368 99.307 104.664 98.3696 115.679H86.7694C88.2926 99.3914 99.307 89.0801 117.118 89.0801C136.1 89.0801 144.888 99.5086 144.888 110.992C144.888 120.014 140.084 127.748 128.366 130.443V131.028C141.607 133.489 148.052 142.16 148.052 154.581C148.052 168.993 136.686 180.828 118.055 180.828Z" fill="black" /> <path d="M224.253 24.7833L199.586 48.5244L225.411 86.7417V87.6682H213.251L191.479 55.1256L184.183 62.5374V64.8536C184.183 72.4971 184.299 80.0247 184.53 87.6682H172.949C173.181 80.0247 173.297 72.4971 173.297 64.8536V23.9727C173.297 16.3292 173.181 7.64346 172.949 0H184.53C184.299 7.64346 184.183 16.3292 184.183 23.9727V49.5667H184.878L210.703 23.9727H224.253V24.7833Z" fill="black" /> <path d="M251.417 107.703H239.952V106.777L248.753 85.8152L223.507 24.7833V23.9727H235.783L244.468 46.0924C248.059 55.1256 251.185 63.5797 253.965 71.918H254.544L270.757 23.9727H282.107V24.8992L251.417 107.703Z" fill="black" /> <path d="M297.736 14.7079H286.039C286.039 12.0442 286.155 11.1178 286.155 8.91737V7.29603C286.155 5.90631 286.155 4.97983 286.039 2.54782H297.736C297.62 4.97983 297.62 5.90631 297.62 7.29603V8.91737C297.62 11.1178 297.736 12.0442 297.736 14.7079ZM297.736 87.6682H286.039C286.155 81.2986 286.386 72.4971 286.386 64.8536V46.7872C286.386 39.1438 286.155 30.458 286.039 23.9727H297.736C297.62 30.458 297.388 39.1438 297.388 46.7872V64.8536C297.388 72.4971 297.62 81.2986 297.736 87.6682Z" fill="black" /> <path d="M336.972 87.6682H324.696L301.65 23.9727H313.115C315.663 31.6161 318.327 38.5647 320.874 46.2082L327.36 65.5485C328.865 70.0651 329.676 74.2342 330.603 77.1295H331.066C331.992 74.2342 332.687 70.0651 334.308 65.5485L341.141 46.2082C343.805 38.5647 346.353 31.6161 348.901 23.9727H360.018L336.972 87.6682Z" fill="black" /> <path d="M204.218 180.586C192.869 180.586 186.846 175.722 183.72 169.352H183.256C183.488 172.711 183.72 175.606 183.835 179.08H172.949C173.065 173.869 173.297 169.236 173.297 164.604V115.385C173.297 107.741 173.181 99.0556 172.949 91.4121H184.414C184.183 99.0556 184.067 107.741 184.067 115.385V124.071H184.53C185.457 122.333 186.731 121.059 188.468 119.438C191.826 116.543 197.038 113.879 204.45 113.879C222.168 113.879 232.591 127.661 232.591 147.117V147.348C232.591 166.804 222.168 180.586 204.218 180.586ZM201.902 172.363C214.178 172.363 221.242 161.709 221.242 147.233C221.242 132.756 214.293 122.102 202.018 122.102C195.069 122.102 189.857 125.576 186.846 131.598C184.993 135.536 184.067 140.863 184.067 147.233C184.067 153.602 184.993 158.929 186.846 162.867C189.857 168.889 194.953 172.363 201.902 172.363Z" fill="black" /> <path d="M253.462 179.08H241.765C241.881 172.711 242.112 163.909 242.112 156.266V138.199C242.112 130.556 241.881 121.87 241.765 115.385H253.462C253.346 121.87 253.114 130.556 253.114 138.199V156.266C253.114 163.909 253.346 172.711 253.462 179.08Z" fill="black" /> <path d="M311.923 157.655H323.388C320.956 171.089 310.417 180.702 293.74 180.702C273.358 180.702 262.587 165.762 262.587 147.348C262.587 128.819 273.242 113.879 293.509 113.879C312.154 113.879 323.272 126.387 323.156 148.159H273.705C273.937 161.13 280.77 172.595 293.856 172.595C303.584 172.595 310.185 166.225 311.923 157.655ZM294.088 121.87C284.244 121.87 276.253 128.008 274.168 140.516H312.038C310.764 128.124 303.237 121.87 294.088 121.87Z" fill="black" /> <path d="M342.694 179.08H330.765C330.997 171.437 331.113 164.141 331.113 156.497V125.576C331.113 123.376 331.113 120.712 330.881 115.385H342.231C342.115 121.059 341.883 123.376 341.883 125.576V126.618H342.231C346.863 118.396 354.043 114.111 363.54 114.111C373.499 114.111 380.911 119.091 383.112 127.776C383.691 130.093 384.154 135.999 384.154 143.411V156.497C384.154 164.141 384.385 171.437 384.617 179.08H372.573C372.804 171.437 373.152 164.141 373.152 156.497V137.736C373.152 134.725 372.804 131.946 371.994 129.745C370.141 124.881 366.667 122.797 361.455 122.797C354.391 122.797 349.527 128.008 345.821 132.872C342.925 136.694 342.115 139.242 342.115 144.106V158.814C342.115 164.141 342.462 171.437 342.694 179.08Z" fill="black" /> <path d="M407.873 179.08H395.944C396.176 171.437 396.292 164.141 396.292 156.497V125.576C396.292 123.376 396.292 120.712 396.06 115.385H407.409C407.294 121.059 407.062 123.376 407.062 125.576V126.618H407.409C412.042 118.396 419.222 114.111 428.718 114.111C438.678 114.111 446.09 119.091 448.29 127.776C448.869 130.093 449.333 135.999 449.333 143.411V156.497C449.333 164.141 449.564 171.437 449.796 179.08H437.752C437.983 171.437 438.331 164.141 438.331 156.497V137.736C438.331 134.725 437.983 131.946 437.173 129.745C435.32 124.881 431.845 122.797 426.634 122.797C419.57 122.797 414.705 128.008 411 132.872C408.104 136.694 407.294 139.242 407.294 144.106V158.814C407.294 164.141 407.641 171.437 407.873 179.08Z" fill="black" /> <path d="M472.82 106.12H461.123C461.123 103.456 461.239 102.53 461.239 100.329V98.7081C461.239 97.3184 461.239 96.3919 461.123 93.9599H472.82C472.704 96.3919 472.704 97.3184 472.704 98.7081V100.329C472.704 102.53 472.82 103.456 472.82 106.12ZM472.82 179.08H461.123C461.239 172.711 461.471 163.909 461.471 156.266V138.199C461.471 130.556 461.239 121.87 461.123 115.385H472.82C472.704 121.87 472.472 130.556 472.472 138.199V156.266C472.472 163.909 472.704 172.711 472.82 179.08Z" fill="black" /> <path d="M481.83 161.477C481.83 150.475 487.041 145.38 502.328 142.832L513.909 140.863C522.479 139.357 524.448 138.894 525.953 138.199V134.378C525.953 125.46 520.163 121.754 510.898 121.754C502.444 121.754 496.769 126.039 495.959 133.451H484.146C485.767 120.596 495.264 113.879 511.94 113.879C525.606 113.879 535.681 118.975 536.029 133.683L536.492 156.497C536.724 167.268 536.724 173.174 536.955 179.08H526.185L526.88 169.121H526.069C522.827 176.417 515.299 180.47 504.529 180.47C491.905 180.47 481.83 172.479 481.83 161.477ZM493.295 161.593C493.295 169.005 499.085 172.132 505.108 172.132C515.646 172.132 525.722 167.383 525.953 151.981L526.069 144.916C524.332 146.306 523.406 147.001 518.773 148.043L503.255 151.518C496.19 153.139 493.295 155.339 493.295 161.593Z" fill="black" /> <path d="M559.877 179.08H548.296C548.528 171.437 548.644 163.909 548.644 156.266V115.385C548.644 107.741 548.528 99.0556 548.296 91.4121H559.877C559.645 99.0556 559.53 107.741 559.53 115.385V156.266C559.53 163.909 559.645 171.437 559.877 179.08Z" fill="black" /> </svg>',
 },
  
  
    // credits: {
  //   'eng':  '<tbody> <tr class="curation"> <td>curation</td> <td>Serge Klimko</td> </tr> <tr> <td></td> <td>curator two</td> </tr> <tr> <td></td> <td>curator three</td> </tr> <tr> <td></td> <td>curator four</td> </tr> <tr class="management"> <td>management</td> <td>Sasha Sasha</td> </tr> <tr  class="graphic-design"> <td>graphic design</td> <td>Aliona Ciobanu</td> </tr> <tr> <td></td> <td>Stefaniia Bodnia</td> </tr> <tr class="web-development"> <td>website</td> <td>Vladyslav Omelianenko</td> </tr> <tr><td>development</td></tr></tbody>',
  //   'ukr':  '<tbody> <tr class="curation"> <td>кураторство</td> <td>Сергій Климко</td> </tr> <tr> <td></td> <td>Куратор Два</td> </tr> <tr> <td></td> <td>Куратор Три</td> </tr> <tr> <td></td> <td>Куратор Чотири</td> </tr> <tr class="management"> <td>менеджер</td> <td>Саша Саша</td> </tr> <tr class="graphic-design"> <td>графічний дизайн</td> <td>Альона Чобану</td> </tr> <tr> <td></td> <td>Стефанія Бодня</td> </tr> <tr  class="web-development"> <td>вебсайт</td> <td>Владислав Омеляненко</td> </tr> <tr><td>розробка</td></tr> </tbody>'
  // }
}


function changeLanguage(language) {
  // dateText.innerHTML = pageText.date[language];
  aboutText.innerHTML = pageText.about[language];
  logoBlock.innerHTML = pageText.logo[language];
  // creditsText.innerHTML = pageText.credits[language];
}


Array.from(languagesButtons).forEach((language) => {
  language.addEventListener('click', (event) => {
    if (!Array.from(event.target.classList).includes('activeLanguage')) {
      changeLanguage(event.target.innerHTML);
      Array.from(languagesButtons).forEach((button) => button.classList.remove('activeLanguage'));
      event.target.classList.add("activeLanguage");
    }
  });
})



