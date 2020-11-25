class Board extends React.Component {
	renderCellRow() {
		return (
			{Array(100).fill(1).map((value, index) -> {
					return <Cell />	
			})}
		)
	}

	render() {
		return ();
	} 
}