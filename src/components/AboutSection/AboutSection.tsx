import { Box, Flex, Text, Image, SimpleGrid, Center, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import nextIcon from '../../assets/icons/smallIcon.svg'
import { Article } from "../../reusable/Article/Article";
import { CardComponent } from "../../reusable/CardComponent/CardComponent";
import { ArticleInterface, CardInterface, Category } from "../../interface/Interface";
import dataJSON from '../../assets/data/data.json'
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export const AboutSection = () => {
    const navigate = useNavigate();
    const articles = dataJSON;
    const [articlesData, setArticlesData] = useState<ArticleInterface[]>([]);
    const [originalCategories, setOriginalCategories] = useState<ArticleInterface[]>([]);

    const [cardData, setCardData] = useState<Category | undefined>(undefined)
    const { id } = useParams();

    const searchQuery = useSelector((state: RootState) => state.search);
    const updatedData = useSelector((state: RootState) => state.updatedCategories)

    useEffect(() => {
        const onlyPublished = articles.articles.filter((el) => el.status === 'published');

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

        const currentDate = new Date(); // Current date

        const updatedCategories: CardInterface[] = articles.categories?.map((category) => {
            const updatedOn = new Date(category.updatedOn);
            const timeDiff = currentDate.getTime() - updatedOn.getTime();
            const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
            const weeksDiff = Math.floor(daysDiff / 7);

            let updateTime = '';

            if (daysDiff < 7) {
                updateTime = `${daysDiff} ${daysDiff === 1 ? 'day' : 'days'}`;
            } else {
                updateTime = `${weeksDiff} ${weeksDiff === 1 ? 'week' : 'weeks'}`;
            }

            return {
                ...category,
                updateTime,
            };
        });

        const getData = updatedCategories.find((el) => el.title === id);
        setCardData(getData);
        setArticlesData(formattedArticles);
        setOriginalCategories(formattedArticles);

    }, [id]);

    useEffect(() => {
        if (searchQuery) {
            const data = articlesData?.filter((el) => el.title?.toLowerCase().includes(searchQuery.toLowerCase()));

            // const data = articlesData?.find((el) => el.title?.toLowerCase().includes(searchQuery));
            setArticlesData(data)
        } else {
            setArticlesData(originalCategories);
        }
    }, [articlesData, searchQuery]);

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
                        justifyItems='start'
                        columns={{ lg: 2 }}
                    >
                        <Box>
                            <CardComponent {...cardData} />
                        </Box>
                        <VStack
                            ml={'-6rem'}
                        >
                            {articlesData?.map((article) => (
                                <Box key={article.id}>
                                    <Article {...article} />
                                </Box>

                            ))}
                        </VStack>


                    </SimpleGrid>
                    <Box
                        mt='5rem'
                        mb={8}
                    >
                        <Box
                            // w='95vw'
                            border='.85px solid #EEEEEE'
                            my='2rem'
                        ></Box>
                        <Text textAlign='center'>
                            Other Categories
                        </Text>
                    </Box>
                </Box>
            </Center>
        </>
    );
};
