import React, { useState } from "react";
import Pagination from "react-js-pagination";
import Data from "./MOCK_DATA.json"
const PaginatedContent = () => {
  // Data to be rendered using pagination.
//    const todos = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const todos= Data;
    const todosPerPage = 3;
   const [ activePage, setCurrentPage ] = useState( 1 );

   // Logic for displaying current todos
   const indexOfLastTodo  = activePage * todosPerPage;
   const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
   const currentTodos     = Data.slice( indexOfFirstTodo, indexOfLastTodo );

   const renderTodos = currentTodos.map( ( todo, index ) => {
      return <li key={ index }>{ todo.name }</li>;
   } );

   const handlePageChange = ( pageNumber ) => {
      console.log( `active page is ${ pageNumber }` );
      setCurrentPage( pageNumber )
   };

   return (
      <div>
         <div className="result">
            { renderTodos }
         </div>
         <div className="pagination">
            <Pagination
               activePage={ activePage }
               itemsCountPerPage={ 5 }
               totalItemsCount={ todos.length }
               pageRangeDisplayed={ 3 }
               onChange={ handlePageChange }
            />
         </div>
      </div>
   )

}

export default PaginatedContent;





// import React, { useState } from "react";

// function usePagination(data, itemsPerPage) {
//   const [currentPage, setCurrentPage] = useState(1);
//   const maxPage = Math.ceil(data.length / itemsPerPage);

//   function currentData() {
//     const begin = (currentPage - 1) * itemsPerPage;
//     const end = begin + itemsPerPage;
//     return data.slice(begin, end);
//   }

//   function next() {
//     setCurrentPage(currentPage => Math.min(currentPage + 1, maxPage));
//   }

//   function prev() {
//     setCurrentPage(currentPage => Math.max(currentPage - 1, 1));
//   }

//   function jump(page) {
//     const pageNumber = Math.max(1, page);
//     setCurrentPage(currentPage => Math.min(pageNumber, maxPage));
//   }

//   return { next, prev, jump, currentData, currentPage, maxPage };
// }

// export default usePagination;
