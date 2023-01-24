import Story from "./Story"

const StoryList = ({stories}) =>{
    const returnList =  stories.map(eachStory => {
           return <Story key = {eachStory.id} storyInfo = {eachStory}/>
    })

    return(
        <>
        <p>This is a story list</p>
        <ul>
            {returnList}
        </ul>
        </>
    )
}

export default StoryList