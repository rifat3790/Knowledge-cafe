
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import BookMarks from './Components/BookMarks/BookMarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0)

  const handleMarkAsRead = time =>{
    const newTime = parseInt(time);
    // console.log(typeof newTime);
    const newReadingTime = readingTime + newTime;
    setReadingTime(newReadingTime);
  }

  const handleAddToBookmark = blog =>{
    // console.log("Bookmark adding soon");
    // console.log(blog);
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  return (
    
    <>
      
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleMarkAsRead={handleMarkAsRead} handleAddToBookmark={handleAddToBookmark}></Blogs>
      <BookMarks readingTime={readingTime} bookmarks={bookmarks}></BookMarks>
      </div>
    </>
  )
}

export default App
