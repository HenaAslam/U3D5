import { Component } from "react";
import { Row, Container, Spinner, Alert } from "react-bootstrap";
import SingleMovie from "./SingleMovie";

class GalleryComponent extends Component {
  state = {
    movies: [],
    isLoading: true,
    isError: false,
  };

  fetchMovies = async () => {
    try {
      let res = await fetch(
        "https://www.omdbapi.com/?apikey=2404898d&s=" + this.props.saga
      );
      if (res.ok) {
        let data = await res.json();

        this.setState({
          movies: data,
          isLoading: false,
        });
      } else {
        this.setState({
          isLoading: false,
          isError: true,
        });
      }
    } catch (error) {
      this.setState({
        isLoading: false,
        isError: true,
      });
    }
  };
  componentDidMount() {
    this.fetchMovies();
  }

  render() {
    return (
      <Container>
        {/* {console.log()} */}
        <h5 style={{ color: "white" }}>{this.props.saga.toUpperCase()}</h5>
        {this.state.isError && (
          <Alert variant="danger" className="w-50">
            Something's wrong
          </Alert>
        )}
        {this.state.isLoading && (
          <div className="text-center">
            {" "}
            <Spinner animation="border" variant="success" />
          </div>
        )}
        <Row className="mt-4 ">
          {this.state.movies.Search !== undefined &&
            this.state.movies.Search.map((m) => (
              <SingleMovie movie={m} key={m.imdbID} />
            ))}
        </Row>
      </Container>
    );
  }
}
export default GalleryComponent;
