import React, { Component } from 'react'
import Card from './card';

export default class Main extends Component {

    state = {
        cats: [],
        perPage: 'per_page=3',
        totalPages: '3',
        currentPage: 1,
        prev_page: '',
        next_page: '',
    }

    componentDidMount() {

        
        let dataURL = `https://cors-anywhere.herokuapp.com/http://wordpressreactone.atspace.co.uk/wp-json/wp/v2/cats?${this.state.perPage}&page=${this.state.currentPage}&orderby=title&order=asc`;
        
    //     let wpFetchHeaders = {
    //       headers: {
    //         'Access-Control-Allow-Origin': '*',
    //         'Access-Control-Expose-Headers': 'x-wp-total'
    //       }
    //     }
        
    //     async function getNumPosts() {
    //         const { headers } = await fetch(dataURL, wpFetchHeaders)
    //         return headers['x-wp-totalpages']
    //     }

    //    getNumPosts()

        const request = async () => {
            const res = await fetch(dataURL);
            // console.log(res.headers)
            const cats = await res.json();
            this.setState({cats})
        }
        request()   
    }

    getPosts = () => {
        console.log('button clicked')
    }

   

    render() {
        return (
            <main>
                <h2>All the different cats from the wordpress API</h2>
                <div className="cards">
                {
                    this.state.cats <= 0 ? <p>fetching cats...</p> : this.state.cats.map(cat => <Card key={cat.id} cat={cat}/>)
                }    
                </div>
                <div className="paganation">
                    <button className="prev" onClick={() => this.getPosts(this.prev_page)}> + Prev </button>
                    <button className="next" onClick={() => this.getPosts(this.next_page)}>Next + </button>
                </div>
            </main>
        )
    }
}
