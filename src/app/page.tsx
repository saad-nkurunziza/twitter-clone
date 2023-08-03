import HomeContainer from "@/components/HomeContainer";
import AddTweet from "@/components/AddTweet";
import Tweets from "@/components/Tweets";
import OverallLayout from "@/components/OverallLayout";

const Home = () => {
  return (
    <OverallLayout>
      <HomeContainer>
        <AddTweet />
        <Tweets />
      </HomeContainer>
    </OverallLayout>
  );
};

export default Home;
