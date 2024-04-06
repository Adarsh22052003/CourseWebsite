import React from 'react';
import {ColorModeSwitcher} from "../../../ColorModeSwitcher";
import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, HStack, VStack, useDisclosure } from '@chakra-ui/react';
import {RiDashboardFill, RiLoginBoxLine, RiMenu5Fill} from "react-icons/ri"
import { Link } from 'react-router-dom';

const LinkButton = ({url="/", title = "Home" ,onClose})=>(
    <Link onClick={onClose} to={url}>
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
        onClose();
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
                    <LinkButton onClose={onClose} url='/' title='Home'/>
                    <LinkButton onClose={onClose} url='/courses' title='Browse a Courses'/>
                    <LinkButton onClose={onClose} url='/request' title='Request a Course'/>
                    <LinkButton onClose={onClose} url='/contact' title='Contact Us'/>
                    <LinkButton onClose={onClose} url='/abour' title='About'/>
                    <HStack 
                        justifyContent={'space-evenly'} 
                        position={'absolute'} 
                        bottom={'3rem'}
                        width={'80%'}
                    >
                    {isAuthenticated?(<>
                        <VStack>
                            <HStack>
                                <Link onClick={onClose} to='/profile'>
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
                        <Link onClick={onClose} to='/login'>
                            <Button colorScheme='yellow' >Login</Button>
                        </Link>
                        <p>Or</p>
                        <Link onClick={onClose} to='/registaer'>
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


