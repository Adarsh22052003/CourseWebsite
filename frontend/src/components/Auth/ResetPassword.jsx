import React, { useState } from 'react';
import {useParams} from "react-router-dom";
import {Container,Heading,VStack,Input,Button} from "@chakra-ui/react"

const ResetPassword = () => {
    const [password,setPassword] = useState("");

    const params = useParams();
    console.log(params.token);
  return <Container h={'90vh'} padding={'16'}>
    <form>
        <Heading children='Reset Password' my={'20'} textTransform={'uppercase'} textAlign={['center','left']}/>
        <VStack spacing={'8'}>
            <Input
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter New Password"
              type="password"
              focusBorderColor="yellow.500"
            />
            <Button type='submit' width={'full'} colorScheme='yellow'> Reset Password</Button>
        </VStack>
    </form>
  </Container>
}


export default ResetPassword;