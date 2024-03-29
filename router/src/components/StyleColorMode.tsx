import { Flex, useColorMode, FlexProps } from '@chakra-ui/react'

const StyleColorMode = (props: FlexProps) => {
  const { colorMode } = useColorMode()
  const bgColor = { light: 'white', dark: 'black' }
  const color = { light: 'black', dark: 'white' }
  
  return (
    <Flex direction="column" alignItems="center" justifyContent="flex-start" bg={bgColor[colorMode]} color={color[colorMode]} {...props}/>
  )
}

export default StyleColorMode