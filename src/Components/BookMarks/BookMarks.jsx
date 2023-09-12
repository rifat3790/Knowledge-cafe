
import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const BookMarks = ({bookmarks}) => {
    return (
        
        <div className="md:w-1/3 bg-gray-300 ml-4 pt-8 mt-10">
            <h2 className='text-3xl text-center '>Bookmarked Blogs: {bookmarks.length} </h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark> )
            }
        </div>
        
    );
};

BookMarks.propTypes = {
    bookmarks: PropTypes.array
}

export default BookMarks;