/**
 * AddEditPartner
 */
import React, { useState } from "react";
import Pagination from "react-js-pagination";

import Data from "./MOCK_DATA.json";
import "./App.css";

const PaginatedContent = () => {
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

  const renderStudentList = currentStudentList.map((student) => {
    return (
      <tr>
        {header.map((items, index) => (
          <td key={index}>{student[items]}</td>
        ))}
      </tr>
    );
  });
  const handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="App">
        <tabel>
          {header.map((item, index) => (
            <th key={index}>{item}</th>
          ))}
          {renderStudentList}
        </tabel>
      </div>
      <div className="pagination">
        <Pagination
          activePage={activePage}
          itemsCountPerPage={5}
          totalItemsCount={Data.length}
          pageRangeDisplayed={3}
          hideDisabled
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default PaginatedContent;
