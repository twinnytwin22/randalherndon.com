
const apiKey = process.env.GITHUB_API_KEY
export async function getGithubData() {
    if (apiKey){
    // Replace "twinnytwin22" with the username you want to get information for
    const username = "twinnytwin22";
    const options = {
        method: 'GET',
        headers: {
          "Authorization": apiKey,
          "X-GitHub-Api-Version": "2022-11-28",
          accept: "application/json",
        }
      };
    // Make a request to the GitHub API to get information about the user
    const response = await fetch(`https://api.github.com/users/${username}`, options);
    // If the response is not OK, throw an error
    if (!apiKey) {
      throw new Error("Failed to get user data from GitHub");
    }
    // Parse the response body as JSON
    const data = await response.json();
    // Return the user data
    return data;
  }
}

export async function getTotalCommits() {
    if (apiKey)
    try {
        const options = {
            method: 'GET',
            headers: {
              "Authorization": apiKey,
              "X-GitHub-Api-Version": "2022-11-28",
              accept: "application/json",
            }
          };
      // First, we get all the repositories of the user 'twinnytwin22'
      const reposResponse = await fetch(
        "https://api.github.com/users/twinnytwin22/events", options
      );
      const reposData = await reposResponse.json();
      return reposData;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  const base_url = 'https://api.github.com';

export async function getAllCommits({owner, repo, sha}:any) {
  const first_commit = await get_first_commit({owner, repo});
  const compare_url = `${base_url}/repos/${owner}/${repo}/compare/${first_commit}...${sha}`;
  const response = await fetch(compare_url);
  const { total_commits } = await response.json();
  const commit_count = total_commits + 1;
  console.log('Commit Count: ', commit_count);
  return commit_count;
}

async function get_first_commit({owner, repo}:any) {
  const url = `${base_url}/repos/${owner}/${repo}/commits`;
  const response = await fetch(url);
  const linkHeader = response.headers.get('Link');
  if (linkHeader) {
    const pageUrl = linkHeader.split(',')[1].split(';')[0].split('<')[1].split('>')[0];
    const pageResponse = await fetch(pageUrl);
    const first_commit = await pageResponse.json();
    return first_commit[first_commit.length - 1]['sha'];
  } else {
    const first_commit = await response.json();
    return first_commit[first_commit.length - 1]['sha'];
  }
}


  