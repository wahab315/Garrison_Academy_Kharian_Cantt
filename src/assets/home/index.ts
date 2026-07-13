import type { IconComponent } from "@/assets/icon.types";

import IconAbout from "@/assets/home/icon.about";
import IconAdmissions from "@/assets/home/icon.admissions";
import IconAlumni from "@/assets/home/icon.alumni";
import IconBoard from "@/assets/home/icon.board";
import IconCambridge from "@/assets/home/icon.cambridge";
import IconChatbot from "@/assets/home/icon.chatbot";
import IconCheck from "@/assets/home/icon.check";
import IconContact from "@/assets/home/icon.contact";
import IconDiscipline from "@/assets/home/icon.discipline";
import IconDownloads from "@/assets/home/icon.downloads";
import IconExternal from "@/assets/home/icon.external";
import IconFaculty from "@/assets/home/icon.faculty";
import IconFaqs from "@/assets/home/icon.faqs";
import IconFeedback from "@/assets/home/icon.feedback";
import IconHr from "@/assets/home/icon.hr";
import IconLaurel from "@/assets/home/icon.laurel";
import IconLibrary from "@/assets/home/icon.library";
import IconLms from "@/assets/home/icon.lms";
import IconMessages from "@/assets/home/icon.messages";
import IconOrganogram from "@/assets/home/icon.organogram";
import IconPathway from "@/assets/home/icon.pathway";
import IconQuickLinks from "@/assets/home/icon.quick-links";
import IconScholarship from "@/assets/home/icon.scholarship";
import IconSports from "@/assets/home/icon.sports";
import IconTorch from "@/assets/home/icon.torch";
import IconUniform from "@/assets/home/icon.uniform";

/**
 * The icon registry. Content files reference an icon by *key* (a string, so
 * content stays plain serialisable data); the rendering component resolves the
 * key to a component through this map. This is what lets us drop emoji without
 * putting JSX in the content layer.
 */
export const HomeIcons = {
  about: IconAbout,
  admissions: IconAdmissions,
  alumni: IconAlumni,
  board: IconBoard,
  cambridge: IconCambridge,
  chatbot: IconChatbot,
  check: IconCheck,
  contact: IconContact,
  discipline: IconDiscipline,
  downloads: IconDownloads,
  external: IconExternal,
  faculty: IconFaculty,
  faqs: IconFaqs,
  feedback: IconFeedback,
  hr: IconHr,
  laurel: IconLaurel,
  library: IconLibrary,
  lms: IconLms,
  messages: IconMessages,
  organogram: IconOrganogram,
  pathway: IconPathway,
  quickLinks: IconQuickLinks,
  scholarship: IconScholarship,
  sports: IconSports,
  torch: IconTorch,
  uniform: IconUniform,
} satisfies Record<string, IconComponent>;

export type HomeIconKey = keyof typeof HomeIcons;

/** Renders the icon for a key. Central so every call site draws it the same way. */
export function homeIcon(key: HomeIconKey): IconComponent {
  return HomeIcons[key];
}
