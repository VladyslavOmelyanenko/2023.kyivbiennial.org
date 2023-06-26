const logo = document.getElementById('logoSvg');
const aboutSection = document.getElementsByClassName('about')[0];
  
if (window.innerWidth > 900) {
  aboutSection.style.bottom = logo.clientHeight / 2 + 5 +'px';
}

window.addEventListener('resize', () => {
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

let pageText = {
  date: {
    'eng': 'october 16 –<br>november 14',
    'ukr': '16 жовтня –<br>14 листопада'
  },
  about: {
    'eng': "<p class='english-text'>The fifth edition of Kyiv Biennial will be international and will take place in Kyiv, Ivano-Frankivsk, Uzhhorod, Vienna, Warsaw and Berlin.<br><br>In view of the brutal Russian attack on Ukraine, a comprehensive biennial project in Kyiv long seemed deeply uncertain, if not impossible. But, with a cascade of openings – starting in Kyiv and Vienna in October 2023, finishing in Berlin in 2024 – the fifth Kyiv Biennial will take place. This Biennial edition is conceived as a European event, with dispersed exhibitions and public programs in a number of Ukrainian and EU cities, and realized in partnership with leading European institutions in the field of contemporary art.<br><br>Instead of abandoning the project and thus submitting to the logic of war that attacks everything civil, the 2023 Biennial draws upon its founding idea: that of being a multi-centric initiative in a European, interconnected and solidary form. Art institutions in Ukraine (in Kyiv, Ivano-Frankivsk and Uzhhorod) organize presentations and events in their endangered yet working infrastructures. Despite the late start of planning due to the war, museums and exhibition halls in Vienna (the main exhibition spot), Warsaw and Berlin, together with venues in other European cities, have freed up their spaces and platforms for exhibitions and events with Ukrainian and international artists as well as for discursive, performative and educational activities. Together, the institutions have formed a curatorial consortium to jointly create a conceptual framework within which they develop their respective Kyiv Biennial programs.<br><br>How can a country at war address political, social, cultural and societal issues? Today, the experience of artists and cultural workers in Ukraine is profoundly marked by war trauma, displacement, lack of access to basic resources and, in many cases, direct involvement in armed resistance or the experience of life under military occupation. This poses existential challenges for the future of art and cultural production in Ukraine. The upcoming Biennial aims at reintegrating the Ukrainian artistic community, divided and scattered throughout Europe by the war, in order to empower its actors to work and reflect collectively and together with international colleagues on cultural, social and environmental challenges Ukraine is currently facing and to imagine scenarios for an emancipatory future within a global context.<br><br>The Kyiv Biennial strategy, developed in the course of its four previous editions, merges artistic production, critical knowledge and social engagement in the times of emergency, where curatorship goes far beyond its contemporary meaning of an artistic and organizational practice and becomes resignified with its original sense of restoration, rehabilitation and relief, thus suggesting not a biennial, but a perennial long-run international project, a “Kyiv Perennial.”<br><br>Kyiv Biennial 2023 is conceived and organized by the Visual Culture Research Center (Kyiv) together with tranzit.at (Vienna), tranzit.org (Bratislava, Budapest, Bucharest, Cluj, Iași, Prague and Vienna), Museum of Modern Art in Warsaw, Museum Crisis Center (Lviv), Other Edges, Dovzhenko Centre (Kyiv), Asortymentna Kimnata (Ivano-Frankivsk) and Sorry, No Rooms Available (Uzhhorod).</p>",
    'ukr': "<p class='ukrainian-text'>П’ята Київська бієнале буде міжнародною і пройде у Києві, Івано-Франківську, Ужгороді, Відні, Варшаві та Берліні.<br><br>В умовах нищівної війни Росії проти України перспектива втілення комплексного проєкту бієнале у Києві довго виглядала дуже непевно – чи й зовсім нереалістично. Однак п’ята Київська бієнале відбудеться – її відкриття пройде у низці міст, починаючи з Києва й Відня у жовтні 2023-го й закінчуючи Берліном у 2024 році. Цей випуск Київської бієнале задумано як пан’європейську подію з виставками у різних локаціях і публічними програмами в численних містах України та ЄС і реалізовано у партнерстві з провідними європейськими інституціями у сфері сучасного мистецтва.<br><br>Відмовитися від проєкту бієнале означало б підкоритися логіці війни, яка руйнує цивільне життя. Натомість Київська бієнале 2023 заново утверджує ідею, яка лежить в її основі як мультицентричної європейської ініціативи, що спирається на взаємозв’язки й солідарність. Українські арт-інституції в Києві, Івано-Франківську й Ужгороді організовують презентації та заходи, використовуючи для цього інфраструктуру, яка перебуває під загрозою зникнення, але продовжує функціонувати. Попри спричинену війною затримку у плануванні подій музеї та виставкові зали Відня (головної виставкової локації в рамках бієнале), Варшави й Берліна, а також майданчики в інших європейських містах звільнили свій простір й надали платформу для виставок і подій за участю українських митців та їхніх колег з інших країн, а ще – для дискусій, перформансів і освітніх заходів. Разом ці інституції складають кураторський консорціум, що спільно творить концептуальну основу, у межах якої формуються локальні програми Київської бієнале.<br><br>Як країна у стані війни може вирішувати політичні, соціальні й культурні проблеми? Сьогодні життя митців і працівників культури в Україні позначене травмою війни, переміщенням, відсутністю доступу до базових ресурсів, а часто й прямою участю в збройному опорі чи досвідом життя під військовою окупацією. Як наслідок, мистецьке й культурне виробництво в Україні постало перед екзистенційним викликом. Київська бієнале 2023 має на меті реінтеграцію української мистецької спільноти, розділеної та розпорошеної по всій Європі через війну, створення для її учасників та учасниць сприятливих умов для колективної міжнародної роботи й осмислення культурних, соціальних та екологічних проблем, з якими зараз стикається Україна, а також уявлення сценаріїв емансипаційного майбутнього у глобальному вимірі.<br><br>Стратегія Київської бієнале, розроблена під час чотирьох попередніх випусків проєкту, об’єднує художню діяльність, критичне знання й суспільну заангажованість у часи надзвичайного стану. В такому контексті «кураторство» виходить далеко за межі свого сучасного значення мистецько-організаційної практики й набуває нового cенсу, який водночас повертає нас до початкового смислу кураторства як відновлення та зцілення. Таким чином, перед нами не стільки бієнале, скільки довготривалий, багаторічний міжнародний проект –«Київська переніале».<br><br>Задум та організація Київської бієнале 2023: Центр візуальної культури (Київ) спільно з tranzit.at (Відень), tranzit.org (Братислава, Будапешт, Бухарест, Клуж, Ясси, Прага та Відень), Музеєм сучасного мистецтва у Варшаві, Музейним кризовим центром (Львів), проєктом «Other Edges», Довженко-Центром (Київ), галереєю «Асортиментна кімната» (Івано-Франківськ) та резиденцією «Sorry, No Rooms Available» (Ужгород).</p>"
  },
  credits: {
    'eng':  '<tbody> <tr class="curation"> <td>curation</td> <td>Serge Klimko</td> </tr> <tr> <td></td> <td>curator two</td> </tr> <tr> <td></td> <td>curator three</td> </tr> <tr> <td></td> <td>curator four</td> </tr> <tr class="management"> <td>management</td> <td>Sasha Sasha</td> </tr> <tr  class="graphic-design"> <td>graphic design</td> <td>Aliona Ciobanu</td> </tr> <tr> <td></td> <td>Stefaniia Bodnia</td> </tr> <tr class="web-development"> <td>website</td> <td>Vladyslav Omelianenko</td> </tr> <tr><td>development</td></tr></tbody>',
    'ukr':  '<tbody> <tr class="curation"> <td>кураторство</td> <td>Сергій Климко</td> </tr> <tr> <td></td> <td>Куратор Два</td> </tr> <tr> <td></td> <td>Куратор Три</td> </tr> <tr> <td></td> <td>Куратор Чотири</td> </tr> <tr class="management"> <td>менеджер</td> <td>Саша Саша</td> </tr> <tr class="graphic-design"> <td>графічний дизайн</td> <td>Альона Чобану</td> </tr> <tr> <td></td> <td>Стефанія Бодня</td> </tr> <tr  class="web-development"> <td>вебсайт</td> <td>Владислав Омеляненко</td> </tr> <tr><td>розробка</td></tr> </tbody>'
  }
}


const changeLanguage = (language) => {
  dateText.innerHTML = pageText.date[language];
  aboutText.innerHTML = pageText.about[language];
  creditsText.innerHTML = pageText.credits[language];
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