import {tiktokdl} from '@bochilteam/scraper';

export default async function tiktok(ini) {
  const data = await tiktokdl(ini);

  return data;
}
