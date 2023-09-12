import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import CategoryButton from './components/CategoryButton'

function App() {
    const [count, setCount] = useState(0)
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState({})

    useEffect(() => {
        console.log('Inside useEffect here')
        // make a request to the Devs API for the data about devs to list on the page
        axios
            .get('https://opentdb.com/api_category.php')
            .then((response) => {
                console.log(response)
                setCategories(response.data.trivia_categories)
                // categories is the state, setCategories is the setter function and allows us to change the value to something else
            })
    }, [])
    console.log(categories)
    // array.map try to map over the array of categories and render buttons
    return (
        <>
            <header>
                <h1>Trivia Page</h1>
            </header>
            {categories.map((category) => (
                // map goes through each index of the array and grabs that information 
                <CategoryButton
                    categoryId={category.id}
                    name={category.name}
                    key={category.id}
                    randomThing={'Hi hi hi'}
                    setSelectedCategory={setSelectedCategory}
                />
            ))}
        </>
    )
}

export default App
