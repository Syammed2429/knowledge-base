import { CardComponent } from "../../reusable/CardComponent/CardComponent";

import data from '../../assets/data/data.json'
import { Center, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Category } from "../../interface/Interface";
import { useNavigate } from "react-router-dom";



export const Home = () => {
    const categories = data.categories;
    const [enabledCategories, setEnabledCategories] = useState<Category[]>([]);
    const navigate = useNavigate()

    useEffect(() => {
        const currentDate = new Date(); // Current date

        const filteredCategory = categories?.filter((el) => el.enabled === true);
        const sortedData = [...filteredCategory].sort((a, b) => a.order - b.order);


        const updatedCategories = sortedData.map((category) => {
            const updatedOn = new Date(category.updatedOn);
            const timeDiff = currentDate.getTime() - updatedOn.getTime(); // Time difference in milliseconds
            const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24)); // Convert milliseconds to days
            const weeksDiff = Math.floor(daysDiff / 7); // Convert days to weeks

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
        setEnabledCategories(updatedCategories);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        console.log('enabledCategories:', enabledCategories)

    });


    return (
        <>
            <Center>

                <SimpleGrid
                    columns={{ base: 1, md: 2, lg: 3 }}
                    gridGap={10}
                    _hover={{ cursor: 'pointer' }}
                >

                    {enabledCategories?.map((el) => (
                        <div key={el.id}
                            onClick={() => navigate(`about/${el.title}`)}

                        >

                            <CardComponent


                                {...el} />
                        </div>
                    ))}
                </SimpleGrid>
            </Center>
        </>
    );
};