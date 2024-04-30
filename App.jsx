import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState([])
  const [bookmarks,setBookMarks]=useState([]);
  const [readingTime,setReadingTime]=useState(0);

  const handleAddToBookMark=blog=>{
    const newBookMark=[...bookmarks,blog];
    setBookMarks(newBookMark);
  }

  const handleMarkAsRead=(id,time)=>{
    console.log('making as read',time);
    setReadingTime(readingTime);
    //console.log('remove bookmark',id)
    const remainingBookmarks=bookmarks.filter(bookmark=>bookmark.id!==id);
    setBookMarks(remainingBookmarks);
    
      
  }

  const handleAddToBookmark=blog=>{
    //console.log(blog)

    const newBookmarks=[...newBookmarks,blog]
    newBookmarks(newBookmarks)

  }

  return (
    <>
      
      <Header></Header>
      <bookmarks bookmarks={bookmarks} readingTime={readingTime}></bookmarks>
      <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleAddToBookmark={handleAddToBookmark}
      handleMarkAsRead={handleMarkAsRead}></Blogs>
      </div>
      
    </>
  )
}

export default App
