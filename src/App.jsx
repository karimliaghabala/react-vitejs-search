import React, { Component } from 'react'

export default class App extends Component {

  state = {
    customName: "",
    employees: []
  }

  componentDidMount() {
    fetch("https://5ea5ca472d86f00016b4626d.mockapi.io/brotherhood")
      .then(res => res.json())
      .then(data => {
        this.setState({
          employees: data
        })
        console.log(data)
      })
  }
  getDataFilter = (event) => {
    this.setState({ customName: event.target.value })
    console.log(event.target.value)
  }

  render() {
    const { employees, customName } = this.state
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <label htmlFor="">İşçiləri axtar</label>
                <input type="text" onChange={this.getDataFilter} className="form-control" placeholder="" aria-describedby="helpId"></input>
                <small id="helpId" className="text-muted">İşçilərin ad və soyadını  daxil edin (Məs: Kərimli Ağabala)</small>
              </div>
              <table className="table">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Departament</th>
                    <th>Role</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    employees.filter(user => user.name == customName).map(item => (
                      <tr key={item.name}>
                        <td scope="row">{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.department}</td>
                        <td>{item.role}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    )
  }
}
