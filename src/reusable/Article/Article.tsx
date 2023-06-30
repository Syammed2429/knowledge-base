
import { Box, Card, CardBody, Center, Flex, HStack, Image, Text } from "@chakra-ui/react";
import leftIcon from '../../assets/icons/NextIcon.svg'
import { ArticleInterface } from "../../interface/Interface";
import fileIcon from '../../assets/icons/file-text.svg'

export const Article = (article: ArticleInterface) => {
    return (
        <>
            <Center mt={5}>


                <Box>
                    <Card>
                        <CardBody>
                            <HStack spacing={5} align="center" justify="space-between">
                                <Flex align="center">
                                    <Image src={fileIcon} />
                                    <Box ml={5}>
                                        <Text
                                            color='#373737'
                                            fontSize='1.25rem'
                                            fontWeight='400'
                                            width='28.125rem'

                                        >{article.title}</Text>
                                        <Text
                                            color='#9C9AA6'
                                            fontSize='0.7875rem'
                                            fontWeight='400'
                                            lineHeight='1.375rem'


                                        >Updated {article.updatedOn}</Text>
                                    </Box>
                                </Flex>
                                <Image src={leftIcon} />
                            </HStack>
                        </CardBody>
                    </Card>
                </Box>
            </Center>

        </>
    );
};
