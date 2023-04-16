'use client'


import { useState } from 'react';

const apiKey = process.env.NEXT_PUBLIC_GITHUB_API_KEY


export function FollowButton() {
  const [isFollowing, setIsFollowing] = useState(false);

  const followUser = async () => {
    if (apiKey)
    try {
      const response = await fetch(
        'https://api.github.com/user/following/twinnytwin22',
        {
          method: isFollowing ? 'DELETE' : 'PUT',
          headers: {
            "Authorization": apiKey,
            "X-GitHub-Api-Version": "2022-11-28",
            accept: "application/json",
          }
        }
      );
      console.log(response)
      setIsFollowing(!isFollowing);
      console.log(`User is ${isFollowing ? 'unfollowed' : 'followed'} successfully`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button onClick={followUser}>
      {isFollowing ? 'Unfollow' : 'Follow'}
    </button>
  );
}
