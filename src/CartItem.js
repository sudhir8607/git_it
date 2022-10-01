import React from 'react';

class CartItem extends React.Component
{
   
                                             /*we use constructer for state the component and store data*/
  constructor(){
                  super();                   /* we need super() to use contructer when we use in inherit class component*/
                 this.state={ 
                                 price:999,
                                 title:'phone',    /*now we create object to  */
                                 qty  :1,
                                 img :''
  
                           } 
                                                                                            
                           //this.increaseQuantity=this.increaseQuantity.bind(this);            /*binding in constructor another solution we can use arrow function*/           
                 }
                 
                 
                  increaseQuantity=()=>{                                 /*we can use arrow function which automatcally bind the value of this to instance of the class*/
                                           
                                           // this.state.qty +=1;
                                            //console.log('this',this.state);

                                              //form 1    => use when no need prestate like title
                                        //this.setState(
                                         //           {qty:this.state.qty+1})

                                          //forum2     =>  use when need prevstate eg qty

                                          this.setState ( (prevState)=>{
                                            return{
                                                     qty:prevState.qty+1
                                            }
                                          });
                                                                         




                                        }

                                        decreaseQuantity=()=>{      
                                                              const{qty}=this.state;
                                                              if(qty===0){
                                                                return;
                                                              }
                                           
                                          this.setState ( (prevState)=>{
                                            return{
                                                     qty:prevState.qty-1
                                            }
                                          });
                                                                         




                                        }




 
  
  
  
  
                 render () 

            
          {
              const{price,title,qty}=this.state;       {/*we make object  distructor to access js in jxs */ }
     
              return (
                 <div className="cart-item">        {/*main class component in jxs */ }        
                                     
               <div className="left-block">                 
             <img style={styles.image} />             
              </div>
             <div className="right-block">

                 <div style={ { fontSize: 25 } }>{this.state.title}</div>
                  <div style={ { color: '#777' } }>{this.state.qty}</div>
                 <div className="cart-item-actions">
                   <img alt="increase" className="action-icons" src="https://cdn-icons-png.flaticon.com/128/594/594465.png"
                  onClick={this.increaseQuantity}                                     
                        />                                                               

         
                <img alt="decrease" className="action-icons" src="https://t3.ftcdn.net/jpg/03/73/49/86/240_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg"
                       
                 onClick={this.decreaseQuantity  }      
                        
                />
                <img alt="delete" className="action-icons" src="https://cdn-icons-png.flaticon.com/128/1175/1175156.png"/>
                  </div>
               </div>
    
                </div>

                    )
              }
}


const styles = {
        image: {
        height: 110,
          width: 110,
         borderRadius: 4,
         background: '#ccc'
  }
}

export default CartItem;