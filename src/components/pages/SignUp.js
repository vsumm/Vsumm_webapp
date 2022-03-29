// import React from 'react';
// import '../../App.css';

// export default function SignUp() {
//   return <h1 className='sign-up'>Thanks for visiting</h1>;
// }

import React from 'react';
import fire from './firebase';

class firebase extends React.Component {

  logout() {
    fire.auth().signOut();
  }

  render() {
    return (
      <div >
        
        <input className="sign-up" type="submit" onClick={this.logout}> S</input>
      </div>
    )
  }
}

export default firebase;