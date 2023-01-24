const Story = ({storyInfo}) =>{
    return (<li key = {storyInfo.id}>
    <p>Title:{storyInfo.title}</p>
    
    <p>Author:{storyInfo.by}</p>

    <p>Link:{storyInfo.url}</p>
   
    <p>Comments:{storyInfo.kids}</p>
  
    </li>)}

export default Story

