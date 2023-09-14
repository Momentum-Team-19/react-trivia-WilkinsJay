import { useState, useEffect } from 'react'
import './App.css'
import CategoryButton from './components/CategoryButton'
import { CategoryQuestions } from './components/CategoryQuestions'

function App() {
    const [count, setCount] = useState(0)
    const [categoryId, setCategoryId] = useState(null)

    return (
        <>
            <header>
                <h1>Trivia Page</h1>
            </header>
            {(!categoryId) ?

                <CategoryButton
                    categoryId={categoryId}
                />
                :
                <CategoryQuestions
                    categoryId={categoryId}
                    setCategoryId={setCategoryId}
                />
            }
        </>
    )
}

export default App
