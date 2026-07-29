import type { Locale } from "../i18n";

export type SongStory = {
  teaser: string;
  paragraphs: string[];
};

export const songStories: Record<Locale, Record<string, SongStory>> = {
  en: {
    "coming-home": {
      teaser:
        "Home was never a dot on a map. It has always been the people waiting there.",
      paragraphs: [
        "Home isn’t a place. Home is wherever the people you love are. For me, it’s wherever my daughter is.",
        "When I was young, I played a roadhouse not far from here and drank my share of beer there too. For plenty of lonely people, that room became a kind of home. I understand that better now than I did back then.",
        "A dog has always known this without needing it explained. Home is wherever his people are. In that way, I guess I’m a lot like my dogs. Lucky, I still think about you, old friend — even after twenty years.",
      ],
    },
    "lucky-me-and-the-mountains": {
      teaser:
        "The song tells the rescue story. The deeper truth is the promise we make when a dog gives us his whole life.",
      paragraphs: [
        "The song tells its own story, but is it really only about a dog saving a little boy? To me, it’s about the bond we choose when we bring a dog into our lives.",
        "A dog’s life is short compared with ours. During those few years, you are his whole world. He trusts you, stays beside you, and loves you more than he loves himself. That means you owe him something in return.",
        "When the day comes for him to go, you damn well stay with him. Yes, it’s hard. I know it is. But remember this: your dog knows that his final moment has come too. Should the only person beside him be the veterinarian? If you can’t make that promise, don’t get a dog. Get yourself a goldfish.",
      ],
    },
    "good-boy-in-disguise": {
      teaser:
        "Growing up meant learning that being a good man mattered far more than looking like a tough one.",
      paragraphs: [
        "I behaved badly as a teenager. I wanted to belong to the cool crowd, even though it never really fit me. I did things only because I was trying to become somebody I wasn’t.",
        "One day a girl told me, “This isn’t who you are. You’re putting on an act.” If I’m honest, those words didn’t change me overnight. Life did. Once I left school and started working, I learned quickly what responsibility really meant. I simply grew up.",
        "I spent plenty of years rebelling against my father, only to become at least partly the man he was: a good man. There’s more worth in that than there ever was in trying to be a “real man.”",
      ],
    },
    "i-wanna-be-free": {
      teaser:
        "The open road called when life felt heaviest. Alex heard it — and chose to keep the promises he had made.",
      paragraphs: [
        "I became a father in my mid-twenties. It was wonderful then, and it still is. But those were hard years. We lived in a rented house in town, which never felt right to me. I worked long hours and, on top of that, built a house on my family’s land closer to the mountains. Some days I was simply exhausted.",
        "That was when I started imagining myself climbing onto my motorcycle and heading west. I didn’t do it. I had made a promise to my daughter and my wife, and I kept it. “I Wanna Be Free” gives that temptation a voice; it isn’t the story of what I actually chose.",
        "I think most of us have thoughts like that sometimes. What says something about us is whether we turn the urge into action. Still, every now and then I wonder whether that rattling old bike of mine would have made it all the way to the Pacific.",
      ],
    },
  },
  de: {
    "coming-home": {
      teaser:
        "Zuhause war nie nur ein Punkt auf der Landkarte. Es waren immer die Menschen, die dort auf Alex warteten.",
      paragraphs: [
        "Zuhause ist kein Ort. Zuhause ist da, wo die Menschen sind, die du liebst. Für mich ist es dort, wo meine Tochter ist.",
        "Als ich jung war, spielte ich oft in einem Roadhouse hier in der Nähe — und das eine oder andere Bier habe ich dort auch getrunken. Für viele einsame Menschen war dieser Laden so etwas wie ein Zuhause. Heute verstehe ich das besser als damals.",
        "Ein Hund weiß das ganz von selbst. Sein Zuhause ist immer dort, wo seine Menschen sind. In dieser Hinsicht bin ich meinen Hunden wohl ziemlich ähnlich. Lucky, ich denke noch immer an dich, mein alter Freund — auch nach zwanzig Jahren.",
      ],
    },
    "lucky-me-and-the-mountains": {
      teaser:
        "Der Song erzählt von der Rettung. Dahinter steht aber auch das Versprechen, das wir geben, wenn ein Hund uns sein ganzes Leben schenkt.",
      paragraphs: [
        "Der Song erzählt seine Geschichte eigentlich selbst. Aber geht es wirklich nur um einen Hund, der einen kleinen Jungen rettet? Für mich geht es um die enge Verbindung, auf die wir uns einlassen, wenn wir einen Hund bei uns aufnehmen.",
        "Das Leben eines Hundes ist kurz im Vergleich zu unserem. In diesen wenigen Jahren bist du seine ganze Welt. Er vertraut dir, bleibt an deiner Seite und liebt dich mehr als sich selbst. Dafür bist du ihm etwas schuldig.",
        "Wenn der Tag kommt, an dem er gehen muss, dann bleibst du verdammt noch mal bei ihm. Ja, das ist hart. Ich weiß es. Aber denk daran: Auch dein Hund spürt, dass sein letzter Augenblick gekommen ist. Soll dann wirklich nur der Tierarzt bei ihm sein? Wenn du dieses Versprechen nicht geben kannst, nimm keinen Hund zu dir. Kauf dir einen Goldfisch.",
      ],
    },
    "good-boy-in-disguise": {
      teaser:
        "Erwachsen zu werden bedeutete für Alex zu begreifen, dass ein guter Mann zu sein wichtiger ist, als wie ein harter Kerl auszusehen.",
      paragraphs: [
        "Als Teenager habe ich mich ziemlich danebenbenommen. Ich wollte unbedingt zu den Coolen gehören, obwohl das eigentlich gar nicht zu mir passte. Ich tat Dinge nur, weil ich jemand sein wollte, der ich nicht war.",
        "Eines Tages sagte ein Mädchen zu mir: „So bist du doch gar nicht. Du spielst nur eine Rolle.“ Wenn ich ehrlich bin, hat mich dieser Satz nicht über Nacht verändert. Das hat das Leben erledigt. Als ich die Schule verlassen hatte und zu arbeiten begann, lernte ich sehr schnell, was Verantwortung bedeutet. Ich wurde einfach erwachsen.",
        "Ich hatte jahrelang gegen meinen Vater rebelliert und wurde am Ende doch zumindest teilweise zu dem Mann, der er gewesen war: zu einem guten Kerl. Das ist sehr viel mehr wert, als unbedingt ein „echter Mann“ sein zu wollen.",
      ],
    },
    "i-wanna-be-free": {
      teaser:
        "Als das Leben besonders schwer wurde, lockte die offene Straße. Alex hörte ihren Ruf — und hielt trotzdem seine Versprechen.",
      paragraphs: [
        "Mit Mitte zwanzig wurde ich Vater. Das war damals wundervoll und ist es bis heute. Aber es waren auch harte Jahre. Wir lebten in einem gemieteten Haus in der Stadt, und damit fühlte ich mich nie richtig wohl. Ich arbeitete viel und baute nebenbei auf dem Grundstück meiner Familie ein Haus, näher an den Bergen. An manchen Tagen war ich einfach nur erschöpft.",
        "Damals stellte ich mir manchmal vor, auf mein Motorrad zu steigen und einfach nach Westen zu fahren. Getan habe ich es nicht. Ich hatte meiner Tochter und meiner Frau etwas versprochen, und daran hielt ich mich. „I Wanna Be Free“ gibt dieser Versuchung eine Stimme. Der Song erzählt nicht, wie ich mich tatsächlich entschieden habe.",
        "Ich glaube, solche Gedanken kennt fast jeder. Was uns ausmacht, ist die Frage, ob wir aus dem Wunsch Wirklichkeit werden lassen. Trotzdem frage ich mich manchmal noch, ob meine klapprige alte Maschine es wohl bis zum Pazifik geschafft hätte.",
      ],
    },
  },
  fr: {
    "coming-home": {
      teaser:
        "Le foyer n’a jamais été un point sur une carte. Il a toujours été fait des personnes qui nous y attendent.",
      paragraphs: [
        "Le foyer n’est pas un lieu. Il est là où se trouvent les gens que vous aimez. Pour moi, il est là où se trouve ma fille.",
        "Quand j’étais jeune, je jouais souvent dans un roadhouse près d’ici — et j’y ai aussi bu quelques bières. Pour beaucoup de gens seuls, cet endroit était devenu une sorte de foyer. Je le comprends mieux aujourd’hui qu’à l’époque.",
        "Un chien le sait sans qu’on ait besoin de le lui expliquer. Son foyer est toujours là où sont les siens. De ce point de vue, je ressemble sans doute beaucoup à mes chiens. Lucky, je pense encore à toi, mon vieil ami — même vingt ans plus tard.",
      ],
    },
    "lucky-me-and-the-mountains": {
      teaser:
        "La chanson raconte le sauvetage. Mais elle parle surtout de la promesse que nous faisons lorsqu’un chien nous offre toute sa vie.",
      paragraphs: [
        "La chanson raconte déjà son histoire. Mais parle-t-elle vraiment seulement d’un chien qui sauve un petit garçon ? Pour moi, elle parle du lien que nous choisissons de créer lorsque nous accueillons un chien dans notre vie.",
        "La vie d’un chien est courte comparée à la nôtre. Pendant ces quelques années, vous êtes son monde entier. Il vous fait confiance, reste à vos côtés et vous aime plus que lui-même. En retour, vous lui devez quelque chose.",
        "Quand vient le jour de son départ, vous restez avec lui, bon sang. Oui, c’est dur. Je le sais. Mais rappelez-vous que votre chien comprend lui aussi que son dernier instant est arrivé. Le vétérinaire devrait-il être la seule personne près de lui ? Si vous ne pouvez pas faire cette promesse, ne prenez pas de chien. Achetez-vous un poisson rouge.",
      ],
    },
    "good-boy-in-disguise": {
      teaser:
        "Grandir, c’était comprendre qu’être un homme bon avait bien plus de valeur que jouer les durs.",
      paragraphs: [
        "À l’adolescence, je me comportais mal. Je voulais faire partie de la bande des garçons populaires, même si ce rôle ne me correspondait pas. Je faisais certaines choses uniquement pour devenir quelqu’un que je n’étais pas.",
        "Un jour, une fille m’a dit : « Tu n’es pas comme ça. Tu joues un rôle. » Pour être honnête, cette phrase ne m’a pas transformé du jour au lendemain. C’est la vie qui s’en est chargée. Après l’école, en commençant à travailler, j’ai vite appris ce que signifiait vraiment assumer ses responsabilités. J’ai tout simplement grandi.",
        "J’ai passé des années à me rebeller contre mon père, pour finalement devenir au moins en partie l’homme qu’il était : un homme bon. Cela vaut bien plus que de chercher à passer pour un « vrai mec ».",
      ],
    },
    "i-wanna-be-free": {
      teaser:
        "Quand la vie pesait le plus lourd, la route appelait. Alex l’a entendue — puis il a choisi de tenir ses promesses.",
      paragraphs: [
        "Je suis devenu père vers vingt-cinq ans. C’était merveilleux, et cela l’est toujours. Mais ces années étaient difficiles. Nous habitions une maison louée en ville, où je ne me suis jamais vraiment senti à ma place. Je travaillais beaucoup et, en parallèle, je construisais une maison sur le terrain familial, plus près des montagnes. Certains jours, j’étais simplement épuisé.",
        "C’est alors que je me suis mis à imaginer que je montais sur ma moto pour partir vers l’ouest. Je ne l’ai pas fait. J’avais fait une promesse à ma fille et à ma femme, et je l’ai tenue. « I Wanna Be Free » donne une voix à cette tentation ; ce n’est pas le récit de la décision que j’ai réellement prise.",
        "Je crois que nous avons presque tous ce genre de pensée un jour. Ce qui révèle qui nous sommes, c’est le choix d’y céder ou non. Malgré tout, je me demande encore parfois si ma vieille bécane brinquebalante aurait réussi à atteindre le Pacifique.",
      ],
    },
  },
  es: {
    "coming-home": {
      teaser:
        "El hogar nunca fue un punto en el mapa. Siempre fueron las personas que esperaban allí.",
      paragraphs: [
        "El hogar no es un lugar. Está donde están las personas que quieres. Para mí, está donde esté mi hija.",
        "De joven tocaba a menudo en un roadhouse de los alrededores y también me tomé allí alguna que otra cerveza. Para mucha gente que se sentía sola, aquel local era una especie de hogar. Ahora lo entiendo mejor que entonces.",
        "Un perro siempre lo ha sabido sin necesidad de explicaciones. Su hogar está donde están los suyos. En ese sentido, supongo que me parezco bastante a mis perros. Lucky, todavía pienso en ti, viejo amigo, incluso después de veinte años.",
      ],
    },
    "lucky-me-and-the-mountains": {
      teaser:
        "La canción cuenta el rescate. En el fondo habla de la promesa que hacemos cuando un perro nos entrega toda su vida.",
      paragraphs: [
        "La canción ya cuenta su propia historia. Pero ¿se trata únicamente de un perro que salva a un niño? Para mí habla del vínculo que elegimos cuando acogemos a un perro en nuestra vida.",
        "La vida de un perro es corta comparada con la nuestra. Durante esos pocos años, tú eres todo su mundo. Confía en ti, permanece a tu lado y te quiere más que a sí mismo. Por eso le debes algo a cambio.",
        "Cuando llegue el día de su partida, te quedas a su lado, maldita sea. Sí, es duro. Lo sé. Pero recuerda que tu perro también sabe que ha llegado su último momento. ¿De verdad debería estar solo con el veterinario? Si no puedes hacer esa promesa, no tengas perro. Cómprate un pez de colores.",
      ],
    },
    "good-boy-in-disguise": {
      teaser:
        "Madurar significó comprender que ser un buen hombre valía mucho más que aparentar ser un tipo duro.",
      paragraphs: [
        "De adolescente me portaba bastante mal. Quería formar parte del grupo de los populares, aunque en realidad aquello no iba conmigo. Hacía cosas solo porque intentaba ser alguien que no era.",
        "Un día una chica me dijo: «Tú no eres así. Solo estás fingiendo». Si soy sincero, aquellas palabras no me cambiaron de la noche a la mañana. Lo hizo la vida. Cuando dejé la escuela y empecé a trabajar, aprendí muy deprisa lo que significaba asumir responsabilidades. Simplemente maduré.",
        "Pasé muchos años rebelándome contra mi padre y al final terminé convirtiéndome, al menos en parte, en el hombre que él había sido: un buen hombre. Eso vale mucho más que intentar ser un «hombre de verdad».",
      ],
    },
    "i-wanna-be-free": {
      teaser:
        "Cuando la vida pesaba más, la carretera abierta llamó. Alex la escuchó y eligió mantener sus promesas.",
      paragraphs: [
        "Fui padre a mediados de mis veinte. Fue maravilloso y todavía lo es. Pero aquellos años fueron difíciles. Vivíamos de alquiler en una casa de la ciudad y yo nunca terminé de sentirme a gusto allí. Trabajaba muchas horas y, además, construía una casa en las tierras de mi familia, más cerca de las montañas. Algunos días estaba sencillamente agotado.",
        "Fue entonces cuando empecé a imaginar que subía a la moto y conducía hacia el oeste. No lo hice. Había hecho una promesa a mi hija y a mi esposa, y la cumplí. «I Wanna Be Free» le da voz a aquella tentación; no cuenta la decisión que tomé en realidad.",
        "Creo que casi todos tenemos pensamientos así alguna vez. Lo que dice algo de nosotros es si convertimos ese impulso en acción. Aun así, de vez en cuando me pregunto si mi vieja moto destartalada habría llegado hasta el Pacífico.",
      ],
    },
  },
};
