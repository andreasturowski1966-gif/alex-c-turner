import type { Metadata } from "next";
import Link from "next/link";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { localePath, type Locale } from "../i18n";

export const metadata: Metadata = {
  title: "Privacy Policy | Alex C. Turner",
  robots: { index: false, follow: true },
};

const copy = {
  en: {
    back: "Back home", eyebrow: "Privacy", title: "Privacy Policy / Datenschutz", updated: "Last updated: July 29, 2026",
    owner: "Proprietor", country: "Germany", email: "Email",
    sections: [
      ["1. Data Controller", "Alex Turow Records is responsible for this website. The full contact details are provided above and in the legal notice."],
      ["2. Hosting and Server Logs", "This website is hosted by Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA. When you visit the site, Vercel processes technically necessary connection data such as your IP address, date and time, requested page, referring URL, browser, operating system, and device information. The legal basis is Article 6(1)(f) GDPR. Our legitimate interest is the secure and reliable operation of this website. Vercel may process data in the United States and participates in the EU-U.S. Data Privacy Framework."],
      ["3. Contacting Us", "If you contact us by email, we process the information you provide in order to respond. The legal basis is Article 6(1)(b) GDPR for contractual or pre-contractual enquiries and Article 6(1)(f) GDPR in all other cases. We delete the information when the matter is resolved unless legal retention duties apply."],
      ["4. Language Preference", "On your first visit, your browser’s language setting is evaluated locally to display a suitable language. This information is not transmitted or stored by us. If you actively choose a language, the selection is saved in your browser’s local storage solely to provide that language. No cookie is set. The legal basis is Section 25(2)(2) TDDDG and Article 6(1)(f) GDPR. You can delete the selection in your browser settings."],
      ["5. Embedded Spotify Player", "The Spotify player is blocked by default. A connection to Spotify AB, Regeringsgatan 19, 111 53 Stockholm, Sweden, is established only after you select “Load Spotify.” Spotify may then receive your IP address, device and browser data, and information about player use. The legal basis is your consent under Article 6(1)(a) GDPR and Section 25(1) TDDDG. Consent applies only to the current page view."],
      ["6. External Links", "This website links to Spotify and Amazon Music. Merely displaying those links does not connect you to the providers. When you select a link, you leave our website and the privacy policy of the relevant provider applies."],
      ["7. Analytics and Marketing", "We do not use our own analytics or marketing services. Spotify content is not loaded without your permission."],
      ["8. Your Rights", "Subject to the GDPR, you have rights of access, rectification, erasure, restriction, and data portability. You may withdraw consent for the future and object to processing based on legitimate interests for reasons relating to your situation. You may complain to a supervisory authority. The competent authority is the State Commissioner for Data Protection and Freedom of Information of North Rhine-Westphalia, Kavalleriestraße 2–4, 40213 Düsseldorf."],
    ],
  },
  de: {
    back: "Zur Startseite", eyebrow: "Datenschutz", title: "Datenschutzerklärung", updated: "Stand: 29. Juli 2026",
    owner: "Inhaber", country: "Deutschland", email: "E-Mail",
    sections: [
      ["1. Verantwortlicher", "Für diese Website ist Alex Turow Records verantwortlich. Die vollständigen Kontaktdaten finden Sie oben und im Impressum."],
      ["2. Hosting und Server-Protokolle", "Diese Website wird über Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA, bereitgestellt. Beim Aufruf verarbeitet Vercel technisch notwendige Verbindungsdaten wie IP-Adresse, Zeitpunkt, aufgerufene Seite, Referrer-URL, Browser, Betriebssystem und Geräteinformationen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt im sicheren und zuverlässigen Betrieb der Website. Vercel kann Daten in den USA verarbeiten und nimmt am EU-US Data Privacy Framework teil."],
      ["3. Kontaktaufnahme", "Wenn Sie uns per E-Mail kontaktieren, verarbeiten wir Ihre Angaben, um die Anfrage zu beantworten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO bei vertraglichen oder vorvertraglichen Anliegen, ansonsten Art. 6 Abs. 1 lit. f DSGVO. Nach Abschluss löschen wir die Angaben, sofern keine gesetzlichen Aufbewahrungspflichten bestehen."],
      ["4. Spracheinstellung", "Beim ersten Besuch wird die Spracheinstellung Ihres Browsers ausschließlich lokal ausgewertet. Diese Information wird von uns weder übertragen noch gespeichert. Wenn Sie selbst eine Sprache auswählen, wird diese Auswahl ausschließlich für die gewünschte Darstellung im lokalen Speicher Ihres Browsers hinterlegt. Dafür wird kein Cookie gesetzt. Rechtsgrundlage ist § 25 Abs. 2 Nr. 2 TDDDG und Art. 6 Abs. 1 lit. f DSGVO. Sie können die Auswahl in Ihren Browsereinstellungen löschen."],
      ["5. Spotify-Einbettung", "Der Spotify-Player ist zunächst blockiert. Erst nach Auswahl von „Spotify laden“ wird eine Verbindung zu Spotify AB, Regeringsgatan 19, 111 53 Stockholm, Schweden, hergestellt. Dabei können IP-Adresse, Geräte- und Browserdaten sowie Angaben zur Player-Nutzung übermittelt werden. Rechtsgrundlage ist Ihre Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG. Sie gilt nur für den aktuellen Seitenaufruf."],
      ["6. Externe Links", "Diese Website verlinkt zu Spotify und Amazon Music. Durch die bloße Anzeige der Links wird keine Verbindung hergestellt. Erst beim Anklicken verlassen Sie unsere Website; anschließend gilt die Datenschutzerklärung des jeweiligen Anbieters."],
      ["7. Analyse und Marketing", "Wir verwenden keine eigenen Analyse- oder Marketingdienste. Spotify-Inhalte werden ohne Ihre Freigabe nicht geladen."],
      ["8. Ihre Rechte", "Nach Maßgabe der DSGVO haben Sie insbesondere Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung und Datenübertragbarkeit. Sie können Einwilligungen für die Zukunft widerrufen und Verarbeitungen auf Grundlage berechtigter Interessen aus Gründen Ihrer besonderen Situation widersprechen. Beschwerden können Sie an eine Aufsichtsbehörde richten. Zuständig ist insbesondere die Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen, Kavalleriestraße 2–4, 40213 Düsseldorf."],
    ],
  },
  fr: {
    back: "Retour à l’accueil", eyebrow: "Confidentialité", title: "Politique de confidentialité", updated: "Mise à jour : 29 juillet 2026",
    owner: "Propriétaire", country: "Allemagne", email: "E-mail",
    sections: [
      ["1. Responsable du traitement", "Alex Turow Records est responsable de ce site. Les coordonnées complètes figurent ci-dessus et dans les mentions légales."],
      ["2. Hébergement et journaux du serveur", "Ce site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis. Lors de votre visite, Vercel traite les données de connexion techniquement nécessaires, notamment l’adresse IP, la date et l’heure, la page consultée, l’URL de provenance, le navigateur, le système d’exploitation et les informations relatives à l’appareil. Le traitement repose sur l’article 6, paragraphe 1, point f), du RGPD. Notre intérêt légitime est d’assurer le fonctionnement sûr et fiable du site. Vercel peut traiter des données aux États-Unis et participe au cadre de protection des données UE–États-Unis."],
      ["3. Prise de contact", "Lorsque vous nous contactez par e-mail, nous traitons les informations fournies afin de vous répondre. Le traitement repose sur l’article 6, paragraphe 1, point b), du RGPD pour les demandes contractuelles ou précontractuelles, et sur l’article 6, paragraphe 1, point f), dans les autres cas. Les données sont supprimées une fois la demande traitée, sauf obligation légale de conservation."],
      ["4. Préférence linguistique", "Lors de votre première visite, la langue du navigateur est évaluée uniquement sur votre appareil. Cette information ne nous est ni transmise ni enregistrée. Si vous choisissez une langue, ce choix est conservé dans le stockage local de votre navigateur uniquement pour afficher la version demandée. Aucun cookie n’est déposé. Le traitement repose sur l’article 25, paragraphe 2, point 2, de la TDDDG et sur l’article 6, paragraphe 1, point f), du RGPD. Vous pouvez supprimer ce choix dans les paramètres du navigateur."],
      ["5. Lecteur Spotify intégré", "Le lecteur Spotify est bloqué par défaut. Une connexion à Spotify AB, Regeringsgatan 19, 111 53 Stockholm, Suède, n’est établie qu’après avoir sélectionné « Charger Spotify ». Spotify peut alors recevoir votre adresse IP, des données sur votre appareil et votre navigateur ainsi que des informations sur l’utilisation du lecteur. Le traitement repose sur votre consentement conformément à l’article 6, paragraphe 1, point a), du RGPD et à l’article 25, paragraphe 1, de la TDDDG. Il ne vaut que pour la consultation en cours."],
      ["6. Liens externes", "Ce site contient des liens vers Spotify et Amazon Music. Leur simple affichage n’établit aucune connexion avec ces fournisseurs. Lorsque vous cliquez sur un lien, vous quittez notre site et la politique de confidentialité du fournisseur concerné s’applique."],
      ["7. Analyse et marketing", "Nous n’utilisons aucun service d’analyse ou de marketing. Le contenu Spotify n’est pas chargé sans votre autorisation."],
      ["8. Vos droits", "Dans les conditions prévues par le RGPD, vous disposez notamment de droits d’accès, de rectification, d’effacement, de limitation et de portabilité. Vous pouvez retirer votre consentement pour l’avenir et vous opposer, pour des raisons tenant à votre situation, aux traitements fondés sur un intérêt légitime. Vous pouvez déposer une réclamation auprès d’une autorité de contrôle, notamment la Commissaire à la protection des données et à la liberté de l’information de Rhénanie-du-Nord–Westphalie, Kavalleriestraße 2–4, 40213 Düsseldorf."],
    ],
  },
  es: {
    back: "Volver al inicio", eyebrow: "Privacidad", title: "Política de privacidad", updated: "Actualizada el 29 de julio de 2026",
    owner: "Titular", country: "Alemania", email: "Correo electrónico",
    sections: [
      ["1. Responsable del tratamiento", "Alex Turow Records es responsable de este sitio web. Los datos de contacto completos figuran arriba y en el aviso legal."],
      ["2. Alojamiento y registros del servidor", "Este sitio se aloja a través de Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, Estados Unidos. Durante la visita, Vercel trata los datos de conexión técnicamente necesarios, como la dirección IP, la fecha y hora, la página consultada, la URL de referencia, el navegador, el sistema operativo y datos del dispositivo. La base jurídica es el artículo 6, apartado 1, letra f), del RGPD. Nuestro interés legítimo consiste en garantizar un funcionamiento seguro y fiable. Vercel puede tratar datos en Estados Unidos y participa en el Marco de Privacidad de Datos UE–EE. UU."],
      ["3. Contacto", "Si nos escribes por correo electrónico, tratamos los datos facilitados para responder. La base jurídica es el artículo 6, apartado 1, letra b), del RGPD para consultas contractuales o precontractuales y el artículo 6, apartado 1, letra f), en los demás casos. Los datos se eliminan una vez resuelta la consulta, salvo obligación legal de conservación."],
      ["4. Preferencia de idioma", "En la primera visita, el idioma del navegador se evalúa únicamente en tu dispositivo. Nosotros no recibimos ni almacenamos esa información. Si eliges un idioma, la selección se guarda en el almacenamiento local del navegador exclusivamente para mostrar la versión solicitada. No se instala ninguna cookie. La base jurídica es el artículo 25, apartado 2, punto 2, de la TDDDG y el artículo 6, apartado 1, letra f), del RGPD. Puedes borrar la selección desde la configuración del navegador."],
      ["5. Reproductor de Spotify", "El reproductor de Spotify está bloqueado de forma predeterminada. La conexión con Spotify AB, Regeringsgatan 19, 111 53 Estocolmo, Suecia, solo se establece después de seleccionar «Cargar Spotify». Spotify puede recibir entonces tu dirección IP, datos del dispositivo y del navegador e información sobre el uso del reproductor. La base jurídica es tu consentimiento conforme al artículo 6, apartado 1, letra a), del RGPD y al artículo 25, apartado 1, de la TDDDG. Solo se aplica a la visita actual."],
      ["6. Enlaces externos", "Este sitio enlaza con Spotify y Amazon Music. La mera visualización de los enlaces no establece ninguna conexión con estos proveedores. Al hacer clic abandonas nuestro sitio y pasa a aplicarse la política de privacidad del proveedor correspondiente."],
      ["7. Analítica y marketing", "No utilizamos servicios propios de analítica ni de marketing. El contenido de Spotify no se carga sin tu autorización."],
      ["8. Tus derechos", "De acuerdo con el RGPD, tienes en particular derechos de acceso, rectificación, supresión, limitación y portabilidad. Puedes retirar tu consentimiento para el futuro y oponerte, por motivos relacionados con tu situación, a tratamientos basados en intereses legítimos. Puedes presentar una reclamación ante una autoridad de control, en particular la Comisionada de Protección de Datos y Libertad de Información de Renania del Norte-Westfalia, Kavalleriestraße 2–4, 40213 Düsseldorf."],
    ],
  },
} as const;

