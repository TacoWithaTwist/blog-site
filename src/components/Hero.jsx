import { Text } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import '../cssModules/Hero.css';
export default function Hero() {
  return (
    <>
      <div className="heroContainer">
        <div className="hero">
          <Heading fontWeight={'extrabold'}>Voices of Tunisia</Heading>
          <Link className="cta" to="/login">
            Join Us!
          </Link>
        </div>
        <div className="heroDescription">
          <Text>
            Join Tunisians as they share their personal journeys, thoughts, and
            everyday experiences. From the bustling streets of Tunis to the
            tranquil coastal towns, discover life in Tunisia through the eyes of
            its people.
          </Text>
        </div>
      </div>
    </>
  );
}
