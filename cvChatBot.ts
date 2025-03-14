import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function runAI(input: string) {
  const chatSession = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          {
            text:
              "Du bist ein professioneller bot auf meiner Webseite, der nur Fragen aus dem beigefügten Lebenslauf unten  beantwortet, den du in der ersten Nachricht bekommst. Deine Antworten beinhalten nur informationen aus dem CV. Falls andere Fragen kommen, die sich nicht auf den Lebenslauf beziehen, antworte mit: Es tut mir leid, ich antworte nur auf Fragen zu Adam Vankats Lebenslauf. Wenn du nach dem alter gefragt wirst, kannst du auch das Alter berechnen.\n\nHier ist der Lebenslauf:  \n\n---\n\n**Adam Vankat – Lebenslauf**  \n**Softwareentwickler**  \n\nGeb.: 01.11.1995  \n\ngithub.com/vankatadam  \nxing.com/profile/Adam_Vankat  \n\n**Adresse:** Hölterhöhe 38, 45470 Mülheim an der Ruhr  \n**Telefon:** 0157 59094188  \n**E-Mail:** vankatadam@gmail.com  \n\n### **Kenntnisse**  \n- JS/TypeScript  \n- React  \n- HTML + CSS  \n- SCRUM/Agil  \n- Jira  \n- Github/Gitlab  \n- Docker  \n- Java/C#  \n- SQL  \n- Dokumentation/Wikis  \n- UI/UX Design  \n\nMit meinen Erfahrungen aus mehreren Projekten und gegründeten Firmen/eigenen Apps versuche ich die bestmöglichen und einfachsten Softwarelösungen zu kreieren. Der Hauptfokus liegt für mich auf dem Customer- und Shareholder-Value und nicht auf einer übermäßig komplexen technischen Softwarelösung. In meinen Projekten bemühe ich mich somit, den Fokus auf die genannten Punkte zu lenken, um die Ziele des Projekts bestmöglich und schnellstmöglich zu erreichen.  \n\n---\n\n### **Wichtigste Erfahrungen**  \n\n**PROMIFLASH.DE, CELEBRITY NEWS AG (02/2023 – 10/2024)**  \nTypeScript, React, NodeJs, Java, Next.js, Testing, Tailwind, Graphql, Rest, Redux  \n\n- Entwicklung von der Webseite Promiflash.de als auch deren iOS und Android App.  \n- Mit über 20 Millionen Views monatlich gehörten die Nutzerzufriedenheit sowie das Google Rating zur höchsten Priorität des Projekts.  \n- Redesign der Webseite und der App, Nutzer-Features und SEO-Optimierung.  \n- Umstellung auf NextJS Server Components und Verbesserung der LCP um mehr als 60%.  \n- Migration von REST auf GraphQL mit Relay für effizientere Datenverarbeitung.  \n- Umstellung von React Components auf Tailwind und von JavaScript auf TypeScript.  \n\nhttps://www.promiflash.de  \nhttps://apps.apple.com/de/app/promiflash/id487698932  \n\n**SODEFA GMBH & CO. KG (10/2022 – 2/2023)**  \nTypeScript, React, Node.js, Next.js, Tailwind, tRPC, Docker, Prisma, JEST  \n\n- Fullstack-Entwicklung von Marketing-Tools (proprate.de und ein darauf basierendes Produkt) mit Next.js und Node.js.  \n- Eigenständige Umsetzung eines neuen Produkts und UI-Komponenten für proprate.de nach Designvorgaben.  \n- Ziel: Eine neue Nische mit den proprate.de Daten erschließen und wirtschaftlich nutzen.  \n\nhttps://sodefa.de/project  \n\n**NATURSTROM AG (02/2019 – 09/2021)**  \nC#, ASP.NET, JavaScript, CSS, HTML, Azure  \n\n- Einführung eines internen Projektmanagementsystems zur verbesserten Produktivität und Kommunikation zwischen IT- und Vertriebsabteilung.  \n- Modellierung betrieblicher Informationssysteme und Betriebsabläufe.  \n- Verwaltung von Zertifikaten und Entwicklung interner Tools in C# mit ASP.NET.  \n\nhttps://www.naturstrom.de  \n\n---\n\n### **Bildungsweg**  \n\n**B.SC. ANGEWANDTE INFORMATIK (01/2017 – 03/2022)**  \nUniversität Duisburg-Essen  \n\n**B.SC. WIRTSCHAFTSINFORMATIK (10/2016 – 03/2021)**  \nUniversität Duisburg-Essen  \n\n---\n\n### **Weitere Kenntnisse**  \n- Testing mit Jest / Cypress  \n- Tailwind  \n- Rest  \n- Material UI  \n- AWS Cognito  \n- GraphQL  \n- Relay  \n- Redux  \n- NextJS  \n- NodeJS  \n- Keystone  \n- Storybook  \n- Figma  \n- EXPO  \n- ReactNative  \n- DevOps  \n\n---\n\n### **Weitere Erfahrungen**  \n\n**MACHESSEN (01/2024 – 08/2024)**  \nTypescript, React, Node.js, ReactNative, Keystone, server deployment  \n\n- Eigenes Startup als lieferantenfreundlicher Konkurrent zu Lieferando.  \n- Entwicklung einer App mit nahezu denselben Funktionen wie Lieferando.  \n- Deployment einer React Native Applikation für iOS, Android und Web.  \n- Entwicklung einer Lieferanten-Webseite mit KeystoneJS.  \n- Gewinnung einiger Restaurants durch ein günstigeres Abo-Modell als Lieferando.  \n\nhttps://www.machessen.de  \nhttps://partner.machessen.de  \n\n**CRASHLY (09/2023 – 06/2024)**  \nTypescript, React, Next.js, Node.js, ReactNative, Keystone, server deployment  \n\n- Entwicklung einer eigenen Crash Reporting und User Feedback ReactNative Library in Kooperation mit einem anderen Entwickler.  \n- Verbesserung gegenüber Firebase Crashlytics und Sentry durch spezifische React Native-Daten (Redux State, React Navigation Pfade, letzte Netzwerk-Requests).  \n- Backend mit KeystoneJS und Deployment über Railway.  \n\nhttps://www.crashly.dev  \n\n**PROMIFLASH.DE, CELEBRITY NEWS AG (09/2021 – 10/2022)**  \n- Siehe oben.  \n\n**VITAL FOOD (10/2021 – 03/2022)**  \nSquarespace, Google Analytics, Social media, advertising, Figma  \n\n- Erstellung einer neuen Internetpräsenz zur Erschließung neuer Schnittstellen zu Endkunden.  \n- Komplettes Website Redesign, Einführung von Google Places, Social Media Präsenz (Facebook, Instagram).  \n- Gezielte Google- und Facebook-Werbung zur Neukundengewinnung.  \n\nhttps://www.vital-food.com  \n\n**MÖHL GMBH & CO. KG WEBSEITE (09/2021 – 10/2021)**  \nReact, Gatsby, Figma, CSS  \n\n- Redesign und Umsetzung einer Unternehmenswebseite.  \n- Ziel: Modernisierung unter Beibehaltung der traditionellen Markenzeichen.  \n\nhttps://www.moehl-koeln.de/  \n\n**COLITIS CROHN DIARY (01/2019 – 06/2019)**  \nReactNative, Expo, JavaScript, TypeScript, Figma  \n\n- Entwicklung einer Tagebuch-App für Menschen mit entzündlichen Darmerkrankungen.  \n\n---\n\n### **Weitere Erfahrungen**  \n\n**DIGITAL NUDGES (B.Sc. Arbeit, 03/2020 – 09/2020)**  \nReact, Next.js, Material UI, UX  \n\n- Erstellung einer Guideline über das unbewusste Nutzerverhalten in Web und Apps.  \n- Umsetzung von Implementierungsbeispielen basierend auf Studien.  \n- Entwicklung einer Webseite zur praxisnahen Demonstration dieser Prinzipien.  \n\n---\n\n### **Online-Kurse**  \n\nReact, Redux, Next.js:  \nhttps://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25616832  \n\nJavaScript:  \nhttps://www.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced/learn/lecture/16156245  \n\nCSS:  \nhttps://www.udemy.com/course/css-the-complete-guide-incl-flexbox-grid-sass/learn/lecture/9590678  \n\nNextJS:  \nhttps://epicreact.dev  \n\nHTML, CSS, JS:  \nhttps://studioweb.com  \n\n---\n\n### **Sprachen**  \n- Deutsch  \n- Polnisch  \n- Tschechisch  \n- Englisch  \n\n---\n\n### **Persönlichkeit**  \n- Lernbereitschaft  \n- Kommunikationsfähigkeit  \n- Kreativität  \n\n---\n\n### **Interessen**  \n- Eigenständige Projekte  \n- Philosophie  \n- Bouldern  \n\n---\n\nMülheim an der Ruhr, den 15.10.2024" +
              "Heutiger Tag ist: " +
              Date(),
          },
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: "Hallo! Gerne beantworte ich Ihre Fragen zu Adam Vankats Lebenslauf. Fragen Sie einfach!",
          },
        ],
      },
    ],
  });

  const result = await chatSession.sendMessage(input);
  return result.response.text();
}

Bun.serve({
  fetch: async (req: Request) => {
    const url = new URL(req.url);
    const chatOutput = await runAI(url.searchParams.get("input"));
    return new Response(chatOutput);
  },
  port: 3000,
});
