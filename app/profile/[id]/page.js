import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const Profile = ({ params }) => {
  let [posts, setPosts] = useState({});
  const searchParams = useSearchParams();
  const username = searchParams.get("name");

  useEffect(() => {
    const fetchPosts = async () => {
      let response = await fetch(`/api/users/${params?.id}/posts`, {
        method: "GET",
      });
      const data = await response.json();
      setPosts(data);
    };
    if (params?.id) fetchPosts();
  }, [params.id]);
  return (
    <Profile
      name={username}
      desc={`Welcome to ${username}'s personalized profile page. Share your exceptional prompts and inspire others with the power of your imagination`}
      data={posts}
    />
  );
};
