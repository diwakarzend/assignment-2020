import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { fetchBookList } from '../store/actions/bookAction';

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = { displaytab: false };
    props.fetchBookList();
  }

  toggletab = () => {
    this.setState({
      displaytab: !(this.state.displaytab),
    })

   
  }

  

render(){
    return(
        <div className="accordian-wrapper">         
         
            <div>
                    <div className="accordian-tab">
                      <h2>Library Books</h2><span onClick={this.toggletab}>{this.state.displaytab ? '-' : '+'}</span>
                    </div>
                    <div className={this.state.displaytab ? "accordian-content active" : "accordian-content"}>
                    {this.props.bookList && this.props.bookList.map(({bookId,bookName,publisherName,categoryName}) => {
                      return <div class="box-detail"><p class="book-refer">{bookId}</p>
                      <p class="book-refer">{bookName}</p>
                      <p class="book-refer">{publisherName}</p>
                      <p>Publisher</p>
                    </div>})
                    }
                    </div>
                  </div>
      
      
      </div>
    )
}
}
function mapStateToProps(state) {
  const { bookReducer } = state;
  return {
    bookList: bookReducer.bookList

  };
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchBookList,
    },
    dispatch
  )
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Book);
