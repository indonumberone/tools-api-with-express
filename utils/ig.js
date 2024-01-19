import {instagramStory, instagramdl} from '@bochilteam/scraper';

export default async function ig(ini) {
  const data = await instagramdl(ini);
  console.log(data);
  return data;
}
ig('https://www.instagram.com/reel/C2RtjSgBI_r/?utm_source=ig_web_copy_link');
