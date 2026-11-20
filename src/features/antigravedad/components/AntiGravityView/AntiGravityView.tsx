import { readFile } from "node:fs/promises";
import path from "node:path";
import { AntiGravityInteractions } from "./AntiGravityInteractions";

type LandingParts = {
  header: string;
  hero: string;
  announcement: string;
  experience: string;
  ideas: string;
  details: string;
  pricing: string;
  faq: string;
  closing: string;
  footer: string;
};

function LandingSection({ html }: { html: string }) {
  return <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: html }} />;
}

function HeroSection({ html }: { html: string }) {
  return <LandingSection html={html} />;
}

function ExperienceSection({ html }: { html: string }) {
  return <LandingSection html={html} />;
}

function AntigravityAnnouncementSection({ html }: { html: string }) {
  // El script del anuncio puede actualizar este HTML antes de que React lo hidrate.
  return (
    <div
      style={{ display: "contents" }}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function IdeasSection({ html }: { html: string }) {
  return <LandingSection html={html} />;
}

function EventDetailsSection({ html }: { html: string }) {
  return <LandingSection html={html} />;
}

function PricingSection({ html }: { html: string }) {
  return <LandingSection html={html} />;
}

function FaqSection({ html }: { html: string }) {
  return <LandingSection html={html} />;
}

function ClosingSection({ html }: { html: string }) {
  return <LandingSection html={html} />;
}

async function getTemplate(): Promise<LandingParts> {
  const templatePath = path.join(
    process.cwd(),
    "src/features/antigravedad/components/AntiGravityView/template.html",
  );
  const document = await readFile(templatePath, "utf8");
  const body = document.match(/<body>([\s\S]*)<\/body>/i)?.[1] ?? "";

  const normalizedBody = body
    .replaceAll('assets/', '/antigravedad/')
    .replace(/<script[\s\S]*?<\/script>/gi, "");
  const sections = normalizedBody.match(/<section[\s\S]*?<\/section>/gi) ?? [];
  const mainStart = normalizedBody.indexOf("<main>");
  const mainEnd = normalizedBody.lastIndexOf("</main>");

  return {
    header: normalizedBody.slice(0, mainStart),
    hero: sections[0] ?? "",
    announcement: "",
    experience: sections[1] ?? "",
    ideas: sections[2] ?? "",
    details: sections[3] ?? "",
    pricing: sections[4] ?? "",
    faq: sections[5] ?? "",
    closing: sections[6] ?? "",
    footer: normalizedBody.slice(mainEnd + "</main>".length),
  };
}

async function getStyles() {
  const stylesDirectory = path.join(process.cwd(), "src/features/antigravedad/components");
  const [pageStyles, announcementStyles] = await Promise.all([
    readFile(path.join(stylesDirectory, "AntiGravityView/antigravedad.css"), "utf8"),
    readFile(path.join(stylesDirectory, "AntiGravityAnnouncement/announcement.css"), "utf8"),
  ]);
  return `${pageStyles}\n${announcementStyles}`;
}

async function getAnnouncement() {
  const templatePath = path.join(
    process.cwd(),
    "src/features/antigravedad/components/AntiGravityAnnouncement/template.html",
  );
  const template = await readFile(templatePath, "utf8");
  return template.replaceAll("assets/", "/antigravedad/");
}

export async function AntiGravityView() {
  const [parts, styles, announcement] = await Promise.all([getTemplate(), getStyles(), getAnnouncement()]);

  return (
    <>
      <div className="antiGravity">
        <LandingSection html={parts.header} />
        <main>
          <HeroSection html={parts.hero} />
          <AntigravityAnnouncementSection html={announcement} />
          <ExperienceSection html={parts.experience} />
          <IdeasSection html={parts.ideas} />
          <EventDetailsSection html={parts.details} />
          <PricingSection html={parts.pricing} />
          <FaqSection html={parts.faq} />
          <ClosingSection html={parts.closing} />
        </main>
        <LandingSection html={parts.footer} />
      </div>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <script src="/antigravedad/announcement.js" async />
      <AntiGravityInteractions />
    </>
  );
}
