import { Box, HStack, useRadio, useRadioGroup } from "@chakra-ui/react";

export const ArticleSort = ({ onChange, groupProps, radioProps, options } :{ onChange: () => void, groupProps:any, radioProps:any, options:string[] }) => {
    

    return (
        <HStack {...groupProps}>
          {options.map((value) => {
            const radio = radioProps({ value })
            return (
              <RadioCard key={value} {...radio}>
                {value}
              </RadioCard>
            )
          })}
        </HStack>
      )
};

function RadioCard(props: any) {
        const { getInputProps, getRadioProps } = useRadio(props)
      
        const input = getInputProps()
        const checkbox = getRadioProps()
      
        return (
          <Box as='label'>
            <input {...input} />
            <Box
              {...checkbox}
              cursor='pointer'
              borderWidth='1px'
              borderRadius='md'
              boxShadow='md'
              _checked={{
                bg: 'teal.600',
                color: 'white',
                borderColor: 'teal.600',
              }}
              _focus={{
                boxShadow: 'outline',
              }}
              px={5}
              py={3}
            >
              {props.children}
            </Box>
          </Box>
        )
      }
   