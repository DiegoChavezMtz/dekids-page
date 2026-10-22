export type TeamMember = {
  id: string;
  name: string;
  role?: string;
  bio?: string;
  /** Ruta bajo /public, p. ej. "/team/marco.jpg". Sin foto se muestra un avatar con iniciales. */
  photo?: string;
  featured?: boolean;
};
