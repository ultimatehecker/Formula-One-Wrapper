import { Flex, useColorMode, FlexProps } from '@chakra-ui/react'

export const MainColorMode = (props: FlexProps) => {
  const { colorMode } = useColorMode()
  const bgColor = { light: '#ed4245', dark: '#ed4245' }
  
  return (
    <Flex direction="column" alignItems="center" justifyContent="flex-start" bg={bgColor[colorMode]} {...props}/>
  )
}