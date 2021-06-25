import PropTypes from 'prop-types'
// import { useState, useEffect } from 'react';

export const Button = ({ color, text, onClick }) => {
    return (
        <button onClick={onClick} style={{ backgroundColor: color }} className='btn'>
            {text}
        </button>
    )
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button


// const Button = ({ color, text, onClick }) => {

//     let [count, setCount] = useState(0);
//     let [newc, setNewC] = useState(5); //Dummy State

//     const increment = () => {
//         console.log(count);
//         setCount(lastcount => lastcount + 1); //Use function instead of a direct value
//     }

//     const decrement = () => {
//         console.log(count);
//         setCount(lastcount => lastcount - 1);
//     }

//     useEffect(() => {
//         console.log("Button Component rendered");
//     }, [newc]) //Return in useEffect hook is used to cleanup side effects

//     return (
//         <div>
//             <p>{count}</p>
//             <p>{newc}</p>
//             <button onClick={increment} className="btn"
//                 style={{ backgroundColor: color }}>
//                 {text}
//             </button>
//             <button onClick={decrement} className="btn"
//                 style={{ backgroundColor: color }}>
//                 Subtract
//             </button>
//         </div>)

// }


