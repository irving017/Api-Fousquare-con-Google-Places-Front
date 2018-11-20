import React, { Component } from 'react';
import FormDisplay from './FormDisplay'
import './Form.css'
import axios from 'axios'
import Card from './Card'
import Grid from '@material-ui/core/Grid'

const URL = 'http://localhost:3000/getVenues'

class Form extends Component {

  state={
    info:{},
    results:[]
  }

  handleChange=(e)=>{
    const field = e.target.name
    const value = e.target.value
    const {info} = this.state
    info[field]=value
    this.setState({info})
  }

  handleSubmit=(e)=>{
    e.preventDefault()
    const {info} = this.state
    if(!info.place || !info.lat)return  
    axios.post(URL,info)
    .then(res=>{
      this.setState({results:res.data})
    })
    .catch(e=>console.log(e))
  }

  onPlaceSelected = ( place ) => {
    const lat= place.geometry.location.lat()
    const lng= place.geometry.location.lng()
    const {info} = this.state
    info['lat']=lat
    info['lng']=lng
    console.log(info)
    this.setState({info:info})
  }

  render() {
    const {results} = this.state
    return (
      <div className='mainDiv'>
        <FormDisplay
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        onPlaceSelected={this.onPlaceSelected}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAZQpJSxUACY_4AsB78DHFeoZL43X-Refc&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `100%` }} />}
        />
        <Grid container spacing={16} style={{marginTop:40,width:'90%',marginLeft:'5%'}}>
        {results.length!==0?results.map((e,i)=><Card key={i} e={e}/>):''} 
        </Grid>
      </div>
    );
  }
}

export default Form;
