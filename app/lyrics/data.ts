export type LyricSection = {
  label: string;
  lines: string[];
};

export type Song = {
  slug: string;
  title: string;
  number: string;
  summary: string;
  sections: LyricSection[];
};

export const album = {
  title: "Coming Home",
  artist: "Alex C. Turner",
  theme: "Home isn't a place. It's the people you return to.",
};

export const songs: Song[] = [
  {
    slug: "coming-home",
    title: "Coming Home",
    number: "01",
    summary: "Every mile leads back to the person who makes a place feel like home.",
    sections: [
      {
        label: "Verse 1",
        lines: [
          "I've chased the sun across the ocean",
          "Traded stars for city lights",
          "Every road kept leading somewhere",
          "Never back to where you are",
        ],
      },
      {
        label: "Verse 2",
        lines: [
          "Boarding pass in my hand",
          "One last runway into blue",
          "Funny how the world gets smaller",
          "Every mile brings me to you",
        ],
      },
      {
        label: "Pre-Chorus",
        lines: [
          "One more highway...",
          "One more town...",
          "One more sunset going down...",
          "Just a few more miles...",
        ],
      },
      {
        label: "Chorus",
        lines: [
          "Ain't no better feeling than coming home",
          "Where these blue skies know my name",
          "Ain't no better feeling than coming home",
          "Nothing else can feel the same",
          "Every mile was worth the ride",
          "My heart still knows the way",
        ],
      },
      {
        label: "Verse 3",
        lines: [
          "Blue Ridge rising through the windshield",
          "Windows down, that mountain breeze",
          "Every mile feels more familiar",
          "Like this road remembers me",
        ],
      },
      {
        label: "Verse 4",
        lines: [
          "There's that mailbox by the old oak tree",
          "Porch light shining bright",
          "Been a long time coming, Lord",
          "Everything's gonna be alright",
        ],
      },
      {
        label: "Pre-Chorus",
        lines: [
          "One more highway...",
          "One more town...",
          "One more sunset going down...",
          "Just a few more miles...",
        ],
      },
      {
        label: "Chorus",
        lines: [
          "Ain't no better feeling than coming home",
          "Where these blue skies know my name",
          "Ain't no better feeling than coming home",
          "Nothing else can feel the same",
          "Every mile was worth the ride",
          "My heart still knows the way",
        ],
      },
      {
        label: "Bridge",
        lines: [
          "Turns out home ain't just a place",
          "It never was, now I see",
          "It's the little arms around my neck",
          "Waiting there for me",
        ],
      },
      {
        label: "Final Chorus",
        lines: [
          "Ain't no better feeling than coming home",
          "Where these blue skies know my name",
          "Ain't no better feeling than coming home",
          "Nothing else can feel the same",
          "Every mile was worth the ride",
          "My heart still knows the way",
          "",
          "Yeah,",
          "My heart still knows the way",
          "My heart still knows the way",
          "that leads me back to you",
        ],
      },
    ],
  },
  {
    slug: "lucky-me-and-the-mountains",
    title: "Lucky, Me And The Mountains",
    number: "02",
    summary: "A wrong turn, a faithful dog, and a lesson that never left.",
    sections: [
      {
        label: "Verse 1",
        lines: [
          "Daddy had to work that day",
          'Said, "We\'ll go another time"',
          "I was eight and mad as hell",
          "Couldn't get it off my mind",
          "Lucky followed close behind",
          "Like he always used to do",
          "I saw a shortcut through the woods",
          "So I left the trail we knew",
        ],
      },
      {
        label: "Pre-Chorus",
        lines: [
          "Thought I knew a better way",
          "Then the daylight slipped away",
          "Every sound got twice as loud",
          "And the dark came closing in",
        ],
      },
      {
        label: "Chorus",
        lines: [
          "Lucky, me and the mountains",
          "One wrong turn, one faithful soul",
          "Lucky, me and the mountains",
          "He knew the way when I got lost",
          "He never left my side",
          "Guess lucky me.",
        ],
      },
      {
        label: "Verse 2",
        lines: [
          "Lost the trail by setting sun",
          "Every tree looked just alike",
          "Heard things moving in the dark",
          "Kept that fire burning bright",
          "Lucky never left my side",
          "Eyes fixed somewhere I couldn't see",
          "Morning finally came around",
          "Lucky led me home again",
        ],
      },
      {
        label: "Pre-Chorus",
        lines: [
          "Thought I knew a better way",
          "Then the daylight slipped away",
          "Every sound got twice as loud",
          "And the dark came closing in",
        ],
      },
      {
        label: "Chorus",
        lines: [
          "Lucky, me and the mountains",
          "One wrong turn, one faithful soul",
          "Lucky, me and the mountains",
          "He knew the way when I got lost",
          "He never left my side",
          "Guess lucky me.",
        ],
      },
      {
        label: "Bridge",
        lines: [
          "Lucky made it seven more years",
          "Then one fall, he slowed right down",
          "Fifteen was too young to learn",
          "Some goodbyes don't make a sound",
          "Still ain't walked those mountain trails",
          "Without a dog close by my side",
          "Some lessons stay with you for life...",
          "Guess Lucky never really left.",
        ],
      },
      {
        label: "Final Chorus",
        lines: [
          "Lucky, me and the mountains",
          "One wrong turn, one faithful soul",
          "Lucky, me and the mountains",
          "He knew the way when I got lost",
          "He never left my side",
          "Guess lucky me.",
        ],
      },
    ],
  },
  {
    slug: "good-boy-in-disguise",
    title: "Good Boy In Disguise",
    number: "03",
    summary: "One honest voice sees through the leather, the lies, and the act.",
    sections: [
      {
        label: "Verse 1",
        lines: [
          "Black leather hanging on my back",
          "Cold beer waiting after class",
          "Running wild with the wrong crowd",
          "Acting tough, talking loud",
          "I wore a smile that wasn't mine",
          "Just trying hard to fit the part",
          "Then she walked into that hallway...",
          "And looked right through my heart",
        ],
      },
      {
        label: "Pre-Chorus",
        lines: [
          "One look cut right through my pride",
          "Like she knew what I tried to hide",
          "One simple smile, one simple line...",
          "Changed this heart of mine",
        ],
      },
      {
        label: "Chorus",
        lines: [
          "She looked me in the eyes",
          '"You\'re a good boy in disguise"',
          "I just laughed and walked on by",
          '"You\'re a good boy in disguise"',
          "Behind this leather and these lies",
          "She found the man I was meant to be",
        ],
      },
      {
        label: "Verse 2",
        lines: [
          "Stopped chasing Friday nights",
          "Left those cheap beers in the dust",
          "The leather jacket stayed the same",
          "But I learned who I could trust",
          "One by one those friends were gone",
          "Didn't chase them anyway",
          "Funny how one honest voice...",
          "Can change a man's whole way",
        ],
      },
      {
        label: "Pre-Chorus",
        lines: [
          "One look cut right through my pride",
          "Like she knew what I tried to hide",
          "One simple smile, one simple line...",
          "Changed this heart of mine",
        ],
      },
      {
        label: "Chorus",
        lines: [
          "She looked me in the eyes",
          '"You\'re a good boy in disguise"',
          "I just laughed and walked on by",
          '"You\'re a good boy in disguise"',
          "Behind this leather and these lies",
          "She found the man I was meant to be",
        ],
      },
      {
        label: "Bridge",
        lines: [
          "Caught some kids behind the gym",
          "Picking on the new kid again",
          "Those were faces that I knew",
          "Back when trouble was my choice",
          "This time I stood on the other side",
          "Threw the first punch for something right",
          "She just smiled when it was done...",
          "Like she'd known I'd win that fight",
        ],
      },
      {
        label: "Final Chorus",
        lines: [
          "She looked me in the eyes",
          '"You\'re a good boy in disguise"',
          "I just laughed and walked on by",
          '"You\'re a good boy in disguise"',
          "Behind this leather and these lies",
          "She found the man I chose to be",
        ],
      },
    ],
  },
  {
    slug: "i-wanna-be-free",
    title: "I Wanna Be Free",
    number: "04",
    summary: "The pull of the open road and the hope of finding the way back home.",
    sections: [
      {
        label: "Verse 1",
        lines: [
          "Goodbye, honey",
          "I'm back on the road",
          "I ain't got no money",
          "And I'm carrying this load",
          "",
          "Goodbye, my love",
          "I'm back on the road",
          "It ain't easy for me",
          "But I wanna be free",
        ],
      },
      {
        label: "Chorus",
        lines: [
          "I wanna be free",
          "I wanna be free",
          "I wanna be free",
          "I'll follow my way",
          "Down this winding road",
          "",
          "But maybe someday",
          "I'll find my way back home",
        ],
      },
      {
        label: "Verse 2",
        lines: [
          "Goodbye, darling",
          "I'm heading for my goal",
          "Hard times may follow",
          "But I can't turn back",
          "",
          "Goodbye, baby",
          "I don't know my way",
          "Feels like I'm going crazy",
          "But I couldn't stay",
        ],
      },
      {
        label: "Chorus",
        lines: [
          "I wanna be free",
          "I wanna be free",
          "I wanna be free",
          "I'll follow my way",
          "Down this winding road",
          "",
          "But maybe someday",
          "I'll find my way back home",
        ],
      },
      {
        label: "Bridge",
        lines: [
          "The days will be hard",
          "And the nights so long",
          "But I feel in my heart",
          "You'll be strong",
          "",
          "I hope you understand",
          "It's not you, nothing's wrong",
          "I just have to go",
          "Before I lose myself",
        ],
      },
      {
        label: "Chorus",
        lines: [
          "I wanna be free",
          "I wanna be free",
          "I wanna be free",
          "I'll follow my way",
          "Down this winding road",
          "",
          "But maybe someday",
          "I'll find my way back home",
        ],
      },
    ],
  },
];

export function getSong(slug: string) {
  return songs.find((song) => song.slug === slug);
}
