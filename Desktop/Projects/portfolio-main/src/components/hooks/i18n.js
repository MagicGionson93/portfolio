import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { Translation, initReactI18next } from "react-i18next";
import useThemeSwitcher from "./useThemeSwitcher";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    returnObjects: true,
    resources: {
      en: {
        translation: {
          navbarLink: "Projects",

          home: {
            homeTitle: "My journey into the World of Web Development",
            bio: "Welcome to my portfolio! My name is Giovanni Pasini and I am a passionate junior full-stack developer with a strong dedication to turning ideas into powerful web applications. I live in Italy and constantly strive to stay up to date with the latest technologies and development practices. Here you can explore my latest projects, which demonstrate my expertise especially in using React.js and web development in general. I'm always looking for new challenges and growth opportunities, so don't hesitate to contact me if you want to collaborate or discuss innovative ideas!",
          },

          about: {
            aboutTitle: "About Me!",
            bioTitle: "Biography",
            line1:
              "Graduated in Computer Science from the Piamarta institute in Brescia in 2013.",
            line2:
              " I worked as a technician, warehouse worker and IT manager in the company Proxi Srl for 10 years. Now I understand that I want to do something else in life, I want to learn different jobs and start studying again.",
            line3:
              "Over the last year I have carried out online training courses on programming and creating websites. I am a person who is committed to the things he does and who, when he doesn't know them, always tries to find the best solution.",
            line4:
              "I completed an internship at the Photonic company located in Taiwan",
            num1: "Satisfied Clients",
            num2: "Projects Completed",
            num3: "Years Of Experience",
            experienceTitle: "Experience",
            esp1: "2 months experience thanks to Rotary New Generations Service Exchange. Followed the development of the front end part of the company. Studied various types of languages ​​such as HTML, CSS, Javascript and SQL. Used different components such as Node, Vite and React. Learned about Taiwanese work culture by participating in various team events and bonding with colleagues.",
            esp2: "Created website via the Wordpress platform, using various plugins, searching for the best solution and implementing the use of HTML and CSS. Followed the various directives requested by the client to find the best solution",
            esp3: "Creation of the site for the company via the Wix platform. Management of video surveillance. Failure analysis and repair of various types of welding machines. Collaboration with colleagues. Organization of time based on work and customer management. Warehouse manager. ",
            esp3Job: "IT Manager and Repairman",
            educationTitle: "Education",
            ed1: "Javascript programming update. Using React, Node, Express and MongoDatabase. Deepened my knowledge on creating websites.",
            ed2: "Learned to program in Javascript. First approach with Javascript, React, Node, Machine Learning. Deepened my knowledge on creating websites.",
            ed3: "Learned to program in Python. First approach to data science, game and application creation. Deepened my knowledge of website creation.",
            ed4: "Studyed programming languages: C++, Java, HTML, CSS, PHP, DOS. Learned electrical engineering and how to diagnose and repair computers.",
          },
          projects: {
            projectTitle: "Projects!",
            pro1Title: "Electric Bike Shop",
            pro1: "Website created with Wordpress showing the electric bicycles the shop sells.",
            pro2Title: "Company specialized in the sale of welding machines",
            pro2: "Website created with Wix showing the various products the company sells.",
            pro3Title: "Creation and management of campsites",
            pro3: "Website created with HTML, CSS, Javascript, Node and MongoDB. Ability to register, create and manage campsites.",
            pro4Title: "Showcase website",
            pro4: "Website created with HTML, CSS and Javascript. Created as a showcase site and used different types of animations.",
            pro5Title: "Iphone webiste with 3D render",
            pro5: "Website that shows with visual effects the new Iphone 15. I used GSAP and Three for the animations with a 3D render of the iPhone.",
            visit: "Visit",
          },
        },
      },
      it: {
        translation: {
          navbarLink: "Progetti",

          home: {
            homeTitle: "Il mio viaggio nel Mondo dello Sviluppo Web",
            bio: "Benvenuto nel mio portfolio! Mi chiamo Giovanni Pasini e sono un appassionato junior full-stack developer con una forte dedizione nel trasformare idee in potenti applicazioni web. Vivo in Italia e mi impegno costantemente a rimanere al passo con le più recenti tecnologie e pratiche di sviluppo. Qui potrai esplorare i miei ultimi progetti, che dimostrano la mia competenza specialmente nell'utilizzo di React.js e nello sviluppo web in generale. Sono sempre alla ricerca di nuove sfide e opportunità di crescita, quindi non esitare a contattarmi se desideri collaborare o discutere di idee innovative!",
          },

          about: {
            aboutTitle: "Chi sono!",
            bioTitle: "Biografia",
            line1:
              "Diplomato in Informatica presso l'istituto Piamarta a Brescia nel 2013.",
            line2:
              "Ho lavorato come tecnico, magazziniere e IT manager nell'azienda Proxi Srl per 10 anni. Ora ho capito che voglio fare altro nella vita, voglio imparare diversi lavori e ricominciare a studiare.",
            line3:
              "Ho eseguito in questo ultimo anno corsi di formazione online sulla programmazione e la creazione di siti web. Sono una persona che si impegna sulle cose che fa e che quando non le sa cerca sempre di trovare la soluzione migliore.",
            line4:
              "Ho completato una internship presso l'azienda Photonic situata in Taiwan",
            num1: "Clienti Soddisfatti",
            num2: "Progetti Completati",
            num3: "Anni di esperienza",
            experienceTitle: "Esperienza",
            esp1: "Esperienza di 2 mesi grazie a Rotary New Generations Service Exchange. Seguito lo sviluppo della parte front end dell'azienda. Studiato vari tipi di linguaggi come HTML, CSS, Javascript e SQL. Utilizzato diversi componenti come Node, Vite e React. Appreso la cultura lavorativa Taiwanese partecipando a diversi team events e creando legami con i colleghi.",
            esp2: "Creato sito web tramite la piattaforma di Wordpress, utilizzando diversi plugin, ricercando la migliore soluzione e implementando l'utilizzo HTML e CSS. Seguito le varie direttive richieste dal cliente per trovare la soluzione migliore",
            esp3: "Creazione del sito per l'azienda tramite la piattaforma Wix. Gestione della videosorveglianza. Analisi delle avarie e riparazione di vari tipi di saldatrici. Collaborazione con i colleghi. Organizzazione del tempo in base al lavoro e gestione della clientela. Responsabile Magazzino.",
            esp3Job: "IT Manager and Welding Repairman",
            educationTitle: "Educazione",
            ed1: "Aggiornamento programmazione Javascript. Utilizzo di React, Node, Express e MongoDatabase. Approfondito la mia conoscenza sulla creazione di siti web.",
            ed2: "Imparato a programmare in Javascript. Primo approccio con Javascript, React, Node, Machine Learning. Approfondito la mia conoscenza sulla creazione di siti web.",
            ed3: "Imparato a programmare in Python. Primo approccio con data science, creazione di giochi e applicazioni. Approfondito la mia conoscenza sulla creazione di siti web.",
            ed4: "Studiato linguaggi di programmazione: C++, Java, HTML, CSS, PHP, DOS. Imparato elettrotecnica e come diagnosticare e riparare computer.",
          },
          projects: {
            projectTitle: "Progetti!",
            pro1Title: "Negozio di Bici Elettriche",
            pro1: "Sito Web creato con Wordpress che mostra le biciclette elettriche che il negozio vende.",
            pro2Title: "Azienda specializzata nella vendita delle Saldatrici",
            pro2: "Sito Web creato con Wix che mostra i vari prodotti che l'azienda vende.",
            pro3Title: "Creazione e gestione di campeggi",
            pro3: "Sito Web creato con HTML, CSS, Javascript, Node e MongoDB. Possibilità di registrazione, creazione e gestione di campeggi.",
            pro4Title: "Sito Web vetrina",
            pro4: "Sito Web creato con HTML, CSS e Javascript. Creato come sito vetrina e utilizzato diversi tipi di animazioni.",
            pro5Title: "Sito Web iPhone con 3D iPhone",
            pro5: "Sito Web che mostra il nuovo iPhone 15 con animazioni e effetti. Ho utilizzato GSAP e Three per le animazioni e l'iPhone in 3D.",
            visit: "Visita",
          },
        },
      },
    },
  });
