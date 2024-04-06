import React, { useState } from 'react';
import {Container,Heading,VStack,Input,Button} from "@chakra-ui/react"

const ForgetPassword = () => {
    const [email,setEmail] = useState("");
  return <Container h={'90vh'} padding={'16'}>
    <form>
        <Heading children='Forget Password' my={'20'} textTransform={'uppercase'} textAlign={['center','left']}/>
        <VStack spacing={'8'}>
            <Input
              required
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="abc@gmail.com"
              type="email"
              focusBorderColor="yellow.500"
            />
            <Button type='submit' width={'full'} colorScheme='yellow'> Send Reset Link</Button>
        </VStack>
    </form>
  </Container>
}

export default ForgetPassword;