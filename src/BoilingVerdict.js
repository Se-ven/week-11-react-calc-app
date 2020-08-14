import React from 'react';


class BoilingVerdict extends React.Component {


    render() {
        if (this.props.celsius >= 100) {
            return (
                <div>
                    Water will boil
                </div>
            )
        }
        else {
            return (
                <div>
                    Water will not boil
                </div>
            )
        }
    }
}







export default BoilingVerdict;