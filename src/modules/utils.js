/* eslint-disable no-console */
function destructureGithubRepoLink(repoLink) {
  const [, owner, repo] = repoLink.match(
    /^(?:https?:\/\/)?(?:www\.)?github\.com\/(.*)\/(.*)$/
  );
  return { owner, repo };
}

async function getUserInfo(profileLink) {
  const [, user] = profileLink.match(
    /^(?:https?:\/\/)?(?:www\.)?github\.com\/(.*)$/
  );
  const res = await fetch(`https://api.github.com/users/${user}`);

  if (res.ok) {
    return res.json();
  }
  if (res.status === 403) {
    console.error('Github API rate limit exceeded');
  }
  if (res.status === 404) {
    console.error('User not found');
  }
  return null;
}

async function getRepoInfo(repoLink) {
  const { owner, repo } = destructureGithubRepoLink(repoLink);

  const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`);

  if (res.ok) {
    return res.json();
  }
  if (res.status === 404) {
    console.error('No repo found, please check the link');
  }
  if (res.status === 403) {
    console.error('Limit Exceeded, please try again later');
  }
  return null;
}

export { getRepoInfo, getUserInfo, destructureGithubRepoLink };
