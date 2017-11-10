import React from 'react';


export default class Background extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: []
    };
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=497&gender=female')
    .then( (results) => {
      return results.json();
    }).then( (data) => {
      console.log('api data', data);

      const pictures = data.results.map((pic) => {
        return (

            <div key={pic.login.sha256} className="background__person_container">
              <img src={pic.picture.large} className="background__person_image"/>
                 <div className="background__person_name_container">
                 <h5 className="background__person_name">
                 {pic.name.first} {pic.name.last} </h5> </div>
                 </div>

          )
      })
      this.setState({ pictures: pictures});
      console.log("state", this.state.pictures);

    })
  }

  render() {
    return (
      <div className="background">
      <div className="content-container">
        <h3 className="background__title"> Randomly Generated Pictures of People </h3>
        </div>


        <div className="container__pics">
          {this.state.pictures}
        </div>

      </div>
      )
  };

}
