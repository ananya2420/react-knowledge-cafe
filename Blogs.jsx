import propTypes from 'prop-types';



const Blogs=({handleAddToBookMark,handleMarkAsRead})=>{
    const [blogs,setBlogs]=useState([]);

}

useEffect(()=>{
    fetch('blogs.json')
    .then(res=>res.json())
    .then(data=>console.log(data))

})
return(
    <div className='md:w-2/3'>
        <h1 className='text-4xl'>Blogs:{Blogs.length}</h1>
        {
            Blogs.map(blog=><blog key={blog.id} blog={blog} handleAddToBookMark={handleAddToBookmark}
            handleMarkAsRead={handleMarkAsRead}></blog>)
        }
        
          

    </div>
)
Blogs.propTypes={
    handleAddToBookmark: propTypes.func,
    handleMarkAsRead:propTypes.func
}
export default Blogs;
