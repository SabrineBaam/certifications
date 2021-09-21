import React,{Component} from 'react'
import  Carousel  from 'react-elastic-carousel'
import './App.css';
import Item from "./items";
class App extends Component{
    
   
    render(){
        return(
                   <Carousel>
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


