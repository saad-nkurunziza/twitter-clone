import HomeContainer from "@/components/HomeContainer";
import AddTweet from "@/components/AddTweet";
import Tweets from "@/components/Tweets";

const Home = () => {
  return (
    <HomeContainer>
      <AddTweet />
      <Tweets />
    </HomeContainer>
  );
};

export default Home;
