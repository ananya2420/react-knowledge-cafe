
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
const Blog=({Blog,handleAddToBookMark,handleMarkAsRead})=>{
    //console.log(Blog);

    const{id,title,cover,author,author_img,posted_date,hastags,reading_time}=Blog;

    return(
        <div className='mb-20'>
            
            <h2 className='text-4xl'>{title}</h2>
            
           
            p{
                hastags.map((hash,idx)=><span key={idx}><a href="">#{hash}</a></span>)
            }
            <button onClick={()=>handleMarkAsRead(id,reading_time)} className='text-purple-800 font-bold underline mb-20 space-y-4'>Mark as read</button>
            
            <div className='flex justify-between'>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt=""/>

                </div>
                <div className='ml-6'>
                    <h3 className="text-2xl">{author}</h3>
                    <p>{posted_date}</p>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handleAddToBookMark} className='ml-2 text-red-600'><FaBookmark></FaBookmark></button>
                </div>

            </div>
            


        </div>

       
    );

    };
    Blog.propTypes={
        Blog:propTypes.Object.isRequired,
        handleAddToBookMark: propTypes.func,
        handleMarkAsRead: propTypes.func
        
    }

export default Blog;