const headingClass = "font-serif text-2xl text-[#f5f2ec] sm:text-3xl";
const linkClass = "text-[#c78a3a] underline decoration-[#c78a3a]/35 underline-offset-4 transition-colors hover:text-[#dca45c]";

export function PrivacyPolicyContent({ locale }: { locale: Locale }) {
  const text = copy[locale];
  return (
    <main className="min-h-screen bg-[#11100e] px-5 py-16 text-[#f5f2ec] sm:px-8 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="flex items-center justify-between gap-5">
          <Link href={localePath(locale, "/")} className="text-[0.65rem] font-bold uppercase tracking-[0.24em] text-[#c78a3a] transition-colors hover:text-[#dca45c]">← {text.back}</Link>
          <LanguageSwitcher currentLocale={locale} />
        </div>
        <header className="mt-12 border-b border-white/10 pb-10">
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-[#c78a3a]">{text.eyebrow}</p>
          <h1 className="mt-4 font-serif text-5xl tracking-[-0.04em] sm:text-7xl">{text.title}</h1>
          <p className="mt-5 text-sm text-white/40">{text.updated}</p>
        </header>
        <div className="mt-12 space-y-12 text-sm leading-7 text-white/65 sm:text-base">
          <address className="not-italic">
            Alex Turow Records<br />{text.owner}: Andreas Turowski<br />Meinrad-Miltenberger-Weg 1<br />58313 Herdecke<br />{text.country}<br />
            {text.email}:{" "}<a href="mailto:andreas.turowski1966@gmail.com" className={linkClass}>andreas.turowski1966@gmail.com</a>
          </address>
          {text.sections.map(([title, paragraph]) => (
            <section key={title} className="space-y-4">
              <h2 className={headingClass}>{title}</h2>
              <p>{paragraph}</p>
            </section>
          ))}
          <p>
            <a href="https://vercel.com/legal/privacy-notice" target="_blank" rel="noopener noreferrer" className={linkClass}>Vercel Privacy Notice</a>{" · "}
            <a href="https://www.spotify.com/legal/privacy-policy/" target="_blank" rel="noopener noreferrer" className={linkClass}>Spotify Privacy Policy</a>{" · "}
            <a href="https://www.ldi.nrw.de/" target="_blank" rel="noopener noreferrer" className={linkClass}>LDI NRW</a>
          </p>
        </div>
      </div>
    </main>
  );
}

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyContent locale="en" />;
}
