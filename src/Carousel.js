import React,{Component} from 'react'
import  Carousel  from 'react-elastic-carousel'
import './App.css';
import Item from "./items";
class App extends Component{
    
    render(){
        return(
            <Carousel>
                <Item><img src={require('./images/AWSSAACER.jpg').default} alt=' ' /></Item>
                <Item><img src={require('./images/AWSCloudPractitioner.jpg').default} alt=' ' /></Item>
                <Item><img src={require('./images/AWSSolutionArchitectAssociate.jpg').default} alt=' ' /></Item>
                <Item><img src={require('./images/FullstackEngineeringWithReact&NodeJs.jpg').default} alt=' ' /></Item>
                <Item><img src={require('./images/FullstackFundamentals.jpg').default} alt=' ' /></Item>
                <Item><img src={require('./images/BackendEngineeringNodeJsExpress.jpg').default} alt=' ' /></Item>
                <Item><img src={require('./images/Frontend.jpg').default} alt=' ' /></Item>
                <Item><img src={require('./images/AdvancedBehaviouralSkills.jpg').default} alt=' ' /></Item>
                <Item><img src={require('./images/BasicBehaviouralSkills.jpg').default} alt=' ' /></Item>
                <Item><img src={require('./images/FrontEndLibrariesCer.jpg').default} alt=' ' /></Item>
                <Item><img src={require('./images/APIs and Microservices.jpg').default} alt=' ' /></Item>
                <Item><img src={require('./images/DataVisualizationCer.jpg').default} alt=' ' /></Item>
                <Item><img src={require('./images/JavaScriptCer.jpg').default} alt=' ' /></Item>
                <Item><img src={require('./images/QualityAssuranceCer.jpg').default} alt=' ' /></Item>
                <Item><img src={require('./images/ResponsiveWebDesign.jpg').default} alt=' ' /></Item>
                <Item><img src={require('./images/Git.jpg').default} alt=' ' /></Item>
                <Item><img src={require('./images/React.jpg').default} alt=' ' /></Item>
            </Carousel> 
            

        )
    }
}
export default App


