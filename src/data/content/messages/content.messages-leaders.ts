import type { BusinessPerson } from "@/data/types/type.business-person";
import type { RichText } from "@/data/types/type.business-rich-text";
import { Routes } from "@/data/routes";
import type { BusinessHeaderSectionProps } from "@/data/types/type.business-header-section";

export const messagesHeaderContent = {
  crumb: [{ label: "Home", href: Routes.home }, { label: "Messages" }],
  eyebrow: "Leadership",
  heading: "Messages",
  description: "Guidance and vision from the leadership of Garrison Academy Kharian Cantt.",
} satisfies BusinessHeaderSectionProps;

export const messagesNoteContent = [
  { text: "Each message displays the leader's " },
  { text: "name, designation and full message", bold: true },
  { text: " \u2014 managed from the admin panel and updated whenever leadership changes." },
] satisfies RichText;

export const messagesLeadersContent: readonly BusinessPerson[] = [
  {
    initials: "BM",
    name: "Major General Bilal Mahmud",
    role: "Chairman BOGs GAK",
    message: [
      "Civilizations are not built in parliaments, boardrooms, or battlefields alone. They are first shaped in classrooms, where young minds learn not only to acquire knowledge but also to distinguish truth from falsehood, principle from convenience, and responsibility from entitlement. The destiny of a nation is ultimately determined by the quality of thought, character, and judgement it nurtures in its young people.",
      "In an age where information is abundant but wisdom is scarce, education must rise above the transmission of facts. Its higher purpose is to cultivate disciplined minds, independent thinkers, compassionate hearts, and individuals who possess the moral courage to do what is right, even when it is difficult. Such qualities cannot be measured by examinations alone, yet they define the leaders, innovators, and citizens upon whom the future depends.",
      "Garrison Academy is committed to this enduring purpose. While we celebrate academic distinction and co-curricular excellence, we remain equally committed to fostering integrity, resilience, respect, and a sense of service. We believe that true education equips young people not merely to earn a livelihood, but to lead meaningful lives, strengthen their communities, and contribute positively to the progress of the nation.",
      "Institutions of learning occupy a unique place in society because they shape not only the present generation but the generations that follow. Every decision we make — the standards we uphold, the values we nurture, the questions we encourage, and the example we set — extends far beyond the boundaries of the classroom. Such a responsibility calls for both vision and stewardship. It demands that we preserve what is timeless, embrace what is transformative, and remain unwavering in our commitment to developing individuals who will lead with wisdom, serve with integrity, and contribute with purpose.",
      "As we reflect upon another productive year, let us renew our commitment to the ideals that define this institution. The world will continue to change, presenting new opportunities and uncertainties. Yet the timeless virtues of integrity, wisdom, discipline, and service will remain the foundation upon which enduring success is built. If we remain faithful to these principles, our students will not simply adapt to the future; they will help shape it.",
      "I extend my sincere appreciation to every member of the Garrison Academy family for their dedication and wish our students every success as they continue their journey of learning, leadership, and service.",
    ],
  },
  {
    initials: "AA",
    name: "Brig Aezaz Aizad Amin",
    role: "Vice Chairman BOGs GAK",
    message: [
      "Every civilization is ultimately defined not by the wealth it accumulates, the technology it invents, or the power it commands, but by the quality of thought it cultivates in its people. It is here that education assumes its highest purpose. The essential question before every generation is not merely, “What should our children know?” but rather, “What kind of minds — and what kind of character — should they possess?”",
      "We inhabit an age in which information is abundant, opinions are instantaneous, and certainty is often mistaken for wisdom. In such an environment, the role of a school extends far beyond the transmission of knowledge. Its noblest responsibility is to cultivate intellectual discernment — the capacity to question assumptions, interrogate evidence, reason with clarity, and pursue truth with both humility and courage.",
      "History reminds us that genuine progress has seldom emerged from unquestioning conformity. Every transformative idea began as a challenge to accepted orthodoxy. Education, therefore, must not produce passive recipients of inherited ideas; it must develop independent thinkers who possess both the discipline to analyse and the wisdom to discern.",
      "Yet intellect, however refined, is insufficient in isolation. Knowledge without conscience can become manipulation; intelligence without integrity can become exploitation. The true measure of an educated individual lies not merely in intellectual sophistication but in the moral judgment that governs its application. Wisdom begins where knowledge is guided by principle.",
      "At Garrison Academy, we aspire to nurture individuals whose curiosity transcends the prescribed curriculum, whose confidence is tempered by intellectual humility, whose convictions are grounded in evidence rather than rhetoric, and whose leadership is defined by service rather than status. Such an endeavour flourishes through a partnership founded upon mutual trust, shared purpose, and collective responsibility between parents and school.",
      "To our students: cultivate the discipline to doubt your own assumptions before you question those of others. Read beyond what is prescribed. Listen before you respond. Welcome ideas that challenge your convictions, for intellectual growth rarely occurs within the comfort of certainty.",
      "May Almighty Allah continue to bless Garrison Academy with wisdom in its vision, excellence in its endeavour, and integrity in its purpose, and grant our students enlightened minds, steadfast character, and the resolve to employ their knowledge in the service of humanity.",
    ],
  },
  {
    initials: "SR",
    name: "Mrs Shahida Rehman",
    role: "Principal GAK",
    message: [
      "One day, our students will leave these classrooms for places we may never see — universities, workplaces, communities, and families where no examination paper will tell them what to do, no teacher will stand beside them, and no textbook will provide the answer. In those moments, what will guide them?",
      "Will they have the discipline to think independently when opinions are louder than evidence? Will they possess the integrity to choose what is right over what is easy? Will they adapt with confidence when the familiar no longer exists? Will they recognise that lasting success is built not through individual brilliance alone, but through trust, collaboration, and shared purpose? These questions define the real work of a school.",
      "At Garrison Academy, we believe our responsibility extends far beyond imparting knowledge. Facts may become outdated, technology will continue to evolve, and professions will transform in ways we cannot yet predict. Yet the ability to reason with clarity, to lead with character, to embrace change with resilience, and to work alongside others with humility will remain timeless.",
      "This belief is reflected in our vision: to develop capable individuals who think independently, act responsibly, and thrive confidently in a rapidly evolving world. It invites every member of our community to embrace four commitments: to Think Critically, to Act Righteously, to Adapt Bravely, and to Work Together. These are not merely words; they are the daily habits that shape character and prepare our students for the future they will help create.",
      "A school’s greatest accomplishment is not the number of trophies in its corridors or the results published at year’s end. It is the kind of people who walk out of its gates — individuals whose knowledge is guided by wisdom, whose ambition is balanced by responsibility, and whose success contributes to something greater than themselves.",
      "The future is not something we wait for; it is something we shape — one learner, one decision, and one meaningful action at a time.",
    ],
  },
];
