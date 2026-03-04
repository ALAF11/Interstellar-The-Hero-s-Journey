/* DATA - the 12 stages of the Hero's Journey */

const stages = [
  {
    num: 1,
    icon: 'wheat',
    title: "Ordinary World",
    description: "Cooper lives on an Earth in environmental collapse, covered by dust storms. He is a farmer out of necessity, but he dreams of space. He lives with his children, Tom and Murph, and his father-in-law, Donald. The world is slowly dying.",
    characters: ["Cooper", "Murph (child)", "Tom", "Donald"],
    emotion: "Melancholy & Longing",
    tone: "A man built for the stars, trapped in the dirt, haunted by a future he can't yet see."
  },
  {
    num: 2,
    icon: 'compass',
    title: "Call to Adventure",
    description: "Cooper and Murph discover mysterious coordinates in her bedroom, which lead them to a secret NASA base. There, Cooper is invited to pilot a mission through a wormhole to find a new home for humanity.",
    characters: ["Cooper", "Murph", "Professor Brand"],
    emotion: "Wonder & Urgency",
    tone: "The universe sends a message, and only Cooper holds the key to decode it."
  },
  {
    num: 3,
    icon: 'x-circle',
    title: "Refusal of the Call",
    description: "Cooper hesitates deeply. He has children, especially Murph, to whom he is very attached. Leaving them behind is emotionally devastating. Murph becomes furious at her father’s departure, and this tension is the emotional core of the film.",
    characters: ["Cooper", "Murph"],
    emotion: "Heartbreak & Guilt",
    tone: "The hardest goodbye ever filmed, a father choosing the world over his child."
  },
  {
    num: 4,
    icon: 'user',
    title: "Meeting the Mentor",
    description: "Professor Brand serves as the mentor, giving Cooper purpose, scientific context, and the mission itself. NASA and science also act as mentors in this case. There is also a second, more symbolic mentor: Murph’s “ghost” (which we later understand to be Cooper himself from the future).",
    characters: ["Professor Brand", "TARS", "CASE", "Amelia Brand"],
    emotion: "Hope & Determination",
    tone: "Science as salvation, the blueprint for humanity's survival is handed over."
  },
  {
    num: 5,
    icon: 'rocket',
    title: "Crossing the First Threshold",
    description: "The Endurance departs. Cooper leaves Earth, his children, and the known world behind. By crossing the wormhole with the team, he literally enters a new world: deep space and the unknown.",
    characters: ["Cooper", "Amelia Brand", "Romilly", "Doyle", "TARS"],
    emotion: "Grief & Resolve",
    tone: "The point of no return, humanity's last gamble begins beyond the stars."
  },
  {
    num: 6,
    icon: 'shield',
    title: "Tests, Allies & Enemies",
    description: "Cooper faces several trials: Miller’s planet: flooded, with extreme gravity, where each hour equals seven years on Earth. They lose precious time. Allies: Amelia Brand, Romilly, TARS, and CASE (the robots). The enemy appears when they arrive on Mann’s planet: Dr. Mann, an apparent ally who reveals himself to be a traitor, representing the internal enemy and the human weakness of selfish survival instinct.",
    characters: ["Cooper", "Amelia Brand", "Romilly", "Doyle", "TARS"],
    emotion: "Dread & Disorientation",
    tone: "Time becomes the true enemy, every second spent is years stolen from his children."
  },
  {
    num: 7,
    icon: 'map',
    title: "Approach to the Cave",
    description: "The team must decide which planet to visit. Cooper and Amelia debate between Edmunds’ planet and Mann’s, and this decision is crucial, marking the approach to the most dangerous moment. The tension increases with the video messages showing his children growing up without him.",
    characters: ["Cooper", "Amelia Brand", "Romilly"],
    emotion: "Anguish & Desperation",
    tone: "A father watches his children's lives play out in minutes, powerless, across the cosmos."
  },
  {
    num: 8,
    icon: 'flame',
    title: "The Ordeal",
    description: "Dr. Mann’s betrayal. He tries to kill Cooper and destroys part of the Endurance. It is the lowest point: the mission seems doomed, there are deaths among the crew, and Cooper must perform a desperate maneuver to save the ship and Amelia. It is a crisis of both physical and moral survival. Cooper then makes the extreme decision to sacrifice himself by separating from the Endurance and falling into the black hole.",
    characters: ["Dr. Mann", "Cooper", "Amelia Brand", "Romilly"],
    emotion: "Betrayal & Terror",
    tone: "Humanity's worst instinct, self-preservation, nearly destroys humanity's last hope."
  },
  {
    num: 9,
    icon: 'star',
    title: "The Reward",
    description: "Cooper and Amelia manage to save the Endurance with a risky gravitational slingshot maneuver around Gargantua (the black hole). They gain enough speed to continue the mission. Inside the tesseract, Cooper realizes that he can communicate with Murph in the past through gravity. The “reward” is the crucial knowledge: he finally finds a way to transmit the quantum data that will allow humanity to be saved.",
    characters: ["Cooper", "Amelia Brand", "TARS"],
    emotion: "Sacrifice & Awe",
    tone: "A father's love, translated into orbital mechanics, defies the laws of physics."
  },
  {
    num: 10,
    icon: 'rotate-ccw',
    title: "The Road Back",
    description: "Cooper realizes that he was always the “ghost.” He transmits the quantum data through the hands of Murph’s watch. Murph understands the code, solves the gravitational equation, and humanity is able to escape Earth.",
    characters: ["Cooper", "TARS", "Future Beings"],
    emotion: "Disbelief & Revelation",
    tone: "The impossible made real, love encoded in the architecture of spacetime itself."
  },
  {
    num: 11,
    icon: 'clock',
    title: "Resurrection",
    description: "Cooper transcends time and space, is rescued near Saturn, and wakes up on a space station. It is a kind of rebirth: he survives the impossible, reunites with an elderly Murph, and sees that his sacrifice had meaning.",
    characters: ["Cooper", "Murph (adult)", "TARS"],
    emotion: "Transcendence & Catharsis",
    tone: "A father saves his daughter, armed with that love, saves the world."
  },
  {
    num: 12,
    icon: 'home',
    title: "Return with the Elixir",
    description: "Murph has solved the equation and saved humanity. Space stations now orbit Earth. Cooper then leaves to find Amelia on Edmunds’ planet. The “elixir” is twofold: the data that saved humanity, and the emotional reconciliation between father and daughter—the proof that love, human connection, and hope transcend time and space.",
    characters: ["Cooper", "Murph (elderly)", "Amelia Brand"],
    emotion: "Bittersweet Hope",
    tone: "The circle closes love transcended time, and humanity was reborn among the stars."
  }
];