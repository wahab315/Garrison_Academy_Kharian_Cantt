import { Assets } from "@/data/assets";
import { Routes } from "@/data/routes";

export const homePrincipalMessageContent = {
  eyebrow: "From the Principal's desk",
  heading: "We build the child,\nnot only the result.",
  // Each string is one paragraph. First person, plain-spoken -- this should
  // read like the Principal actually said it.
  message: [
    "Parents hand us the most important years of their children's lives, and we do not take that lightly. Marks matter, and our board results show we take them seriously. But a confident, honest, well-mannered young person is what a family carries home long after the certificate is framed.",
    "The best way to know a school is to walk through it. Come and see the campus, sit in on a class, and meet the people who will teach your child before you decide.",
  ],
  principal: {
    name: "Mrs Shahida Rehman",
    role: "Principal, Garrison Academy Kharian Cantt",
    image: Assets.home.principal,
    imageAlt: "Principal, Garrison Academy Kharian Cantt",
  },
  cta: { label: "Read all messages", href: Routes.messages },
} as const;
