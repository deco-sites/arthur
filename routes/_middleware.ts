import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 544,
  site: "arthur",
  domains: ["arthur.deco.site"],
});