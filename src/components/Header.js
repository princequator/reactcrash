import PropTypes from 'prop-types';
import Button from './Button';
// import Nav from "./Nav";

export const Header = (props) => {
    const onClick = (e) => {
        console.log("Button Clicked", e)
    }

    //const t = props.title;
    return (
        <header className="header">
            Header
            {/* <h1> Hello {t}</h1> */}
            {/* <Nav /> */}
            <Button color="green" text="add" onClick={onClick} />
        </header>
    )
}

//To set default Properties
Header.defaultProps = {
    title: "try"
}

//to set basic validation or type check
Header.propTypes = {
    title: PropTypes.string,
}

//CSS in JS
// const headingStyles = {
//     color: 'green',
//     background: 'black',
// }