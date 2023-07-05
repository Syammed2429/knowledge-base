import { Box, Image, Input, InputGroup, InputRightAddon, Text } from "@chakra-ui/react";
import { FC } from "react";
import { useDispatch } from "react-redux";
import searchIcon from '../../assets/icons/search.svg'
import { setSearchQuery } from "../../store/searchSlice";

export const Navbar: FC = () => {
    const dispatch = useDispatch();


    const handleSearch = (event: { target: { value: any; }; }) => {
        const searchQuery = event.target.value;
        dispatch(setSearchQuery(searchQuery));
    };
    return (
        <>
            <Box
                display={'flex'}
                justifyContent='center'
                flexDirection='column'
                alignItems='center'
                mt='54px'
                mb='5rem'
            >

                <Text
                    fontSize={{ base: 'md', md: 'md', lg: '34px' }}
                    fontWeight={700}
                    lineHeight='40.8px'
                >Knowledge base doesnt' have to be boring</Text>
                <Text
                    fontSize={{ base: 'sm', md: 'sm', lg: '20px' }}
                    fontWeight={400}
                    lineHeight='24px'
                >Everything you need to Manage your Messaging</Text>
                <InputGroup
                    w={{ base: '20rem', md: 'md', lg: '720px' }}
                    mt='25'
                >
                    <Input
                        h={{ base: '3rem', md: '3rem', lg: '60px' }}
                        borderRadius='1px'
                        type="text"
                        placeholder="Search for answers"
                        onChange={handleSearch}


                    />
                    <InputRightAddon
                        bg='#03a84e'
                        h={{ base: '3rem', md: '3rem', lg: '60px' }}
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
