// const SimpleCallbackRef = () => {
//     //let inputRef: "null";

//     const onClick = () => {
//         console.log('INPUT VALUE: ', inputRef?.value);
//     }

//     const onFocusClick = () => {
//         console.log('Focus input');
//         inputRef?.focus();
//     }
//     console.log('Rendering')
//     return (
//         <div>
//             <input ref={node => { inputRef = node; }} />
//             <button onClick={onClick}>Log value</button>
//             <button onClick={onFocusClick}>Focus on input</button>
//         </div>
//     );
// };
// export default SimpleCallbackRef;