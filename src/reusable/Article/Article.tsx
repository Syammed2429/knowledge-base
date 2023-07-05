
import { Box, Card, CardBody, Center, Flex, HStack, Image, Text } from "@chakra-ui/react";
import leftIcon from '../../assets/icons/NextIcon.svg'
import { ArticleInterface } from "../../interface/Interface";
import fileIcon from '../../assets/icons/file-text.svg'

export const Article = (article: ArticleInterface) => {
    return (
        <Center mt={5}>
            <Box>
                <Card
                    w={{ base: '20rem', lg: 'auto' }}
                >
                    <CardBody>
                        <Flex
                            align="center"
                            justify="space-between"
                        >
                            <HStack spacing={5} mb={{ base: 4, md: 0 }}>
                                <Image src={fileIcon} />
                                <Box ml={5}>
                                    <Text
                                        color='#373737'
                                        fontSize={{ base: "1rem", md: "1.25rem" }}
                                        fontWeight='400'
                                        width={{ base: "auto", md: "28.125rem" }}
                                    >
                                        {article.title}
                                    </Text>
                                    <Text
                                        color='#9C9AA6'
                                        fontSize={{ base: "0.75rem", md: "0.7875rem" }}
                                        fontWeight='400'
                                        lineHeight={{ base: "1rem", md: "1.375rem" }}
                                    >
                                        Updated {article.updatedOn}
                                    </Text>
                                </Box>
                            </HStack>
                            <Image src={leftIcon} boxSize={6} ml={{ base: 0, md: 2 }} />
                        </Flex>
                    </CardBody>
                </Card>
            </Box>
        </Center>
    );
};
