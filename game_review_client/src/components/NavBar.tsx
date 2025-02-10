import { HStack, Image, Text } from "@chakra-ui/react"
import logo from "../assets/logo.png"
import ColorSwitch from "./ColorSwitch"

const NavBar = () => {
  return (
    <HStack>
        <Image src={logo} boxSize="60px"/>
        <Text>NavBar</Text>
        <ColorSwitch />
    </HStack>
  )
}

export default NavBar