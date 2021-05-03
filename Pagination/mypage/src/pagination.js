/**
 * AddEditPartner
 */
import React, { useState } from "react";
import ReactPagination from "react-js-pagination";

//json data for studentList
import Data from "./MOCK_DATA.json";
import "./App.css";

const Pagination = () => {
  //key values for print values in tabel
  const header = ["id", "name", "age", "department"];
  const studentListPerPage = 5;
  const [activePage, setCurrentPage] = useState(1);

  // Logic for displaying current studentList
  const indexOfLastStudentList = activePage * studentListPerPage;
  const indexOfFirstStudentList = indexOfLastStudentList - studentListPerPage;
  const currentStudentList = Data.slice(
    indexOfFirstStudentList,
    indexOfLastStudentList
  );

  //renders the studentList for each page
  const renderStudentList = currentStudentList.map((student) => {
    return (
      <tr>
        {header.map((items, index) => (
          <td key={index}>{student[items]}</td>
        ))}
      </tr>
    );
  });

  //handle currentpageNumber
  const handlePageChange = (pageNumber) => {
    console.log(pageNumber);
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="App">
        <tabel>
          {/* show the heading for tabel */}
          <tr>
            {header.map((item, index) => (
              <th key={index}>{item}</th>
            ))}
          </tr>
          {/* rendered studentList */}
          {renderStudentList}
        </tabel>
      </div>
      <div className="pagination">
        
        <ReactPagination
          activePage={activePage}
          itemsCountPerPage={5}
          totalItemsCount={Data.length}
          pageRangeDisplayed={3}
          hideDisabled
          onChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default Pagination;
