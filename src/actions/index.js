export function selectBook(book){
	console.log('a book has been selected');
	return {
		type:'BOOK_SELECTED',
		payload:book
	}
}