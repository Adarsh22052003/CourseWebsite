import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Heading,
  Stack,
  Avatar,
  VStack,
  Text,
  Button,
  Box,
  HStack,
} from '@chakra-ui/react';
import { RiSecurePaymentFill } from 'react-icons/ri';
import introVideo from '../../assests/videos/intro.mp4';
import termsAndCondition from '../../assests/docs/termsAndCondition.js';

const Founder = () => (
  <Stack direction={['column', 'row']} spacing={['4', '16']} padding={'8'}>
    <VStack>
      <Avatar
        src="https://picsum.photos/id/237/250/200"
        boxSize={['40', '48']}
      />
      <Text children="Co-Founder" opacity={0.7} />
    </VStack>
    <VStack
      textAlign={['center', 'left']}
      justifyContent={'center'}
      alignItems={['center', 'flex-start']}
    >
      <Heading children="Adarsh Sachan" size={['md', 'xl']} />
      <Text children={'Hi ,I am a full-stack developer'} />
    </VStack>
  </Stack>
);

const VideoPlayer = () => (
  <Box>
    <video
      controls
      autoPlay
      muted
      src={introVideo}
      controlsList="nodownload nofullscreen noremoteplayback "
      disablePictureInPicture
      disableRemotePlayback
    ></video>
  </Box>
);

const TandC = ({ termsAndCondition }) => (
  <Box>
    <Heading
      size={'md'}
      children={'Terms & Condition'}
      textAlign={['center', 'left']}
      my={'4'}
    />
    <Box h={'sm'} p={'4'} overflowY={'scroll'}>
      <Text
        textAlign={['center', 'left']}
        letterSpacing={'widest'}
        fontFamily={'heading'}
      >
        {termsAndCondition}
      </Text>
      <Heading
        my={'4'}
        size={'xs'}
        children="Refuced only applicable for cancellation within 7 days."
      />
    </Box>
  </Box>
);

const About = () => {
  return (
    <Container maxW={['','container.lg']} padding={'16'} boxShadow={'lg'}>
      <Heading children="About Us" textAlign={['center', 'left']} />
      <Founder />
      <Stack m={'8'} direction={['column', 'row']}>
        <Text fontFamily={'cursive'} m={'8'} textAlign={['center', 'left']}>
          We are a video streaming platform with some premium courses available
        </Text>
        <Link to={'/subscribe'}>
          <Button variant={'ghost'} colorScheme="yellow">
            CheckOut Your Plan
          </Button>
        </Link>
      </Stack>
      <VideoPlayer />
      <TandC termsAndCondition={termsAndCondition} />
      <HStack my={'4'} p={'4'}>
        <RiSecurePaymentFill />
        <Heading
          size={'xs'}
          fontFamily={'sans-serif'}
          textTransform={'uppercase'}
          children={'Payment is secured by Razorpay'}
        />
      </HStack>
    </Container>
  );
};
export default About;
