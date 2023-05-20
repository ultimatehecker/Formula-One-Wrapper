import { Flex, useColorMode, FlexProps } from '@chakra-ui/react'

const MainColorMode = (props: FlexProps) => {
  const { colorMode } = useColorMode()
  const bgColor = { light: '#c21f1f', dark: '#c21f1f' }
  
  return (
    <Flex direction="column" alignItems="center" justifyContent="flex-start" bg={bgColor[colorMode]} {...props}/>
  )
}

export default MainColorMode