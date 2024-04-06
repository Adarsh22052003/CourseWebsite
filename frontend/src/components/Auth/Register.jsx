import React, { useState } from 'react';
import {
  Container,
  VStack,
  FormLabel,
  Input,
  Heading,
  Box,
  Button,
  Avatar
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const fileUploadCss ={
    cursor: "pointer",
    marginLeft:"-5%",
    width:"110%",
    border:"none",
    height:"100%",
    color:"#ECC94B",
    backgroundColor:'white'
}
const fileUploadStyle ={
    "&::file-selector-button": fileUploadCss
}

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [imagePrev, setImagePrev] = useState("");
  const [image, setImage] = useState("");

  const changeImageHandler = (e)=>{
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend =()=>{
        setImagePrev(reader.result)
        setImage(file);
    }
  }
  return (
    <Container h={['100vh','110vh']}>
      <VStack h={'full'} justifyContent={'center'} spacing={'16'}>
        <Heading children={'Registration'} textTransform={'uppercase'} />
        <form style={{ width: '100%'}}>
            <Box  display={'flex'} justifyContent={'center'}>
                <Avatar src={imagePrev} size={'2xl'}/>
            </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="name" children={'Name'} />
            <Input
              required
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="abc"
              type="text"
              focusBorderColor="yellow.500"
            />
          </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="email" children={'Email Address'} />
            <Input
              required
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="abc@gmail.com"
              type="email"
              focusBorderColor="yellow.500"
            />
          </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="password" children={'password Address'} />
            <Input
              required
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter Your Password"
              type="password"
              focusBorderColor="yellow.500"
            />
          </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="chooseAvatar" children={'Choose Avatar'} />
            <Input
            value={password}
              accept='image/*'
              id='chooseAvatar'
              type={'file'}
              focusBorderColor="yellow.500"
              css={fileUploadStyle}
              onChange={changeImageHandler}
            />
          </Box>
          <Button my={'4'} colorScheme='yellow' type='submit' variant={'link'}>Sign Up</Button>

          <Box my={'4'}>
            Already Signed Up? <Link to={'/login'}><Button colorScheme='yellow' variant={'link'}>Login </Button></Link>{" "}
            here
          </Box>
        </form>
      </VStack>
    </Container>
  );
};



export default Register;