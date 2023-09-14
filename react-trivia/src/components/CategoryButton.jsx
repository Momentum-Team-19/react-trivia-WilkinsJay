import { useState, useEffect } from 'react'
import axios from 'axios'
import '../App.css'

const CategoryButton = ({ setCategoryId }) => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        // where we're calling the API to recieve information; axios call
        axios
            .get('https://opentdb.com/api_category.php')
            .then((response) => {
                console.log(response)
                setCategories(response.data.trivia_categories)
                // categories is the state, setCategories is the setter function and allows us to change the value to something else
            })
    }, [])

    const handleClick = (category) => {
        console.log(`You Clicked on ${category.name}, id ${category.id}!`)
        setCategoryId(category.id);
    }

    return (
        categories.map((category) => (
            <button
                key={category.id}
                onClick={() => handleClick(category)}
            >
                <h2 className="text-lg font-semibold">
                    {category.name}
                </h2>
            </button>
        )))
}

export default CategoryButton