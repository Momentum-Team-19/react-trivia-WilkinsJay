import { useState, useEffect } from 'react'
import axios from 'axios'

export const CategoryQuestions = ({ categoryId, setCategoryId }) => {
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        // where we're calling the API to recieve information; axios call
        axios
            .get(`https://opentdb.com/api.php?amount=10&category=${categoryId}`)
            .then((response) => {
                console.log(response)
                setQuestions(response.data.results)
                // categories is the state, setCategories is the setter function and allows us to change the value to something else
            })
    }, [categoryId])
    return (
        <>
        </>
    )
}