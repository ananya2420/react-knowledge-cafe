import react from 'react'
import propTypes from 'propTypes'


const Bookmarks=({bookmarks,readingTime})=>{
    return(
        <div className="md:w-1/3">
            <div>
                <h3 className='text-4xl'>ReadingTime:{readingTime}</h3>
            </div>
            <h2 className='text-3xl text-center bg-grey-300'>Bookmarks blogs:{bookmarks.length}</h2>
            {
                bookmarks.map(bookmark=><bookmark key={bookmark.id} bookmark={bookmark}></bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes={
    Bookmarks:propTypes.array,
    readingTime:propTypes.number

}
export default Bookmarks;

