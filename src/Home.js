import React,{Component} from "react";

class Home extends Component {
    constructor(props) {
      super(props) 
      this.state = { isEmptyState: true }
    }

    triggerOpenAlertState = (card) => {
      this.setState({
    ...this.state,
    isEmptyState: false,
    isOpenAlertState: true,
    card:card,
      })
    }


  render() {
      const{isOpenAlertState,isEmptyState}=this.state;
    return (
      <div>
        <i class="star outline icon big" id="favourites"></i>
        <GoogleAuth />
         <div>
      {this.state.isEmptyState && <Cards openAlert={()=>this.triggerOpenAlertState()} />}

      <ModalExample card={this.state.card} isOpen={this.state.isOpenAlertState}/>
    </div>
    </div>
    )
  }
}

export default Home;