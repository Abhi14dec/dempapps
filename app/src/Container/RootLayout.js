import React,{Component} from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';



class RootLayout extends Component {

    render(){
        return(
          <div className="main-container">
            <Header/>
              {this.props.children}
            <Footer/>
          </div>
        )
    }
}

export default RootLayout;