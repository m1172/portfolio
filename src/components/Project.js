import React,{Component} from "react";
import "../styles/project.css"

class Project extends Component{

    constructor(props){
        super(props)
    }
   
   
    render(){
        return(
            <div className="col-sm-6">
                <div class="project-item">
                    <div class="project-info">
                        <h1>{this.props.projectName}</h1>
                        <h4>{this.props.projectDescription}</h4>
                        <h5>Click <a href={this.props.liveDemo} style={{color:"#03aad7", cursor:"pointer"}}>here</a> for live demo</h5>
                        <h5>Click <a href={this.props.gitSource} target="_blank"style={{color:"#03aad7", cursor:"pointer"}}>here</a> for source code</h5>
                    </div>
                    <div class="project-img">
                        <img src={this.props.imageSource} alt="img"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Project;