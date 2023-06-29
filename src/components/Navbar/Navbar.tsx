import { Box, Image, Input, InputGroup, InputRightAddon, Text } from "@chakra-ui/react";
import { FC } from "react";
import searchIcon from '../../assets/icons/search.svg'

export const Navbar: FC = () => {
    return (
        <>
            <Box
                display={'flex'}
                justifyContent='center'
                flexDirection='column'
                alignItems='center'
                mt='54px'
            >

                <Text
                    fontSize='34px'
                    fontWeight={700}
                    lineHeight='40.8px'
                >Knowledge base doesnt' have to be boring</Text>
                <Text
                    fontSize='20px'
                    fontWeight={400}
                    lineHeight='24px'
                >Everything you need to Manage your Messaging</Text>
                <InputGroup
                    w='720px'
                    mt='25'
                >
                    <Input
                        h='60px'
                        borderRadius='1px'
                        type="text"
                        placeholder="Search for answers"
                    />
                    <InputRightAddon
                        bg='#03a84e'
                        h='60px'
                        w='80px'
                        display='flex'
                        justifyContent='center'
                    >
                        <Image src={searchIcon} />
                    </InputRightAddon>

                </InputGroup>
            </Box>
        </>
    );
}