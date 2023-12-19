import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Component } from "react";
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";

class Books extends Component {
	state = {
		selectedCategory: fantasy,
	};
	render() {
		return (
			<Container fluid="md">
				<Button
					className="btn btn-outline-success bg-transparent me-2 fs-4 rounded-pill px-3 py-2"
					onClick={() => this.setState({ selectedCategory: fantasy })}
				>
					Fantasy
				</Button>
				<Button
					className="btn btn-outline-success bg-transparent me-2 fs-4 rounded-pill px-3 py-2"
					onClick={() => this.setState({ selectedCategory: history })}
				>
					history
				</Button>
				<Button
					className="btn btn-outline-success bg-transparent me-2 fs-4 rounded-pill px-3 py-2"
					onClick={() => this.setState({ selectedCategory: horror })}
				>
					horror
				</Button>
				<Button
					className="btn btn-outline-success bg-transparent me-2 fs-4 rounded-pill px-3 py-2"
					onClick={() => this.setState({ selectedCategory: romance })}
				>
					romance
				</Button>
				<Button
					className="btn btn-outline-success bg-transparent me-2 fs-4 rounded-pill px-3 py-2"
					onClick={() => this.setState({ selectedCategory: scifi })}
				>
					scifi
				</Button>
				<Row className="g-3">
					{this.state.selectedCategory.map((book) => {
						return (
							<Col key={book.asin} className="col-12 col-md-4 col-lg-3 border-bottom border-3 border-info">
								<Card className=" p-3 border-0">
									<Card.Img variant="top" src={book.img} className="" />
									<Card.Body>
										<Card.Title className="fs-6">{book.title}</Card.Title>
										<Card.Text className="mb-0">{book.price} Euro</Card.Text>
									</Card.Body>
								</Card>
							</Col>
						);
					})}
				</Row>
			</Container>
		);
	}
}
export default Books;
