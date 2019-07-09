import React, { Component } from 'react'
import Card from './card';

export default class Main extends Component {

    state = {
        cats: [],
        perPage: 'per_page=4',
        totalPages: '3',
        currentPage: 1,
    }

    componentDidMount() {
        console.log('Component did Mount')
        this.request();  
    }

    request = async () => {
        let dataURL = `https://cors-anywhere.herokuapp.com/http://wordpressreactone.atspace.co.uk/wp-json/wp/v2/cats?${this.state.perPage}&page=${this.state.currentPage}&orderby=title&order=asc`;

        const res = await fetch(dataURL);
        // console.log(res.headers)
        const cats = await res.json();
        this.setState({cats})
    }

    prevPage = (currentPage) => {
        this.setState({currentPage: currentPage - 1}, () => {
            this.request();
            console.log('clicking prev page')
        }) 
    }

    nextPage = (currentPage) => {
       this.setState({currentPage: currentPage + 1}, () => {
        this.request();
        console.log('clicking next page')
       })
         
     }
 



    render() {
        const {currentPage, cats} = this.state;
        return (
            <main>
                <h2>All the different cats from the wordpress API</h2>
                <div className="cards">
                {
                    cats <= 0 ? <p>fetching cats...</p> : cats.map(cat => <Card key={cat.id} cat={cat}/>)
                }    
                </div>
                <div className="paganation">
                    
                    {currentPage > 1 ? <div className="prev" onClick={() => this.prevPage(currentPage)}> + Prev </div> : null}

                    {currentPage < 3 ? <div className="next" onClick={() => this.nextPage(currentPage)}>Next + </div> : null}
                    
                </div>
            </main>
        )
    }
}
