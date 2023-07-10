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
import infoIconSVG from '../../assets/icons/info.svg'

export const AboutSection = () => {
    const navigate = useNavigate();
    const articles = dataJSON;
    const [articlesData, setArticlesData] = useState<ArticleInterface[]>([]);
    const [originalCategories, setOriginalCategories] = useState<ArticleInterface[]>([]);

    const [cardData, setCardData] = useState<Category | undefined>(undefined)
    const { id } = useParams();

    const searchQuery = useSelector((state: RootState) => state.search);

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
                info: true,
                infoIcon: infoIconSVG

            };
        });

        const getData = updatedCategories.find((el) => el.title === id);
        setCardData(getData);
        setArticlesData(formattedArticles);
        setOriginalCategories(formattedArticles);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    useEffect(() => {
        if (searchQuery) {
            const data = articlesData?.filter((el) => el.title?.toLowerCase().includes(searchQuery.toLowerCase()));
            setArticlesData(data)
        } else {
            setArticlesData(originalCategories);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [articlesData, searchQuery]);

    return (
        <>
            <Center>

                <Box
                >
                    {!articlesData.length ? (

                        <div className="no-data-card">
                            No articles found.
                        </div>
                    ) : null

                    }
                    <Flex
                        alignItems="baseline" my={8}
                    >
                        <Text
                            color="#03a84e"
                            onClick={() => navigate('/')}
                            _hover={{ cursor: 'pointer' }}
                        >
                            All Categories
                        </Text>
                        <Image
                            mx={2}
                            color="red" src={nextIcon} />
                        <Text>{id}</Text>
                    </Flex>

                    <SimpleGrid
                        justifyItems='start'
                        columns={{ base: 1, md: 1, lg: 2 }}
                    >
                        <Box>
                            <CardComponent {...cardData} />
                        </Box>
                        <VStack
                            ml={{ base: '0', md: '0', lg: '-6rem' }}
                        >

                            {articlesData?.map((article) => (
                                <Box key={article.id}
                                >
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
