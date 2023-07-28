export const getTweets = async (path: string) => {
  const response = await fetch(`http://localhost:3000/api/${path}`);
  const tweets = response.json();
  return tweets;
};
