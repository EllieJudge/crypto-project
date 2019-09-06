import React from 'react';
import { Star } from '@material-ui/icons';

class StarRating extends React.Component {
    
    state = {
        color: 'primary'//blue
      }

     favFunc = () => {
        if(this.state.color !== 'secondary'){//red
            console.log('like')
            this.setState({
              color: 'secondary'//red
          })
        }
        else {
            console.log('no like')
            this.setState({
              color: 'primary'//blue
          })
        }
      }
    
    render() {
        return (
            
            <div>
                <Star color={this.state.color} onClick={this.favFunc}/>
            </div>
        )
    }
}

export default StarRating;