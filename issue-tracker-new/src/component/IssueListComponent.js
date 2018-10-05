import React,{Component} from 'react';
import IssueNameComponent from './IssueNameComponent';
class IssueListComponent extends Component {
    constructor(props){
        super(props);
        this.changeStatus=this.changeStatus.bind(this);
        this.state={
            issues:[
                {name:'Create React App', completed:false},
                {name:'Create React POC', completed:true},
                {name:'Create React PPT', completed:false}
             ]
        }
    }

    changeStatus(index){
        var issues = this.state.issues;
        var issue = issues[index];
        issue.completed = !issue.completed;
        this.setState({
            issues:issues
        });
        console.log(this.state.issues[index]);
    }

    render(){
        return(
        <ul>
            {
                this.state.issues.map((issue,index)=>{
                    return <IssueNameComponent
                    key={issue.name} 
                    issue={issue}
                    index={index}
                    clickHandler={this.changeStatus}/>
                })}
            
            </ul>);
        
    }
}
export default IssueListComponent;
