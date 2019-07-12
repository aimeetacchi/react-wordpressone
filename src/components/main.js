import React, { Component } from 'react'
import Card from './card';

export default class Main extends Component {

    state = {
        cats: [],
        perPage: 'per_page=4',
        totalPages: '3',
        currentPage: 1,
        catPage: [],
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
 
     catPage = (id) => {
            // Do a request to get the cat data that matches the id passed in...
            console.log('clicking to get cat page', id);

            const request = async () => {
            // Make Request to -
            let dataURL = `http://wordpressreactone.atspace.co.uk/wp-json/wp/v2/cats?include=${id}`
            const res = await fetch(dataURL);
            
            const catPage = await res.json();
            this.setState({catPage})
        }
        request();

     }

     goBack = () => {
        this.setState({
            catPage: []
        })
     }


    render() {
        const {currentPage, cats, catPage} = this.state;

        return (
            <main>
                <h2>All the different cats from the wordpress API</h2>
                <div className={"paganation " + (catPage.length === 0 ? 'show' : 'hidden')}>
                    
                    {currentPage > 1 ? <div className="prev" onClick={() => this.prevPage(currentPage)}> + Prev </div> : null}

                    {currentPage < 3 ? <div className="next" onClick={() => this.nextPage(currentPage)}>Next + </div> : null}
                    
                </div>
                <div className={"cards " + (catPage.length === 0 ? 'show' : 'hidden')}>
                {
                    cats <= 0 ? <p>fetching cats...</p> : cats.map(cat => <Card key={cat.id} cat={cat} catPage={this.catPage}/>)
                }    
                </div>
                <div className={"catPage " + (catPage.length >= 1 ? 'show' : 'hidden')}>
                      
                    {catPage.length >= 1 ? catPage.map(cat => (
                                    <div key={cat.id} className="cat">
                                        <h1 className="name"> {cat.acf.name} </h1>
                                        <div className="bio"> Bio: <br/>{cat.acf.bio} </div>
                                        <br/>
                                        <div className="color"> {cat.acf.color} </div>
                                        <div className="age"> {cat.acf.age} </div>
                                        <div className="btn" onClick={() => this.goBack()}> Go Back </div>
                                    </div>
                                    )) : null}

                </div>
                
            </main>
        )
    }
}
