import React, { Component } from 'react';
import axios from 'axios';


class Home extends Component {
    constructor(props) {
        super(props);

        // Sets up our initial state
        this.state = {
            error: false,
            hasMore: true,
            isLoading: false,
            images: [],
        };

        // Binds our scroll event handler
        window.onscroll = () => {
            const {
                loadImages,
                state: {
                    error,
                    isLoading,
                    hasMore,
                },
            } = this;


            if (error || isLoading || !hasMore) return;

            // Checks that the page has scrolled to the bottom
            if (
                window.innerHeight + document.documentElement.scrollTop
                === document.documentElement.offsetHeight
            ) {
                loadImages();
            }
        };
    }

    loadImages = () => {
        this.setState({ isLoading: true }, () => {
            axios.get('https://randomuser.me/api/?results=12')
                .then((results) => {
                    console.log(results, "====results")
                    // Creates a massaged array of user data
                    const nextImages = results.data.results.map(user => ({
                        name: Object.values(user.name).join(' '),
                        photo: user.picture.large,
                    }));


                    this.setState({
                        hasMore: (this.state.images.length < 100),
                        isLoading: false,
                        images: [
                            ...this.state.images,
                            ...nextImages,
                        ],
                    });
                })
                .catch((err) => {
                    this.setState({
                        error: err.message,
                        isLoading: false,
                    });
                })
        });
    }

    componentWillMount() {
        // Loads some images on initial load
        this.loadImages();
    }

    render() {
        const {
            error,
            hasMore,
            isLoading,
            images,
        } = this.state;

        return (
            <section>
                <div className="cardSearch">
                    <input type="search" placeholder="Search" className="serchBar" disabled/>
                    <i className="fa fa-search" aria-hidden="true"></i>
                </div>

                <div className="container">
                    <div className="row">
                        {images.map(item => {
                            return (
                                <div className="col">
                                    <div className="imgList">
                                        <img className="card-img-top rounded" src={item.photo} alt="Card image" />
                                        <div>
                                            <h5 className="mt-2" style={{ color: "grey" }}>{item.name}</h5>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <hr />
                    {error &&
                        <div style={{ color: '#900' }}>
                            {error}
                        </div>
                    }
                    {isLoading &&
                        <div>Loading...</div>
                    }
                    {!hasMore &&
                        <div>You did it! You reached the end!</div>
                    }

                </div>
            </section>
        )
    }
}

export default Home;