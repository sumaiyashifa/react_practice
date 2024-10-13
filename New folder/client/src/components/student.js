import PropTypes from 'prop-types'
export function Student(props){
    return(
    <div>
        <p>Name: {props.name}</p>
        <p>age: {props.age}</p>
        <p>Student:{props.isStudent? "yes":"no"}</p>
    </div>
    )
    
}
Student.prototype={
    name:  PropTypes.string,
    age: PropTypes.number,
}
Student.defaultProps={
    name:"khan",
    age:0,
    isStudent:false,
}