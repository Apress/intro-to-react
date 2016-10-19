class GenericComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = { thing: props.thingy };
	}
}

GenericComponent.defaultProps = { thingy: "cheese" };