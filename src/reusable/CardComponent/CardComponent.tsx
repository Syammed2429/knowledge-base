import { Box, Card, CardBody, CardFooter, Center, Divider, Flex, Image, Text } from "@chakra-ui/react";
import { CardOptions } from "../../interface/Interface";

export const CardComponent = (cardOptions: CardOptions) => {
    return (
        <Center mt={5}
        >
            <Flex justify="center"

                flexDirection="column"
                alignItems="center"
            // textAlign='center'
            >
                <Card
                    border='1px solid #EEEEEE'

                >
                    <CardBody
                        mb='-5'
                    >
                        <Center my={3}>
                            <Image
                                boxSize="50px"
                                objectFit="contain"
                                src={cardOptions.icon}
                            />
                        </Center>
                        <Text
                            fontWeight='700'
                            fontSize='20px'
                            lineHeight='24px'
                            width='250px'
                            textAlign='center'
                        // textAlign="center"
                        >{cardOptions.title}</Text>
                    </CardBody>
                    <CardFooter
                        mb={3}
                        display='flex'
                        flexDirection='column'
                        alignItems="center"
                    >
                        <Text
                            color='#03A84E'
                            fontWeight='500'

                        >{cardOptions.totalArticle} articles</Text>
                        <Text
                            color='#9C9AA6'
                        >Last updated {cardOptions.updateTime}</Text>

                        {cardOptions.info &&
                            <Box display='flex'
                                flexDirection='column'
                                alignItems="center"
                                my='4'
                            >
                                <Divider my='5' />
                                <Image

                                    boxSize="20px"
                                    objectFit="contain"
                                    src={cardOptions.infoIcon} />

                                <Text textAlign='center'
                                    w='15rem'
                                >{cardOptions.description}</Text>
                            </Box>

                        }
                    </CardFooter>
                </Card>
            </Flex>
        </Center>
    );
};
