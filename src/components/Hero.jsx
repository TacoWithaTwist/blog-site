import { Text } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import '../cssModules/Hero.css';
export default function Hero() {
  return (
    <>
      <div className="heroContainer">
        <div className="hero">
          <Heading>The Tunisian Blog</Heading>
          <Link className="cta" to="/login">
            Join Us!
          </Link>
        </div>
        <div className="heroDescription">
          <Text>
            This website is a space for everyone to share experiences, jokes,
            problems and anything you feel like sharing. We Tunisians treat each
            other like family, right? So do not be mean, please, and act as if
            you are home. We Welcome you!
          </Text>
        </div>
      </div>
    </>
  );
}
