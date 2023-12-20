import React from 'react'
import Book from './Book'

function RenderingLists() {
    const bookList = [
        'to kill a mockingbird',
        'the great gatsby',
        'the catcher in the rye'
    ]

    const books = [
        {
            title: 'to kill a mockingbird',
            author: 'f. scott fitzgerald',
            pages: 281
        },
        {
            title: 'sdfgdfgdfg',
            author: 'f. scott fitzgerald',
            pages: 281 
        },
        {
            title: '123124',
            author: 'f. scott fitzgerald',
            pages: 281
        }
    ]
    return (
        <div>
            {/* {bookList.map((bookList) => <h2>{bookList}</h2>)}
            <hr />
            {
                books.map((book) => 
                    <div>
                        <h5>{book.title}</h5>
                        <p>{book.author}</p>
                        <p>{book.pages}</p>
                    </div>
                )
            } */}
            {
               books.map((book) => <Book book={book} />) 
            }
        </div>
    )
}

export default RenderingLists