import React ,{Component} from 'react';
import logo from '../logo.svg';
import './HomeStyle.css';
import Api from './Api';
class Home extends Component {
    constructor(props){
      super(props);
      this.state = {
          products : [],
          cartTotal : 0
      }
    }
  componentDidMount(){
    this.getProducts();
  }
  
  addCart=()=> {
    //console.log("cart ")
    let cartTotal = this.state.cartTotal+1;
   // console.log(cartTotal);
    this.setState({cartTotal:cartTotal})
  }
  getProducts(){
         // this.setState({ isLoading: true });
          Api.getProducts().then((response) => {
              //console.log('Result', response);
             console.log(response.data);
             this.setState({products : response.data})
          }).catch((error) => {
              let message = 'Cannot Login, Please Try Again.';

          });
      
  
  }
  productList(){
      return this.state.products.map((item,i) => (
        <div className="Product">
        <h1>{item.productName}</h1>
        <p> {item.productDescription} </p>
        <img width="250px" src={item.imageUrl}  alt="Image" />
        <div>
          <button onClick={this.addCart}> Add to cart</button>
        </div>
    </div>
      ));
    
  }
  render() {
    return (
      <div>
      <header className="header">
        Items in Cart :: {this.state.cartTotal}
      </header>
      <h1 className="header">Product List</h1>

      <div className="ProductListContainer">
      { this.productList() }
          {/* <div className="Product">
              <h1> TV </h1>
              <p> Description  Description Description Description </p>
              <img width="250px" src={logo} className="App-logo" alt="logo" />
          </div>

          <div className="Product">
              <h1> TV </h1>
              <p> Description  Description Description Description </p>
              <img width="250px" src={logo} className="App-logo" alt="logo" />
          </div>

          <div className="Product">
              <h1> TV </h1>
              <p> Description  Description Description Description </p>
              <img width="250px" src={logo} className="App-logo" alt="logo" />
          </div>

          <div className="Product">
              <h1> TV </h1>
              <p> Description  Description Description Description </p>
              <img width="250px" src={logo} className="App-logo" alt="logo" />
          </div>

          <div className="Product">
              <h1> TV </h1>
              <p> Description  Description Description Description </p>
              <img width="250px" src={logo} className="App-logo" alt="logo" />
          </div>

          <div className="Product">
              <h1> TV </h1>
              <p> Description  Description Description Description </p>
              <img width="250px" src={logo} className="App-logo" alt="logo" />
          </div> */}

      </div>

     
  </div>
    );
  }
}

// const Home = ()=>{
//       return(
//               <div>
                   
//                    <p>Home Page</p>
//               </div>
//       );
// };
export default Home;
