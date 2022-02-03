import "../styles/sites.scss";
import { PaFiles } from "./PaFiles";
import { VersionTheme } from "./VersionTheme";

export function SiteList() {
  return (
    <section className="site-list">
      <PaFiles />
      <VersionTheme />
    </section>
  );
}
