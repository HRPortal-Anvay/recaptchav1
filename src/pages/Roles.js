import React, { Component } from 'react'
import './Roles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import RoleAccordion from '../components/RoleAccordion';


export default class Roles extends Component {

  constructor() {
    super()
    this.state = {
      inputValue: "",
      empList: [
        
      ]
    }
  }

  txtEmployee = e => {
    this.setState({ inputValue: e.target.value })
  }

  addNewEmp = () => {
    this.setState(x => ({
      inputValue: "",
      empList: [
        ...x.empList,
        { empNames: x.inputValue }
      ],
    }))
    // console.log(this.inputValue + "hello")
  }

  selectedRole() {
    var mylist = document.getElementById("r-list");
    document.getElementById("role").value = mylist.options[mylist.selectedIndex].text;
    console.log(mylist.options[mylist.selectedIndex].text)
  }

  render() {

    let empRecords = this.state.empList.map(x => {
      return (
        <option>
          {x.empNames}
        </option>
      )
    })

    return (
      <div className='r-roles'>
        <form className='r-form'>
          <select className='r-list' id='r-list' onChange={this.selectedRole}>
            <option> </option>
            <option> HR </option>
            <option> Admin </option>
            <option> Manager </option>
            <option> Employee </option>
            { empRecords }
          </select>
        </form>

        <button className='plus-btn' onClick={this.addNewEmp}>
          <FontAwesomeIcon icon={faCirclePlus} className="plus" size='2x' />
        </button>
        <hr className='hr' />

        <div className="role-name">
          <ul className='flex-container space-between'>
            <li className='flex-item'>Role Name:</li>
            <li>
              <input 
                type="text" 
                id="role" 
                size="20" 
                className='flex-item'
                onChange={this.txtEmployee} 
                value={this.state.inputValue}
              />
            </li>
          </ul>
        </div>
        <br /> <br />
        <RoleAccordion />
      </div>
    )
  }
}
