import {  HStack, Switch, Text, useColorMode } from "@chakra-ui/react"

const ColorSwitch = () => {

    const {colorMode, toggleColorMode} = useColorMode()

  return (
<HStack align='center' direction='row'>
  
  <Switch 
  isChecked={colorMode === 'dark'}
  colorScheme='green'
  onChange={toggleColorMode}
  size='md' />
  <Text>{colorMode === "dark" ? "dark" : "light"} mode</Text>
</HStack>
  )
}

export default ColorSwitch