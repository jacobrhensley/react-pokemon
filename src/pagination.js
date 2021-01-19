import React from 'react'

export default function Pagination({ gotoNextPage, gotoPrevPage }) {
  return (
    <div>
      {gotoPrevPage && <button className="btn btn-warning btn-outline-dark" onClick={gotoPrevPage}>Previous</button>}
      {gotoNextPage && <button className="btn btn-warning btn-outline-dark" onClick={gotoNextPage}>Next</button>}
    </div>
  )
}
