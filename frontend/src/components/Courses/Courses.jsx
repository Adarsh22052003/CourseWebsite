import React, { useState } from 'react';
import {
  Container,
  Heading,
  Input,
  HStack,
  Button,
  Text,
  Stack,
  VStack,
  Image,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Course = ({
  views,
  title,
  imageSrc,
  id,
  addToPlaylistHandler,
  creator,
  descripton,
  lectureCount,
}) => {
  return (
    <VStack className="course" alignItems={['center', 'flex-start']}>
      <Image src={imageSrc} boxSize="60" objectFit={'contain'} />
      <Heading
        textAlign={['center', 'left']}
        size={'sm'}
        maxW={'200px'}
        fontFamily={'sans-serif'}
        noOfLines={3}
        children={title}
      />
      <Text children={descripton} noOfLines={2} />
      <HStack>
        <Text
          fontWeight={'bold'}
          textTransform={'uppercase'}
          children={'Creator'}
        />
        <Text
          fontFamily={'body'}
          textTransform={'uppercase'}
          children={creator}
        />
      </HStack>
      <Heading
        textAlign={'center'}
        size={'xs'}
        children={`Lectures - ${lectureCount}`}
        textTransform={'uppercase'}
      />
      <Heading
        size={'xs'}
        children={`Views - ${views}`}
        textTransform={'uppercase'}
      />
      <Stack direction={['column', 'row']} alignItems={'center'}>
        <Link to={`/course/${id}`}>
            <Button colorScheme='yellow'>Wtach Now</Button>
        </Link>
        <Button
          colorScheme="yellow"
          variant={'ghost'}
          onClick={() => addToPlaylistHandler(id)}
        >
          Add to playlist
        </Button>
      </Stack>
    </VStack>
  );
};

const Courses = () => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');

  const addToPlaylistHandler = () => {
    console.log('added to playList');
  };

  const categories = [
    'web development',
    'Artificial Intellegence',
    'Data Science',
    'App Development',
    'Game Development',
    'Data Structure & Algorithms',
  ];
  return (
    <Container minH={'95vh'} maxW={'container.lg'} paddingY={'8'}>
      <Heading children="All Courses" m={'8'} />
      <Input
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        placeholder="Search a course..."
        type="text"
        focusBorderColor="yellow.500"
      />
      <HStack
        overflowX={'auto'}
        paddingY={'7'}
        // css={{
        //   '&::-webkit-scrollbar': {
        //     display: 'none',
        //   },
        // }}
      >
        {categories.map((item, index) => (
          <Button key={index} onClick={() => setCategory(item)} minW={'60'}>
            <Text children={item} />
          </Button>
        ))}
      </HStack>
      <Stack
        diraction={['column', 'row']}
        flexWrap={'wrap'}
        justifyContent={['flex-start', 'space-evenly']}
        alignItems={['center', 'flex-start']}
      >
        <Course
          title={'sample'}
          descripton={'sample'}
          views={23}
          imageSrc={'https://picsum.photos/id/237/250/200'}
          id={'sample'}
          creator={'Sample boy'}
          lectureCount={2}
          addToPlaylistHandler= { addToPlaylistHandler}
        />
      </Stack>
    </Container>
  );
};

export default Courses;
