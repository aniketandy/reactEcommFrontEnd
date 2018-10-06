import React, { Component } from 'react';
import './AdminProduct.css';
import logo from '../../logo.svg'
import Api from '../Api';
class AdminProducts extends Component {
    constructor(props){
        super(props);
        this.state = {
            products : [],
            cartTotal : 0,
            isPorodcutList : true,
            isProductEdit : false,
            isPorodcutAdd:false,
            productJson : {},
            productName:'',
            productDes:'',
            imageUrl :'',
            productId :'',
            newProductName:'',
            newProductDes:'',
            newImageUrl :''
        }
      }
    componentDidMount(){
      this.getProducts();
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
 updateProduct=(item)=>{
     console.log(item);
     this.setState({
        isPorodcutList : false,
        isProductEdit : true,
        isPorodcutAdd:false,
        productName : item.productName,
        productDes : item.productDescription,
        imageUrl : item.imageUrl,
        productId : item.productId   
     })
 }
 productList(){
     return this.state.products.map((item,i) => (
        <div className="Product">
            <h1>{item.productName}</h1>
            <p> {item.productDescription} </p>
            <img width="250px" src={item.imageUrl}  alt="Image" />
            <div>
                <button  onClick={() => this.updateProduct(item)}> Update</button>
            </div>
        </div>
     ));
   
 }
 addProduct=()=>{
     this.setState({
        isPorodcutList : false,
        isProductEdit : false,
        isPorodcutAdd:true,
     })
 }
 backFun=()=>{
    this.setState({
       isPorodcutList : true,
       isProductEdit : false,
       isPorodcutAdd:false,
    })
}
updateProductClick=()=>{
    var self = this;
   var productName = this.state.productName;
   var productDes = this.state.productDes;
   var imageUrl = this.state.imageUrl;
   var productId = this.state.productId;  
   if(productName!='' && productDes!=''){
         Api.updateProduct(productId,productName,productDes,imageUrl).then(result =>{
            self.getProducts();
            self.backFun();
            },err=>{
          })
   }else{
       alert('Please enter product name and description');
   }
}
addProductClick=()=>{
    var self = this;
   var productName = this.state.newProductName;
   var productDes = this.state.newProductDes;
   var imageUrl = this.state.newImageUrl;
  // var productId = this.state.productId;  
   if(productName!='' && productDes!=''){
         Api.addProduct(productName,productDes,imageUrl).then(result =>{
            self.getProducts();
            self.backFun();
            },err=>{
          })
   }else{
       alert('Please enter product name and description');
   }
}
 render() {
        return (
            <div>
                <header className="header">
                    <button onClick={this.addProduct}> Add Product</button>
                  </header>
                <h1 className="header">Product List</h1>
                { (this.state.isPorodcutList ) ?  
                    <div className="ProductListContainer">
                    { this.productList() }
            </div> : null
            
            }
                

              { (this.state.isPorodcutAdd ) && <div className="ProductAdd">
                    <hr></hr>
                    <button onClick={this.backFun} > Back </button>
                    <hr></hr>
                    <div className="Product">
                        <form>
                            <div>
                                <label> Product Name </label><input type="text" onChange={(evt)=>{this.setState({newProductName : evt.target.value})}}/>
                            </div>
                            <div>
                                <label> Product Description </label><input type="text"  onChange={(evt)=>{this.setState({newProductDes : evt.target.value})}}/>
                            </div>
                            <div>
                                <label> Product Url </label><input type="text" onChange={(evt)=>{this.setState({newImageUrl : evt.target.value})}} />
                            </div>
                            <div>
                             <button type="submit"  onClick={this.addProductClick}> Add Product </button>
                            </div>
                        </form>
                    </div>

                </div>
              } 
              { (this.state.isProductEdit) && <div className="ProductEdit">
                    <hr></hr>
                    <button onClick={this.backFun} > Back </button>
                    <hr></hr>
                    <div className="Product">
                    <form>
                            <div>
                                <label> Product Name </label><input type="text"  value={this.state.productName} onChange={(evt)=>{this.setState({productName : evt.target.value})}} />
                            </div>
                            <div>
                                <label> Product Description </label><input type="text"  value={this.state.productDes} onChange={(evt)=>{this.setState({productDes : evt.target.value})}}/>
                            </div>
                            <div>
                                <label> Product Url </label><input type="text"  value={this.state.imageUrl} onChange={(evt)=>{this.setState({imageUrl : evt.target.value})}} />
                                <img src={this.state.imageUrl} className="productImg" />
                            </div>
                            <div>
                             <button type="submit" onClick={this.updateProductClick}> Update </button>
                            </div>
                        </form>
                    </div>

                </div>
              } 
            </div>
        );
    }
}
export default AdminProducts;
