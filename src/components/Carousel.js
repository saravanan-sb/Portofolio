import React from 'react';
import Card from '../components/Card';
import Container from 'react-bootstrap/Container';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Covid 19 Tracker',
                    subTitle: 'Corona virus tracker.',
                    imgSrc: 'https://images.unsplash.com/photo-1584378834141-a7e026d31456?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
                    link: 'https://mrhelper.netlify.app',

                },
                {
                    id: 1,
                    title: 'Help Camp',
                    subTitle: 'The Campping and Trekking site.',
                    imgSrc: 'https://images.unsplash.com/photo-1508184782546-39f96de554aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
                    link: 'https://helpcamp.herokuapp.com/',
                },
                {
                    id: 2,
                    title: 'Blogger',
                    subTitle: 'A simple social blogging application using react and node RESTApi.',
                    imgSrc: 'https://images.unsplash.com/photo-1488751045188-3c55bbf9a3fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
                    link: 'https://median.netlify.com',
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return (
            <Container fluid={true}>
                <div className='project-title'>
                    <p>Fun Projects</p>
                    <div><span className="sub-title">Check About Section for Professional Projects details.</span></div>

                </div>
                <hr />
                <div className='main-card'>
                    {this.makeItems(this.state.items)}
                </div>
                <div className='button-text'>
                    <button class="btn btn--2">
                        <a href="https://www.github.com/saravanansb96" target="_blank">View more on Github   <i class="fab fa-github"></i></a>
                    </button>
                </div>
            </Container>

        );
    }

}

export default Carousel;