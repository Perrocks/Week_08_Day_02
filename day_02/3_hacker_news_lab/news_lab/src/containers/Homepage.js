import StoryList from "../components/StoryList"
import {useState, useEffect} from 'react'

const Homepage = () =>{

console.log("starting")

    //Storing the current list
    const [storiesRetrieved, setStoriesRetrieved] = useState([])
    // const [idList, setIdList] = useState([])

    // //Get API
    useEffect(() =>{
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
            .then(res => res.json())
            .then(id => {
                console.log("Updating shortIdList")
                const shortIdList = []
                for (let i = 0;i<8;i++){
                    shortIdList.push(id[i])
                }
                // setIdList(shortIdList)
                const loadingStories = shortIdList.map((id)=>{
                    console.log("Loading Stories")
                    const string1 = 'https://hacker-news.firebaseio.com/v0/item/'
                    const string2 = id.toString()
                    const string3 = '.json'
                    const urlString = string1 + string2 + string3
                    return fetch(urlString)
                            .then(res => res.json())
                })
            
                Promise.all(loadingStories)
                .then(stories => {
                    console.log("Promises loaded")
                    setStoriesRetrieved(stories)
                })

            })
    }, [])
        //Get story from id
    



    if (storiesRetrieved.length > 0){
        return(
             <div>
                <h2>Home</h2>
                    {storiesRetrieved && <StoryList stories = {storiesRetrieved}/>}
             </div>
             )
        }

        return(<h2>Data loading</h2>)
}

export default Homepage