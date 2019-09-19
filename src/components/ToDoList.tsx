import React, { Component } from 'react';
import Item from './Item';
import {ItemData} from '../types';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import logo from '../assets/todo_logo.png';

interface Items {
    items: ItemData[],
    currentItem: ItemData
}
interface itemProps{
  items?: ItemData[],
  currentItem?: ItemData,
  addItem: any,
  removeItem: any,
  updateItem: any,
  editItem: any,
  moveItem: any
}
class ToDoList  extends Component<itemProps, Items> {
  constructor (props: any) {
    super(props);
    this.state = {
      items: props.items,
      currentItem: props.currentItem
    };
    this.addItem = this.addItem.bind(this);
  }

  addItem() {
    console.log("ADDING iTEM");
    const newItem={
      id:  `${Math.random()*1000000}`,
      name: 'new Item',
      isComplete: false
    }
    this.props.addItem(newItem);
  }

    render() {
      return (
        <section>
          <section id="todoHeader" style={{marginBottom: "2rem"}}>
            <AppBar position="static" style={{ backgroundColor: '#000000', marginBottom: "10px", color: '#ffffff' }}>
              <Typography variant="title" style={{ lineHeight: '50px', color: "#ffffff", display:"flex", alignItems:"center"}}>
              <img src={logo} className="logo" style={{paddingLeft:"1rem"}}></img>
              <span style={{paddingLeft:"1rem"}}>To Do</span>
              </Typography>
            </AppBar>
              </section>
              
            <section className="itemsSection">
              <Button style={{border:"1px solid #000000", marginLeft:"5px", borderRadius:"5px",color:"#ffffff", backgroundColor:"#00000091", letterSpacing: "1.65px"}} onClick={this.addItem}>Add a list</Button>
              <div className="ItemsContainer">
              <Grid container spacing={24} style={{padding: '24px 0 24px 0'}}>
                  {
                      this.state.items.map( (item) => {
                        return <Grid key={item.id} item xs={12} sm={12} lg={12} xl={12}>
                           <Item moveItem={this.props.moveItem} editItem={this.props.editItem} updateItem={this.props.updateItem} removeItem={this.props.removeItem} key={item.id} item={item}></Item>
                        </Grid>
                      })
                  } 
                  
                  </Grid>
              </div>
            </section>
          
          </section>
      );
    }
  }
  
  export default ToDoList;