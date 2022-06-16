import { urlIcons, linkIcon } from '../data/templateAndDummy';

/* eslint-disable no-console */
function destructureGithubRepoLink(repoLink) {
  const [, owner, repo] = repoLink.match(
    /^(?:https?:\/\/)?(?:www\.)?github\.com\/(.*)\/(.*)$/
  );
  return { owner, repo };
}

function getIcon(url) {
  const newUrl = url
    .trim()
    .replace(/^((http[s]?:\/\/)?(w{3}.)?)/, '')
    .replace(/\/$/, '');
  const main = newUrl.split('/')[0];
  const icon = urlIcons.find((item) => item.url.toLowerCase() === main);
  const iconElement = icon ? icon.icon : linkIcon;
  return { iconElement, url: newUrl };
}

export { destructureGithubRepoLink, getIcon };
