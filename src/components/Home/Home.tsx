import { CardComponent } from "../../reusable/CardComponent/CardComponent";

import data from '../../assets/data/data.json'
import { SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Category } from "../../interface/Interface";



export const Home = () => {
    const categories = data.categories;
    const [enabledCategories, setEnabledCategories] = useState<Category[]>([]);

    useEffect(() => {
        const filteredCategory = categories?.filter((el) => el.enabled === true);
        const sortedData = [...filteredCategory].sort((a, b) => a.order - b.order);

        setEnabledCategories(sortedData);
    }, []);


    return (
        <>
            <SimpleGrid
                columns={{ lg: 3 }}
            >

                {enabledCategories?.map((el) => (
                    <div key={el.id}>

                        <CardComponent {...el} />
                    </div>
                ))}
            </SimpleGrid>
        </>
    );
};