import React,{Component} from 'react';
class IssueNameComponent extends Component {
   render(){
        return(
        <li onClick = {()=>{this.props.clickHandler(this.props.index)}}
                className={this.props.issue.completed?'completed':''} >{this.props.issue.name}
            </li>);
    }
}
export default IssueNameComponent;
