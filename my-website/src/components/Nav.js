import React, { useState } from 'react';
import { Text, Flex, Spacer, textDecoration, Menu, MenuButton, Button, MenuItem, MenuList, ChevronDownIcon } from '@chakra-ui/react';
import classes from './general.module.css';
import { Link, Outlet, NavLink } from "react-router-dom";
import { hover } from '@testing-library/user-event/dist/hover';
import useWindowDimensions from '../utils/Resize';


export default function Nav() {
  const { _, width } = useWindowDimensions();
  const [scroll, setScroll] = useState(false);

  const changeScroll = () =>
    document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
      ? setScroll(true)
      : setScroll(false);

  window.addEventListener('scroll', changeScroll);

  return (
    width > 726 ?

      <div className={classes.nav}>
        <Flex
          h="7vh"
          alignItems="center"
          p="6"
          boxShadow={scroll ? 'base' : 'none'}
          position="fixed"
          top="0"
          zIndex="sticky"
          w="full"
          bgColor="#212121"
        >
          <Text fontSize="25px" fontWeight="bold" >

            Elise Carman website
          </Text>
          <div style={{ width: "40px" }}></div>
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? "white" : "",
                border: isActive ? "dotted 2px" : "none",
                backgroundColor: isActive ? "rgb(33, 33, 33)" : "rgb(33, 33, 33)",
                height: isActive ? "40px" : "40px",
                borderRadius: isActive ? "5px" : "",

                textDecoration: "none",

              };
            }}
            className={classes.nav_items}
            to="/"
          >
            <div className={classes.nav_single}>
              Home
            </div>
          </NavLink>


          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? "white" : "",
                border: isActive ? "dotted 2px" : "none",
                backgroundColor: isActive ? "rgb(33, 33, 33)" : "rgb(33, 33, 33)",
                height: isActive ? "40px" : "40px",
                borderRadius: isActive ? "5px" : "",
                textDecoration: "none",

              };
            }}
            className={classes.nav_items}
            to="/resume">
            <div className={classes.nav_single}>
              Resume
            </div>
          </NavLink>
          <Spacer />

          <Flex alignItems="center">
            <Text fontSize="15px">
              <a href="https://www.linkedin.com/in/elise-carman-9914b6154/" class={classes.nav_single_social}>LinkedIn</a>
            </Text>
            <div style={{ width: 20 }}></div>
            <Text fontSize="15px">
              <a href="https://github.com/elisecarman" class={classes.nav_single_social}>GitHub</a>
            </Text>
          </Flex>
        </Flex>
      </div>

      :

      width > 622 ?

        <div className={classes.nav}>

          <Flex
            h="7vh"
            alignItems="center"
            p="6"
            boxShadow={scroll ? 'base' : 'none'}
            position="fixed"
            top="0"
            zIndex="sticky"
            w="full"
            bgColor="#212121"
          >
            <Text fontSize="25px" fontWeight="bold" >

              Elise Carman website
            </Text>
            <div style={{ width: "40px" }}></div>
            <NavLink
              style={({ isActive }) => {
                return {
                  color: isActive ? "white" : "",
                  border: isActive ? "dotted 2px" : "none",
                  backgroundColor: isActive ? "rgb(33, 33, 33)" : "rgb(33, 33, 33)",
                  height: isActive ? "40px" : "40px",
                  borderRadius: isActive ? "5px" : "",
                  textDecoration: "none",

                };
              }}
              className={classes.nav_items}
              to="/"
            >
              <div className={classes.nav_single}>
                Home
              </div>
            </NavLink>


            <NavLink
              style={({ isActive }) => {
                return {
                  color: isActive ? "white" : "",
                  border: isActive ? "dotted 2px" : "none",
                  backgroundColor: isActive ? "rgb(33, 33, 33)" : "rgb(33, 33, 33)",
                  height: isActive ? "40px" : "40px",
                  borderRadius: isActive ? "5px" : "",
                  textDecoration: "none",

                };
              }}
              className={classes.nav_items}
              to="/resume">
              <div className={classes.nav_single}>
                Resume
              </div>
            </NavLink>
            <Spacer />

            <Menu
              autoSelect={false}
            >
              <MenuButton as={Button}
                bgColor="#212121"
                hover="#212121"
                height="40px"
                width="200px"

                _hover={{
                  outline: "none",
                  bg: "#212121",
                  boxShadow: "0 0 15px rgb(255, 255, 255)",
                  borderColor: "gray.300",
                }}
                _focus={{
                  outline: "none",
                  bg: "#212121",
                }}
                _active={{
                  outline: "none",
                  bg: "#212121",
                  boxShadow: "0 0 15px rgb(255, 255, 255)",
                  borderColor: "gray.300",
                }}
              > {/* rightIcon={<ChevronDownIcon />} */}
                <div className={classes.menu_social}>Socials</div>
              </MenuButton>
              <MenuList
                bgColor="#212121"
              >
                <MenuItem>
                  <Text fontSize="15px">
                    <a href="https://www.linkedin.com/in/elise-carman-9914b6154/" class={classes.nav_single_social_drop}>LinkedIn</a>
                  </Text>
                </MenuItem>
                <MenuItem>
                  <Text fontSize="15px">
                    <a href="https://github.com/elisecarman" class={classes.nav_single_social_drop}>GitHub</a>
                  </Text>
                </MenuItem>
              </MenuList>
            </Menu>


          </Flex>
        </div >
        :

        <div className={classes.nav}>

          <Flex
            h="7vh"
            alignItems="center"
            p="6"
            boxShadow={scroll ? 'base' : 'none'}
            position="fixed"
            top="0"
            zIndex="sticky"
            w="full"
            bgColor="#212121"
          >
            <Text fontSize="25px" fontWeight="bold" marginTop="35px" textShadow='2px 2px #212121'>

              Elise Carman website
            </Text>
            <div style={{ width: "40px" }}></div>
            <NavLink
              style={({ isActive }) => {
                return {
                  color: isActive ? "white" : "",
                  border: isActive ? "dotted 2px" : "none",
                  backgroundColor: isActive ? "rgb(33, 33, 33)" : "rgb(33, 33, 33)",
                  height: isActive ? "40px" : "40px",
                  borderRadius: isActive ? "5px" : "",
                  textDecoration: "none",

                };
              }}
              className={classes.nav_items}
              to="/"
            >
              <div className={classes.nav_single}>
                Home
              </div>
            </NavLink>


            <NavLink
              style={({ isActive }) => {
                return {
                  color: isActive ? "white" : "",
                  border: isActive ? "dotted 2px" : "none",
                  backgroundColor: isActive ? "rgb(33, 33, 33)" : "rgb(33, 33, 33)",
                  height: isActive ? "40px" : "40px",
                  borderRadius: isActive ? "5px" : "",
                  textDecoration: "none",

                };
              }}
              className={classes.nav_items}
              to="/resume">
              <div className={classes.nav_single}>
                Resume
              </div>
            </NavLink>
            <Spacer />

            <Menu
              autoSelect={false}
            >
              <MenuButton as={Button}
                bgColor="#212121"
                hover="#212121"
                height="40px"
                width="200px"

                _hover={{
                  outline: "none",
                  bg: "#212121",
                  boxShadow: "0 0 15px rgb(255, 255, 255)",
                  borderColor: "gray.300",
                }}
                _focus={{
                  outline: "none",
                  bg: "#212121",
                }}
                _active={{
                  outline: "none",
                  bg: "#212121",
                  boxShadow: "0 0 15px rgb(255, 255, 255)",
                  borderColor: "gray.300",
                }}
              > {/* rightIcon={<ChevronDownIcon />} */}
                <div className={classes.menu_social}>Socials</div>
              </MenuButton>
              <MenuList
                bgColor="#212121"
              >
                <MenuItem>
                  <Text fontSize="15px">
                    <a href="https://www.linkedin.com/in/elise-carman-9914b6154/" class={classes.nav_single_social_drop}>LinkedIn</a>
                  </Text>
                </MenuItem>
                <MenuItem>
                  <Text fontSize="15px">
                    <a href="https://github.com/elisecarman" class={classes.nav_single_social_drop}>GitHub</a>
                  </Text>
                </MenuItem>
              </MenuList>
            </Menu>


          </Flex>
        </div >

  );
};
