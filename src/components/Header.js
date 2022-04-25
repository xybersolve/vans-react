import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color={showAdd ? 'red' : 'green' } text={showAdd ? 'Hide Add' : 'Add Task'} onClick={onAdd}></Button>
    </header>
  )
}

Header.defaultProps = {
  title: 'Van Task Tracker'
}

Header.propTypes = {
  title: PropTypes.string
}

// CSS in JS
// const headingStyle = {
//   color: 'red', 
//   backgroundColor: 'beige'
// }

export default Header