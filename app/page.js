import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

async function fetchWithTimeout(url, ms = 7000) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), ms);

  try {
    const res = await fetch(url, { signal: controller.signal });
    clearTimeout(id);
    if (!res.ok) {
      // Not OK (404, 500, etc). Throw so we go to catch.
      throw new Error(`HTTP ${res.status}`);
    }
    return await res.json();
  } catch (err) {
    clearTimeout(id);
    // Log the error so you can see it in the terminal when running `npm run dev`
    console.error("fetchWithTimeout failed for", url, err);
    // Return fallback (empty array) so the page still renders
    return [];
  }
}

async function getData() {
  // Basic validation: ensure username exists
  const devUsername = personalData?.devUsername;
  if (!devUsername) {
    console.warn("No devUsername defined in personalData");
    return [];
  }

  const url = `https://dev.to/api/articles?username=${devUsername}`;
  const data = await fetchWithTimeout(url, 7000);

  // If fetch failed we get [] from fetchWithTimeout
  if (!Array.isArray(data)) return [];

  const filtered = data
    .filter((item) => item?.cover_image)
    .sort(() => Math.random() - 0.5);

  return filtered;
};

export default async function Home() {
  const blogs = await getData();

  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <ContactSection />
    </>
  )
};
