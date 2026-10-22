import type { TeamMember } from "@/features/about/types";

// Completa role, bio y photo de cada integrante. Lo que esté vacío no se muestra.
export const TEAM_MEMBERS: TeamMember[] = [
  { id: "marco", name: "Marco Velázquez", role: "Fundador y CEO", featured: true },
  { id: "diego", name: "Diego" },
  { id: "ximena-1", name: "Ximena" },
  { id: "axel", name: "Axel" },
  { id: "yess", name: "Yess" },
  { id: "ximena-2", name: "Ximena" },
];

export function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export const STORY = {
  eyebrow: "Pasar de las quejas, a las propuestas y acciones",
  text: "Después de escuchar que la mayoría de personas cree que recibe una mala educación tradicional y escuchar frases como «Cuando salgas de la escuela, el mundo laboral será muy distinto», a Marco Velázquez le voló la cabeza y se dio cuenta (desde su percepción) que la raíz de todos los problemas en la sociedad, es la educación.",
  href: "/el-comienzo/",
};

export const MISSION =
  "Mejorar el statu quo a través de experiencias de aprendizaje accionando la mejor versión de cada uno.";

export const VISION = "Ser la revolución constante de educación que el mundo necesita.";

export const VALUES_INTRO =
  "Todo el equipo de Dekids tiene claro que el valor principal es ayudar a todos los niños y niñas del mundo a realizar sus sueños. Consideramos fundamental respetarlos y aprender junto con ellos para que puedan ser personas felices que hagan de nuestro mundo un mejor lugar.";

export const VALUES = [
  "Valoramos a cada dekidser",
  "Transmitimos pasión",
  "Creamos experiencias únicas",
  "Provocamos el cambio",
  "Potencializamos los recursos",
  "Pensamos fuera de la caja",
];
