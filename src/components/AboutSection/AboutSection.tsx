import { Box, Flex, Text, Image, SimpleGrid, Center, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import nextIcon from '../../assets/icons/smallIcon.svg'
import { Article } from "../../reusable/Article/Article";
import { CardComponent } from "../../reusable/CardComponent/CardComponent";
import dataJSON from '../../assets/data/data.json'
import { ArticleInterface, Category } from "../../interface/Interface";

export const AboutSection = () => {
    const navigate = useNavigate();
    const articles = dataJSON;
    const [articlesData, setArticlesData] = useState<ArticleInterface[]>([]);
    const [cardData, setCardData] = useState<Category | undefined>(undefined)
    const { id } = useParams();

    useEffect(() => {
        const onlyPublished = articles.articles.filter((el) => el.status === 'published');
        const getData = articles.categories.find((el) => el.title === id)
        setCardData(getData)

        const formattedArticles = onlyPublished.map(article => {
            const updatedOnDate = new Date(article.updatedOn);
            const formattedUpdatedOn = updatedOnDate.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric"
            });

            return {
                ...article,
                updatedOn: formattedUpdatedOn
            };
        });
        setArticlesData(formattedArticles)
    }, [articles.articles, articles.categories, id]);

    return (
        <>
            <Center>
                <Box
                >
                    <Flex alignItems="baseline" my={8}>
                        <Text
                            color="#03a84e"
                            onClick={() => navigate('/')}
                            _hover={{ cursor: 'pointer' }}
                        >
                            All Categories
                        </Text>
                        <Image mx={2} color="red" src={nextIcon} />
                        <Text>{id}</Text>
                    </Flex>

                    <SimpleGrid
                        // w='55rem'
                        // minChildWidth='10rem'
                        justifyItems='start'
                        columns={{ lg: 2 }}
                    // spacing='-55rem'
                    >
                        <Box>
                            <CardComponent {...cardData} />
                        </Box>
                        <VStack
                            ml={'-6rem'}
                        // key={article.id}
                        >
                            {articlesData?.map((article) => (
                                <Box key={article.id}>
                                    <Article {...article} />
                                </Box>

                            ))}
                        </VStack>


                    </SimpleGrid>
                </Box>
            </Center>
        </>
    );
};
