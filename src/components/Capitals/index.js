import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {uniqueId: countryAndCapitalsList[0].id}

  changeCountry = e => {
    this.setState({uniqueId: e.target.value})
  }

  render() {
    const {uniqueId} = this.state
    const particularCapital = countryAndCapitalsList.filter(
      each => each.id === uniqueId,
    )

    return (
      <div className="mainContainer">
        <div className="subContainer">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="countryContainer">
            <select
              value={uniqueId}
              className="capitals"
              onChange={this.changeCountry}
            >
              {countryAndCapitalsList.map(each => (
                <option value={each.id} key={each.id}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="description">is capital of which country?</p>
          </div>
          <p className="country">{particularCapital[0].country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
