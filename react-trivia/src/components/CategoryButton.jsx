const CategoryButton = ({ name, categoryId, setSelectedCategory }) => {

    const handleClick = () => {
        console.log(`You Clicked on ${name}, id ${categoryId}!`)
        setSelectedCategory({ name: name, id: categoryId })
    }

    return (
        <button
            id={categoryId}
            onClick={handleClick}
        >
            <h2 key={categoryId} className="text-lg font-semibold">
                {name}
            </h2>
        </button>
    )
}

export default CategoryButton