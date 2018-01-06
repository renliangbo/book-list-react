import React ,{Component} from 'react';
import {connect}from 'react-redux';
import { selectBook } from '../actions';
import {bindActionCreators} from 'redux';
 class BookList extends Component{
	
	renderBooks(books){
		return books.map((book)=>{
			return (
				<li
					className="list-group-item"
					onClick={()=>this.props.selectBook(book)}
					key={book.title}>
					{book.title}
				</li>
			)
		})
	}
	render(){
		return( 
			<ul className="list-group col-md-4">
				{this.renderBooks(this.props.books)}
			</ul>
		)
	}
};

function mapDispatchToProps(dispatch){
	return bindActionCreators({selectBook},dispatch);
};

function mapStateToProps(state){
	return {
		books:state.books
		//activeBook:state.activeBook
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(BookList);