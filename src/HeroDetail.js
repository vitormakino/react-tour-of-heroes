import React from 'react';

class HeroDetail extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        if(this.props.onNameChange) {
            this.props.onNameChange(event.target.value);
        }        
    }

    render() {
        const { id, name } = this.props;

        if(!id) {
            return <span />
        }
        return (
            <div>
             <h2>{name} Details</h2>
             <div><span>id: </span>{id}</div>
             <div>
               <label>name:
                 <input type="text"
                        placeholder="name"
                        value={name}
                        onChange={this.handleChange}/>
               </label>
             </div>
            </div>
            );
    }
}

export default HeroDetail;