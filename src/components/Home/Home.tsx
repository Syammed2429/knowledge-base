import { CardComponent } from "../../reusable/CardComponent/CardComponent";

import data from '../../assets/data/data.json'
import { Center, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Category } from "../../interface/Interface";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { setJSONData } from '../../store/JSONSlice'
import { setUpdatedData } from '../../store/UpdatedJSONSlice'


interface UpdatedCategory {
    updateTime: string;
    id: string;
    title: string;
    description: string;
    createdOn: string;
    updatedOn: string;
    enabled: boolean;
    order: number;
    icon: string;
    totalArticle: number;
}

interface AppState {
    updatedCategories: UpdatedCategory[];
}

export const Home = () => {
    const dispatch = useDispatch();
    const [enabledCategories, setEnabledCategories] = useState<Category[]>([]);
    const [originalCategories, setOriginalCategories] = useState<Category[]>([]);

    const navigate = useNavigate();
    const searchQuery = useSelector((state: RootState) => state.search);
    const jsonData = useSelector((state: RootState) => state.Json);
    useEffect(() => {

        dispatch(setJSONData(data))


        const currentDate = new Date(); // Current date

        const filteredCategory = jsonData.categories?.filter((el) => el.enabled === true);
        const sortedData = [...filteredCategory].sort((a, b) => a.order - b.order);

        const updatedCategories = sortedData.map((category) => {
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
        const updatedCategoriesData: AppState = {
            updatedCategories: updatedCategories,
        };


        console.log('updatedCategoriesData:', updatedCategoriesData)
        dispatch(setUpdatedData(updatedCategoriesData))
        setEnabledCategories(updatedCategories);
        setOriginalCategories(updatedCategories);


    }, [dispatch, jsonData]);

    useEffect(() => {
        if (searchQuery) {
            const data = originalCategories.filter((el) => el.title.toLowerCase().includes(searchQuery.toLowerCase()));
            setEnabledCategories(data);
        } else {
            // Reset back to the original data when the search query is empty
            setEnabledCategories(originalCategories);
        }
    }, [searchQuery, originalCategories]);

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
                            <CardComponent {...el} />
                        </div>
                    ))}
                </SimpleGrid>
            </Center>
        </>
    );
};