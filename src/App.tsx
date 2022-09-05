import './App.css'
import { useState } from 'react'
import ReactPaginate from 'react-paginate';
import Image1 from './assets/im1.jpg'
import Image2 from './assets/im2.jfif'
import Image3 from './assets/im3.jpg'

export default function App() {
  const [images, setImages] = useState([Image1, Image2, Image3])
  const [currentImage, setCurrentImage] = useState(images[0])

  const [pageCount, setPageCount] = useState(images.length)


  function handlePageClick(event: any) {
    console.log(event.selected);
    setCurrentImage(images[event.selected])
  }
  return (
    <div className="App">
      <div>
        <img src={currentImage} alt="" width="600px" />
      </div>
      <div>
        <ReactPaginate
          containerClassName="paginate"
          activeClassName="activePage"
          pageClassName="pageClassName"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
        />
      </div>

    </div>
  )
}


