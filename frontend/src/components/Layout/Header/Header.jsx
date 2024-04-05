import React from 'react';
import {ColorModeSwitcher} from "../../../ColorModeSwitcher";
import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, HStack, VStack, useDisclosure } from '@chakra-ui/react';
import {RiDashboardFill, RiLoginBoxLine, RiMenu5Fill} from "react-icons/ri"
import { Link } from 'react-router-dom';

const LinkButton = ({url="/", title = "Home"})=>(
    <Link to={url}>
        <Button variant={'ghost'} >{title}</Button>
    </Link>
) ;

const Header = () => {
    const {isOpen,onOpen,onClose} = useDisclosure();
    const isAuthenticated = false;
    const user ={
        role: 'admin'
    }

    const logoutHandler = ()=>{
        console.log("logout");
    }
  return <>
    <ColorModeSwitcher/>

    <Button 
        onClick={onOpen}
        colorScheme={'yellow'} 
        width={'12'} 
        height={'12'} 
        rounded={'full'} 
        position={"fixed"}
        top={'6'}
        left={'6'}
    >
        <RiMenu5Fill/>
    </Button>
    <Drawer placement='left' onClose={onClose} isOpen={isOpen} >
        <DrawerOverlay backdropFilter={'blur(1px)'}/>
        <DrawerContent>
            <DrawerHeader borderBottomWidth={'1px'}>
                COURSE BUNDLER
            </DrawerHeader>
            <DrawerBody>
                <VStack spacing={'3'} alignItems={'flex-start'}>
                    <LinkButton url='/' title='Home'/>
                    <LinkButton url='/courses' title='Browse a Courses'/>
                    <LinkButton url='/request' title='Request a Course'/>
                    <LinkButton url='/contact' title='Contact Us'/>
                    <LinkButton url='/abour' title='About'/>
                    <HStack 
                        justifyContent={'space-evenly'} 
                        position={'absolute'} 
                        bottom={'3rem'}
                        width={'80%'}
                    >
                    {isAuthenticated?(<>
                        <VStack>
                            <HStack>
                                <Link to='/profile'>
                                    <Button colorScheme='yellow' >Profile</Button>
                                </Link>
                                <Button variant={'ghost'} onClick={logoutHandler}>
                                    <RiLoginBoxLine/>
                                    Logout
                                </Button>
                            </HStack>
                            {
                                user && user.role === 'admin' &&(
                                    <Link to="/admin/dashboard">
                                        <Button colorScheme='purple' variant={'ghost'}>
                                            <RiDashboardFill style={{ margin: '4px'}}/>
                                            Dashboard
                                        </Button>
                                    </Link>
                                )
                            }
                        </VStack>
                    </>):(<>
                        <Link to='/login'>
                            <Button colorScheme='yellow' >Login</Button>
                        </Link>
                        <p>Or</p>
                        <Link to='/registaer'>
                            <Button colorScheme='yellow' >Sign Up</Button>
                        </Link>
                    </>)}
                    </HStack>
                </VStack>
            </DrawerBody>
        </DrawerContent>
    </Drawer>
  </>
}

export default Header;

