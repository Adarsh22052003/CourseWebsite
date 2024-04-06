import React from 'react'
import {Box,Stack,VStack,Heading,HStack} from "@chakra-ui/react"
import {TiSocialYoutube,TiSocialInstagram} from "react-icons/ti"
import {DiGithub} from "react-icons/di"
const Footer = () => {
  return <Box padding={'4'} bg={'blackAlpha.900'} minH={'10vh'}>
    <Stack direction={['column','row']}>
        <VStack alignItems={['center','flex-start']} width={'full'}>
            <Heading children={"All Rights Reseved"} color={'white'}/>
            <Heading children={"@ Adarsh Sachan"} color={'yellow.600'} size={'sm'} fontFamily={'body'}/>
        </VStack>
        <HStack spacing={['2','10']} justifyContent={'center'} color={'white'}
            fontSize={'50'}
        >
            <a href="https://youtube.com/adarshsachan" target={'blank'}>
                <TiSocialYoutube/>
            </a>
            <a href="https://instagram.com/adarshsachan" target={'blank'}>
                <TiSocialInstagram/>
            </a>
            <a href="https://github.com/adarsh3423" target={'blank'}>
                <DiGithub/>
            </a>
        </HStack>
    </Stack>

  </Box>
}

export default Footer