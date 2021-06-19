import React, { Component} from 'react';
import './ClientSidebar.css'
import { Row,Col,Card,Button,Form,Spinner} from 'react-bootstrap';
import axios from "axios";
export default class ClientSideBar extends Component{
  constructor(props){

  super(props)
  
  this.state={
    data:"india",
    loading:true,
    counts:{  'positive':10,
    'negative':10,
    'neutral':10,
    'tweets':'',
    'hashtag':{},
    'line_daily':{},
    'keyword':{},
    'company1_sentiment':{},
    'company2_sentiment':{},
    'company1_line':{},
    'company2_line':{},
    'company1_key':{},
    'company2_key':{},
    
  },
  
  } 
  this.onTrigger=this.onTrigger.bind(this)
  this.onSearch=this.onSearch.bind(this)

}
async onTrigger(event) {
    this.setState({loading:true})
    event.preventDefault();
    await axios.get('http://localhost:8000/clientpredict/',{params:{text:this.state.data}}).then((response) => {
    this.setState({counts:response.data})
    console.log("counts",this.state.counts)    
    this.props.parentCallback(this.state.counts);

      
        
    }).catch(function (error) {
        console.log(error);
    });
    this.setState({loading:false})


}

onSearch(e){
  this.setState({data:e.target.value})
}

componentDidMount(){
  
  this.setState({loading:true})
  axios.get('http://localhost:8000/clientpredict/',{params:{text:this.state.data}}).then((response) => {
  this.setState({counts:response.data})
  // console.log(this.state.counts.hashtag);
  this.props.parentCallback(this.state.counts);
  this.setState({loading:false})
  
      
  }).catch(function (error) {
      console.log(error);
  });
  // console.log(event.target.value)
}
    render(){

        function getDay(daysub)
        {
            var days=daysub; // Days you want to subtract
            var date = new Date();
            var last = new Date(date.getTime() - (days * 24 * 60 * 60 * 1000));
            var day =last.getDate();
            var month=last.getMonth()+1;
            var year=last.getFullYear();
            return (day+"/"+month+"/"+year);
        }
        return (
           
        <div className="    text-white  sidebar ">
   <div className="emp"></div>
   <Row>
<Col >
<Form onSubmit= {this.onTrigger}>
  
    <Form.Group controlId="formBasicText" bsPrefix="form__element">
    <Form.Label>Enter product</Form.Label>
    <Form.Control type="text" placeholder="Enter product to compare" />
    
    </Form.Group>
    
  <hr class='hrr'/>
  <Form.Group controlId="formKeyword" className="forms">
    <Form.Label></Form.Label>
    <Form.Control as="select" placeholder="Choose date">
    <option>Choose date..</option>
      <option>{getDay(0)}</option>
      <option>{getDay(1)}</option>
      <option>{getDay(2)}</option>
      <option>{getDay(3)}</option>
      <option>{getDay(4)}</option>
      <option>{getDay(5)}</option>
      <option>{getDay(6)}</option>
      
    </Form.Control>
    <Form.Text className="text-muted">
      We'll generate a detailed report of tweets containing the product
    </Form.Text>
  </Form.Group>

  <div className="forms-check">
 {this.state.loading ?<Spinner animation="border" role="status">
  <span className="sr-only">Loading...</span>
  </Spinner> :  
  <div>
  <Button
  className="formbutton" variant="primary"  type = "submit" value = "Submit">Search</Button>
  
  </div>
  } 
</div>
</Form>


</Col>
</Row>
<Row>
<Col >




</Col>
</Row>
          
                </div>
         
            );
    }



}