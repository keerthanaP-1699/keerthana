// import CommentsCount from "./HOC/CommentsCount"
// import LikesCount from "./HOC/LikesCount"
import PaginatedContent from "./pagination"
import './App.css';

function App() {
  return (
    <div className="App">
      <PaginatedContent />
      {/* <LikesCount />
      <CommentsCount /> */}
    </div>
  );
}

export default App;



// import React, { useState } from "react";
// import usePagination from "./pagination";
// import { default as data } from "./MOCK_DATA.json";

// export default function App() {
//   let [page, setPage] = useState(1);
//   const PER_PAGE = 5;

//   const count = Math.ceil(data.length / PER_PAGE);
//   const _DATA = usePagination(data, PER_PAGE);

//   const handleChange = (e, p) => {
//     setPage(p);
//     _DATA.jump(p);
//   };

//   return (
//     <Box p="5">

//       <List p="10" pt="3" spacing={2}>
//         {_DATA.currentData().map(v => {
//           return (
//             <ListItem key={v.id} listStyleType="disc">
//               <span>{v.id}</span>{" "}
//               <Divider display="inline" orientation="vertical" />
//               <span> {v.name}</span>{" "}
//               <Divider display="inline" orientation="vertical" />
//               <span>
//                 <Tag color="#0f4211">${v.age}</Tag>
//               </span>
//               <span>{v.department}</span>
//             </ListItem>
//           );
//         })}
//       </List>

//       <Pagination
//         count={count}
//         size="large"
//         page={page}
//         variant="outlined"
//         shape="rounded"
//         onChange={handleChange}
//       />
//     </Box>
//   );
// }
